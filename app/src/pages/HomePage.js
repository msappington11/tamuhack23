import { Typography } from '@mui/material'
import { UseState, useEffect } from 'react'
import SignIn from '../components/SignIn'
import axios from 'axios'

import NavBar from './NavBar'

export default function HomePage() {
    

    return (
        <div>
            <NavBar></NavBar>
            <Typography variant='h1'>Marketpad</Typography>
            <Typography variant='h2'>The only shopping list you'll ever need.</Typography>
            <SignIn></SignIn>
        </div>
    )
}