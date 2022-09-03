import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";
import Container from "./Container";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

/**
 * Layout of the site
 */
export default function App() {
  const GlobalStyle = createGlobalStyle`
      div {
          font-family: 'Roboto', sans-serif;
      }
  `;

    return (
    <Container>
      <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
      </BrowserRouter>
    </Container>
    )    
}
  