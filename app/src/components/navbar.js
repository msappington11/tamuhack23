import { useState, useEffect, useContext } from 'react'
import { Typography, Menu, MenuItem, Button } from '@mui/material'
import SignIn from './SignIn'

import { UserContext } from '../contexts/UserContext'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)
    const [profileAnchor, setProfileAnchor] = useState(null) // used for signout

    // on page load, get profile information
    useEffect(() => {
        let fname = localStorage.getItem('fname')
        let lname = localStorage.getItem('lname')
        let email = localStorage.getItem('email')
        if(fname && lname && email)
            setUser({firstName: fname, lastName: lname, email: email})
    }, [])

    return(
        <div>
            <Typography>this is a navbar</Typography>
            <Button variant="contained" onClick={(event) => {setProfileAnchor(event.currentTarget)}}>{user.firstName}</Button>
            <Menu anchorEl={profileAnchor} onClose={() => {setProfileAnchor(null)}} open={Boolean(profileAnchor)}>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    )

    function logout() {
        setUser({})
        localStorage.removeItem('fname')
        localStorage.removeItem('lname')
        localStorage.removeItem('email')
        setProfileAnchor(null)
    }
}