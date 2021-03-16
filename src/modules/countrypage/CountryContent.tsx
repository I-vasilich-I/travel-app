import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';
import {ImagesSlideType} from './ImageSlide';
import Map from './Map'
import { PLACES_API_URL, COORDINATES_API_URL } from '../constants';
import VideoPlayer from './VideoPlayer';
import WeatherWidget from './WeatherWidget';
import TimeWidget from './TimeWidget';

interface CountryContentProps {
  path: string;
  lang: string;
  capital: string;
  country: string
}

interface MapObj {
  coordinates: any,
  location: any
}

export default function CountryContent(props: CountryContentProps): JSX.Element {
  const { path, lang, capital, country } = props;

  const placesArray: Array<ImagesSlideType> = [];
  const mapObj: MapObj = {
    coordinates: [],
    location: []
  };
  const [placesData, setPlacesData] = useState(placesArray);
  const [mapData, setMapData] = useState(mapObj);
  const [videoLink, setVideoLink] = useState('');
  const [isPlacesLoaded, setIsPlacesLoaded] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  //Placese data
  useEffect(() => {
    fetch(`${PLACES_API_URL}/${path}`)
    .then(res => res.json())
    .then((data) => {
      data[0].places.map((elem: any) => {
        const place: ImagesSlideType = {
          image: elem.img,
          title: elem.name[lang],
          description: elem.info[lang]
        }
        placesArray.push(place);
      })
      setPlacesData(placesArray);
      setVideoLink(data[0].videoUrl);
      setIsPlacesLoaded(true);
    })
    .catch((e) => console.log(e.message));
}, [lang, path]);

//Map data
useEffect(() => {
  fetch(`${COORDINATES_API_URL}/${path}`)
    .then(res => res.json())
    .then((data) => {
      mapObj.coordinates = data[0].coordinates;
      mapObj.location = data[0].location;
      setMapData(mapObj);
      setIsMapLoaded(true);
    })
    .catch((e) => console.log(e.message));

}, [lang, path]);

  return (
    <div className='country-content'>
      <ContentTitle title='Текущее время в стране'/>
      <TimeWidget lang={lang} timeZone='Europe/Minsk'/>
      <ContentTitle title='Погода в стране'/>
      <WeatherWidget country={path}/>
      {
        isPlacesLoaded ?
        <>
          <ContentTitle title='Фотогалерея'/>
          <ImageSlider slides={placesData}/>
          <ContentTitle title='Видео о стране'/>
          <VideoPlayer url={videoLink}/>
        </>
        :
        <></>
      }
      {
        isMapLoaded ?
        <>
          <ContentTitle title='Карта'/>
          <Map
            location={mapData.location}
            coordinates={mapData.coordinates}
            lang={lang}
            capital={capital}
            country={country}
            typePolygon={path === 'Belarus' || path === 'Poland' ? 'Polygon' : 'MultiPolygon'}
          />
        </>
        :
        <></>
      }
    </div>
  );
}

function ContentTitle(props: { title: string }) {
  return <div className='content-caption'><h1>{props.title}</h1></div>
}
