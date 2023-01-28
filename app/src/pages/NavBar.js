import { useNavigate } from "react-router-dom";

import '../styles/home-style.css'

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className='top-page'>
            <div class="banner">
                <a href="/" onClick={() => navigate("/")}><img src="images/marketpad-logo.png" height="100" alt="Link to Album of the Week Home"></img></a>
                <div className='more-header'>
                    <a href="/aboutPage" onClick={() => navigate("/aboutPage")}>About</a>
                    <a href="/selectionPage" onClick={() => navigate("/selectionPage")}>Selection</a>
                    <a href="/registerPage" onClick={() => navigate("/registerPage")}>Register</a>
                    <a href="/ratingsPage" onClick={() => navigate("/ratingsPage")}>Ratings</a>
                    <a href="/samplePage" onClick={() => navigate("/samplePage")}>Sample Page</a>
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar