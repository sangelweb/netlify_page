import React, { Component } from 'react'
import styled from "@emotion/styled"
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';


const SwiperWrapper = styled('div')`
  .swiper-container {
    width: 100%;
    height: 480px;
    margin-bottom: var(--spacing);
  }

  .slider-nav {
    display: flex;
    align-items: center;
    margin-top: -12px;
  }

  .swiper-pages {
    width: auto;
  }

  .slider-nav hr {
    flex-grow: 1;
    margin-left: 24px;
    margin-right: 8px;
  }

  .swiper-button-disabled {
    opacity: .5;
  }
`

class HeaderSlider extends Component {
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      pagination: {
        el: ".swiper-pages",
        type: "fraction",
      }
    });
  }

  render() {
    return (
      <SwiperWrapper>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={'./MacBook-Pro-15@0,5x.jpeg'} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={'./MacBook-Pro-15@0,5x.jpeg'} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={'./MacBook-Pro-15@0,5x.jpeg'} alt="" />
            </div>
          </div>
        </div>
        <div className="slider-nav">
          <span className="swiper-pages" />
          <hr />
          <ChevronLeftRoundedIcon className="swiper-btn-prev" fontSize={'large'} />
          <ChevronRightRoundedIcon className="swiper-btn-next" fontSize={'large'} />
        </div>
      </SwiperWrapper>
    );
  }
}

export default HeaderSlider