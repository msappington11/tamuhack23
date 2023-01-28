import { useState, useEffect, useContext } from 'react'
import Navbar from '../components/navbar'
import { UserContext } from '../contexts/UserContext'

export default function RecipesPage() {

    const [recipes, setRecipes] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        // get users recipes
        let options = {
            method: 'GET',
            url: '/'
        }
    } ,[])

    return (
        <div>
            <Navbar></Navbar>
            
        </div>
    )
}