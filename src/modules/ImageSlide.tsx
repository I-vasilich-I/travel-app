import React from 'react';

export interface ImagesSlideType {
  image: string,
  title: string,
  description: string,
  location: string,
}

export function ImageSlide(props: ImagesSlideType): JSX.Element {
  const {image, title, description, location} = props;

  return (
    <div className='slider-box__item'>
      <div className="slide">
        <img className='slider-box__item__img' src={image} alt={title}/>
        <div className='slider-box__item__caption'>
          <span className='slider-box__item__title'>{title}</span>
          <span className='slider-box__item__desc'>{description}</span>
          <span className='slider-box__item__location'>{location}</span>
        </div>
      </div>
    </div>
  );
}
