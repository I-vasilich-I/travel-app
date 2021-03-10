import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';

import {ImageSlide, ImagesSlideType} from "./ImageSlide";
import CloseIcon from '@material-ui/icons/Close';


interface ImagesSliderProps {
  slides: Array<ImagesSlideType>,
}

export default function ImageSlider(props: ImagesSliderProps): JSX.Element {

  const [fullScreenSlider, setFullScreenSlider] = useState(false);
  const imageSliderRef = useRef<Slider>(null);

  const {slides} = props;

  function fullscreenChange(value: boolean): void {
    setFullScreenSlider(value);
  }

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
    fade: true,
  }

  function changeSlideNext() {
    if (fullScreenSlider) {
      imageSliderRef.current?.slickNext();
    }
  }

  function changeSlidePrev() {
    if (fullScreenSlider) {
      imageSliderRef.current?.slickPrev();
    }
  }

  useKey('ArrowRight', changeSlideNext);
  useKey('ArrowLeft', changeSlidePrev);
  return (
    <div className={`slider-box ${fullScreenSlider ? 'slider-box__fullscreen' : ''}`}>
      <button className='btn-fullscreen' title='Закрыть режим просмотра' onClick={() => {
        fullscreenChange(false)
      }}><CloseIcon/></button>
      <Slider ref={imageSliderRef}  {...settings}>
        {
          slides.map((slide, index) => {
            return (
              <ImageSlide key={index} image={slide.image} title={slide.title} description={slide.description}
                          location={slide.location} onSlideClick={() => {
                fullscreenChange(true)
              }}/>
            )
          })
        }
      </Slider>
    </div>
  );
}

function useKey(code: string, callback: (event: KeyboardEvent) => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {

    function handle(event: KeyboardEvent) {
      if (event.code === code) {
        callbackRef.current(event);
      }
    }

    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [code]);
}
