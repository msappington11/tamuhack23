import { useNavigate } from "react-router-dom";
import SignIn from '../components/SignIn'

import '../styles/home-style.css'

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav id='menu'>
            <ul>
                <li><a href='/HomePage' onClick={() => navigate("/HomePage")} class="image-yeet"><img src="images/marketpad-banner.png" alt="Link to Marketpad Home" height="40"></img></a></li>
                <li><a href='/ListPage' onClick={() => navigate("/ListPage")} class="linknav">Grocery List</a></li>
                <li><a href='/RecipePage' onClick={() => navigate("/RecipePage")} class="linknav">Recipes</a></li>
                <li><a class='dropdown-arrow'>Sample Dropdown</a>
                <ul class='sub-menus'>
                    <li><a href='/HomePage' onClick={() => navigate("/HomePage")}>drums</a></li>
                    <li><a href='/HomePage' onClick={() => navigate("/HomePage")}>please</a></li>
                    <li><a href='/HomePage' onClick={() => navigate("/HomePage")}>fab</a></li>
                </ul>
                </li>
            </ul>
            <div class="GoogleSignIn">
                    <SignIn></SignIn>
                </div>
        </nav>
    )
}

export default NavBar