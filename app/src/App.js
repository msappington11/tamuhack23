import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material";

// import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
// import NewSelectionPage from "./pages/NewSelectionPage"
// import SamplePage from "./pages/SamplePage"
// import RatingsPage from "./pages/RatingsPage"
// import RegistrationPage from "./pages/RegistrationPage"

// import Footer from "./pages/Footer"
// import NavBar from "./pages/NavBar"

import { UserContext } from "./contexts/UserContext"


function App() {
  const [user, setUser] = useState(false)

  const theme = createTheme({
    palette: {
      primary: { main: '#843a3a' },
    },
    typography: {
      button: {
        textTransform: 'none',
        fontSize: 'large'
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
        {/* <NavBar /> */}
          <Routes> 
            <Route path="/" element={<HomePage />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;