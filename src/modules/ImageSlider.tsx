import React from 'react';
import Slider from 'react-slick';

import firstImage from '../assets/images/1.jpg';

function ImageSlider(): JSX.Element {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='slider-box'>
      <div className="slider-box__title">
        <span>Фотогалерея</span>
      </div>
      <Slider  {...settings}>
        <div className='slider-box__item'>
          <div className="slide">
            <img className='slider-box__item__img' src={firstImage} alt='first slide'/>
            <div className='slider-box__item__caption'>
              <span className='slider-box__item__title'>Брестская крепость</span>
              <span className='slider-box__item__desc'>БрестскаяБрестскаяБрестскаяБрестскаяБрестскаяБрестская крепость</span>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
