import { Typography } from '@mui/material'
import { UseState, useEffect } from 'react'
import SignIn from '../components/SignIn'
import axios from 'axios'

export default function HomePage() {
    

    return (
        <div>
            <Typography variant='h1'>Name</Typography>
            <Typography variant='h2'>description</Typography>
            <SignIn></SignIn>
        </div>
    )
}