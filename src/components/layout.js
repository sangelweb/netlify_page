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
  }
  
  hr {
    margin: 0;
    border: 1px solid white;
  }

  .row {
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
  }

  .col,
  [class*="col-"] {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  .col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }

  .col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  .col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }

  .col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  .col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }

  .col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }

  .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-1 {
    margin-left: 8.333333%;
  }

  .offset-2 {
    margin-left: 16.666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.333333%;
  }

  .offset-5 {
    margin-left: 41.666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.333333%;
  }

  .offset-8 {
    margin-left: 66.666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.333333%;
  }

  .offset-11 {
    margin-left: 91.666667%;
  }

  .m-auto {
    margin: 0 auto;
  }
`


export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Navbar />
    {children}
  </>
)
