import React from "react"

export default () => (
  <header id="header">
    <div class="container">
      <div class="header-box">
        <div class="col-6" data-aos="fade-right">
          <div class="wrapper">
            <span class="tagline">Diseño y Desarrollo Web</span>
            <h1 class="web-brand">Sangel<span class="pink">Web.</span></h1>
            <p>
              In a more general sense, the core principles will require a vast
              knowledge. Conversely, the possibility of achieving
            </p>
            <hr />
          </div>
          <div class="social">
            <span>Síguenos en</span>
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
          </div>
        </div>
        <div class="offset-2 col-4" data-aos="fade-left">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="img/Sangelweb.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="img/first-web.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="img/MacBook-Pro-15@0,5x.png" alt="" />
              </div>
            </div>
          </div>
          <div class="slider-nav">
            <span class="swiper-pages"></span>
            <hr />
            <i class="fa fa-angle-left swiper-btn-prev"></i>
            <i class="fa fa-angle-right swiper-btn-next"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
)