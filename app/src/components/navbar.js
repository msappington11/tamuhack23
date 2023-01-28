import { useState, useEffect, useContext } from 'react'
import { Typography, Menu, MenuItem, ButtonBase, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'

import { UserContext } from '../contexts/UserContext'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)
    const [profileAnchor, setProfileAnchor] = useState(null) // used for signout

    const navigate = useNavigate();

    // on page load, get profile information
    useEffect(() => {
        let fname = localStorage.getItem('fname')
        let lname = localStorage.getItem('lname')
        let email = localStorage.getItem('email')
        let pfp = localStorage.getItem('pfp')
        console.log(pfp)
        if(fname && lname && email && pfp)
            setUser({firstName: fname, lastName: lname, email: email, pfp: pfp})
    }, [])

    return(
        <div>
            <Typography>this is a navbar</Typography>
            <ButtonBase variant="contained" onClick={(event) => {setProfileAnchor(event.currentTarget)}}>
                <Avatar src={user.pfp}></Avatar>
                <Typography>{user.firstName}</Typography>
                <Typography>{user.lastName}</Typography>
            </ButtonBase>
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
        localStorage.removeItem('pfp')
        setProfileAnchor(null)
        navigate('/')
    }
}