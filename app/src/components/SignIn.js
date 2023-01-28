import jwt_decode from 'jwt-decode'
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'

import { UserContext } from '../contexts/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const [google, setGoogle] = useState(null)
    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        let options = {
            method: 'GET',
            url: '/google'
        }
        axios.request(options).then((res) => {
            setGoogle(res.data.google)
        })
        .catch((err) => {
            console.log('error getting client id')
        })
    }, [])


    return (
        <div id="google">
            <GoogleOAuthProvider clientId={google}>
                <GoogleLogin
                onSuccess={credentialResponse => {
                    let decoded = jwt_decode(credentialResponse.credential)

                    setUser({firstName: decoded.given_name, lastName: decoded.family_name, email: decoded.email, pfp: decoded.picture})
                    localStorage.setItem('fname', decoded.given_name)
                    localStorage.setItem('lname', decoded.family_name)
                    localStorage.setItem('email', decoded.email)
                    localStorage.setItem('pfp', decoded.picture)
                    navigate('/HomePage')
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}