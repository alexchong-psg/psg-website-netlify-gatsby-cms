/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import FaPrevious from "react-icons/lib/io/chevron-left";
// import FaNext from "react-icons/lib/io/chevron-right";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PreviewCompatibleBackgroundImage from './PreviewCompatibleBackgroundImage';

import './HomeCarousel.scss';

class HomeCarousel extends React.Component {
  static propTypes = {};

  renderSlides(slides) {
    return slides.map((slide, idx) => {
      const style = {
        backgroundImage: slide.image
      };
      return (
        <PreviewCompatibleBackgroundImage
          tag="section"
          imageInfo={slide.image}
          key={`index_slide_${idx}`}
        >
          <div>
            <div style={style} className="slide">
              <div className="descriptionContainer">
                <div className="description">
                  <h1 style={{ fontSize: '30px', marginBottom: '0' }}>
                    {slide.title}
                  </h1>
                  <p className="text">{slide.blurb}</p>
                </div>
              </div>
            </div>
          </div>
        </PreviewCompatibleBackgroundImage>
      );
    });
  }

  render() {
    const { slideshow } = this.props;
    if (!slideshow) return null;

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      speed: 1000, // Crossfade Speed
      draggable: false,
      swipe: false,
      swipeToScroll: false,
      touchMove: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: (
        <div>
          <FaChevronLeft className="slick-fa-icon" />
        </div>
      ),
      nextArrow: (
        <div>
          <FaChevronRight className="slick-fa-icon" />
        </div>
      )
    };

    // style={{overflow:'hidden'}}
    return (
      <div>
        <Slider {...settings}>
          {this.renderSlides(slideshow)}
          {/* <div>
            <div
              style={{ backgroundImage: `url('home1.jpg')` }}
              className="slide"
            >
              <div className="descriptionContainer">
                <div className="description">
                  <h1 style={{ fontSize: "30px", marginBottom: "0" }}>
                    Software Engineering
                  </h1>
                  <p className="text">
                    Full service multi-platform rapid application development
                    using a mix of on/off shore development and delivery
                    professionals
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{ backgroundImage: `url('home2.jpg')` }}
              className="slide"
            >
              <div className="descriptionContainer">
                <div className="description">
                  <h1 style={{ fontSize: "30px", marginBottom: "0" }}>
                    Software Engineering
                  </h1>
                  <p className="text">
                    Full service multi-platform rapid application development
                    using a mix of on/off shore development and delivery
                    professionals
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}

export default HomeCarousel;
