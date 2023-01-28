import { Typography } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import SignIn from '../components/SignIn'
import axios from 'axios'

import NavBar from './NavBar'

import Navbar from '../components/navbar'

export default function ListPage() {

    return (
        <div>
            <NavBar></NavBar>
            <Typography variant='h1'>Marketpad</Typography>
            <Typography variant='h2'>The only shopping list you'll ever need.</Typography>
            <SignIn></SignIn>
        </div>
    )
}