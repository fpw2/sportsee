import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

/**
 * Layout of the site
 */
export default function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
      </BrowserRouter>
    )    
}
  