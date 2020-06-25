import React from "react"
import { Global, css } from "@emotion/core"
import Navbar from "../components/navbar"

const globalStyles = css`
  :root {
    --primary: #fc5185;
    --secondary: #364f6b;
    --spacing: 66px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: metropolis, sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: var(--secondary);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Lato, serif;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  h1 {
    font-size: 86px;
  }
  
  h2 {
    font-size: 50px;
  }
  
  h3 {
    font-size: 24px;
  }
  
  h4 {
    font-size: 20px;
  }
  
  h5 {
    font-size: 18px;
  }
  
  p {
    font-weight: 300;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }
  
  img {
    width: 100%;
  }
  
  header,
  section {
    padding: var(--spacing) 0;
    height: 800px;
    margin-bottom: 30px;
    background-color: burlywood;
  }
  
  hr {
    margin: 0;
    border: 1px solid white;
  }
`


export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Navbar />
    {children}
  </>
)
