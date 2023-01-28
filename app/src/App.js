import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material";

// import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import ListPage from "./pages/ListPage"

// import Footer from "./pages/Footer"

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
          <Routes> 
            <Route path="/" element={<LoginPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/ListPage" element={<ListPage />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;