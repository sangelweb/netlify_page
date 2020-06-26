import React from "react"
import styled from '@emotion/styled'
import Container from '../components/container'
import HeaderSlider from '../components/header-slider'
import { Facebook, Twitter, Instagram } from '@material-ui/icons'

const Header = styled('header')`
  background: var(--secondary);
	background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("./header-background.jpg");
  background-size: cover;
	color: white;
	width: 100%;

  .header-box {
    display: flex;
    margin: 0 auto;
    margin-top: 94px;
  }

  .header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 480px;
    margin-bottom: var(--spacing);
  }

  .header-box .tagline {
    position: absolute;
    top: 0;
    display: block;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
    background: var(--secondary);
    padding: 6px 28px;
  }

  .header-box .brand {
    font-family: norwester, sans-serif;
    font-size: 82px;
    margin-top: auto;
    margin-bottom: 40px;
    
    span {
      color: var(--primary);
    }
  }

  .header-box p {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: var(--spacing);
  }

  .social-box {
    display: flex;
    align-items: center;
  }

  a {
    margin-left: 24px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: var(--primary);
  }
`

export default () => (
  <Header id="header">
    <Container>
      <div className="header-box">
        <div className="col-6">
          <div className="header-wrapper">
            <span className="tagline">Diseño y Desarrollo Web</span>
            <h1 className="brand">Sangel<span>Web.</span></h1>
            <p>
              In a more general sense, the core principles will require a vast
              knowledge. Conversely, the possibility of achieving
            </p>
            <hr />
          </div>
          <div className="social-box">
            <span>Síguenos en</span>
            <a href><Facebook /></a>
            <a href><Twitter /></a>
            <a href><Instagram /></a>
          </div>
        </div>
        <div className="offset-2 col-4">
          <HeaderSlider />
        </div>
      </div>
    </Container>
  </Header>
)