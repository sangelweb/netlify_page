import React from "react"

export default () => (
  <header id="header">
    <div className="container">
      <div className="header-box">
        <div className="col-6">
          <div className="wrapper">
            <span className="tagline">Diseño y Desarrollo Web</span>
            <h1 className="web-brand">Sangel<span className="pink">Web.</span></h1>
            <p>
              In a more general sense, the core principles will require a vast
              knowledge. Conversely, the possibility of achieving
            </p>
            <hr />
          </div>
          <div className="social">
            <span>Síguenos en</span>
            <a href><i className="fa fa-facebook" /></a>
            <a href><i className="fa fa-twitter" /></a>
            <a href><i className="fa fa-instagram" /></a>
          </div>
        </div>
        <div className="offset-2 col-4">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="img/Sangelweb.png" alt />
              </div>
              <div className="swiper-slide">
                <img src="img/first-web.png" alt />
              </div>
              <div className="swiper-slide">
                <img src="img/MacBook-Pro-15@0,5x.png" alt />
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <span className="swiper-pages" />
            <hr />
            <i className="fa fa-angle-left swiper-btn-prev" />
            <i className="fa fa-angle-right swiper-btn-next" />
          </div>
        </div>
      </div>
    </div>
  </header>
)