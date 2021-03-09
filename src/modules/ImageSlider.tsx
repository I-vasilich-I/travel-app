import React from 'react';
import Slider from 'react-slick';

import {ImageSlide, ImagesSlideType} from "./ImageSlide";


interface ImagesSliderProps {
  slides: Array<ImagesSlideType>,
}

function ImageSlider(props: ImagesSliderProps): JSX.Element {

  const {slides} = props;

  const settings = {
    customPaging(index: number): JSX.Element {
      return (
        <a>
          <img src={slides[index].image} alt={slides[index].title}/>
        </a>
      );
    },
    dotsClass: "slick-dots",
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade:true,
  }

  return (
    <div className='slider-box'>
      <Slider  {...settings}>
        {
          slides.map((slide, index) => {
            return (
              <ImageSlide key={index} image={slide.image} title={slide.title} description={slide.description}
                          location={slide.location}/>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default ImageSlider;
