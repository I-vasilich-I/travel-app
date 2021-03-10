import React from 'react';
import ImageSlider from "./ImageSlider";
import {ImagesSlideType} from "./ImageSlide";
import firstImage from "../assets/images/1.jpg";
import secondImage from "../assets/images/2.jpg";
import thirdImage from "../assets/images/3.jpg";
import fourthImage from "../assets/images/4.jpg";
import fifthImage from "../assets/images/5.jpg";
import sixthImage from "../assets/images/6.jpg";

export default function CountryContent(): JSX.Element {

  const tempDate: Array<ImagesSlideType> = [
    {
      image: firstImage,
      title: 'Брестская крепость',
      description: 'Одно из знаковых мест Беларуси, символ советского сопротивления во время Второй мировой войны.',
      location: 'Брест'
    },
    {
      image: secondImage,
      title: 'Августовский канал',
      description: 'Судоходный канал, построенный в XIX веке, чтобы создать путь от Черного моря до Балтийского.',
      location: 'Немново, Гродненский район'
    },
    {
      image: thirdImage,
      title: 'Несвижский замок',
      description: 'В XVI веке Несвиж стал родовом гнездом Радзивиллов, главной династии в истории Великого Княжества Литовского.',
      location: 'Несвиж'
    },
    {
      image: fourthImage,
      title: 'Софийский собор',
      description: 'Первый мурованый храм на территории Беларуси, построенный в XI веке главным героем всех беларусских легенд Всеславом Черодеем.',
      location: 'Полоцк'
    },
    {
      image: fifthImage,
      title: 'Новогрудский замок',
      description: 'Новогрудок – древний беларусский город, который был первой столицей ВКЛ.',
      location: 'Новогрудок'
    },
    {
      image: sixthImage,
      title: 'Беловежская пуща',
      description: 'Беларусский повод для гордости – самый большой и старый лесной массив Европы.',
      location: 'Брестская область'
    }
  ]

  return (
    <div className='country-content'>
      <ImageSlider slides={tempDate}/>
    </div>
  );
}
