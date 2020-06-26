import React from "react"
import { Facebook, Twitter, Instagram } from '@material-ui/icons'
import Container from './container'
import HeaderSlider from './header-slider'

export default () => (
  <header id="header">
    <Container>
      <div className="header-box">
        <div className="col-6">
          <div className="wrapper">
            <span className="tagline">Diseño y Desarrollo Web</span>
            <h1 className="brand">Sangel<span>Web.</span></h1>
            <p>
              In a more general sense, the core principles will require a vast
              knowledge. Conversely, the possibility of achieving
            </p>
            <hr />
          </div>
          <div className="social">
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
  </header>
)