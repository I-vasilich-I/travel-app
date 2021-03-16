import React, {useEffect, useState} from 'react';
import ImageSlider from './ImageSlider';
import {ImagesSlideType} from './ImageSlide';
import Map from './Map'
import {PLACES_API_URL, COORDINATES_API_URL} from '../constants';
import VideoPlayer from './VideoPlayer';
import WeatherWidget from './WeatherWidget';
import TimeWidget from './TimeWidget';
import CurrencyWidget from "./CurrencyWidget";

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

interface Titles {
  time: {
    [lang: string]: string
  }
  weather: {
    [lang: string]: string
  }
  photo: {
    [lang: string]: string
  }
  video: {
    [lang: string]: string
  }
  map: {
    [lang: string]: string
  }
}

interface TimeZone {
  [id: string]: string
}

export default function CountryContent(props: CountryContentProps): JSX.Element {
  const {path, lang, capital, country} = props;

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

  const timeZones: TimeZone = {
    'Belarus': 'Europe/Minsk',
    'Brazil': 'America/Sao_Paulo',
    'England': 'Europe/London',
    'Japan': 'Asia/Tokyo',
    'Netherlands': 'Europe/Minsk',
    'Peru': 'Europe/Minsk',
    'Poland': 'Europe/Warsaw',
    'Russia': 'Europe/Moscow',
    'USA': 'America/New_York',
  }

  const titles: Titles = {
    time: {
      'ru': 'Текущее время в стране',
      'en': 'Current time in the country',
      'de': 'Aktuelle Zeit im Land',
    },
    weather: {
      'ru': 'Погода в стране',
      'en': 'Country weather',
      'de': 'Landwetter',
    },
    photo: {
      'ru': 'Фотогалерея',
      'en': 'Photo gallery',
      'de': 'Fotogallerie',
    },
    video: {
      'ru': 'Видео о стране',
      'en': 'Country video',
      'de': 'Ländervideo',
    },
    map: {
      'ru': 'Карта',
      'en': 'Map',
      'de': 'Karte',
    }
  }

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
      <ContentTitle title={titles.time[lang]}/>
      <TimeWidget lang={lang} timeZone={timeZones[path]}/>
      <ContentTitle title={titles.weather[lang]}/>
      <WeatherWidget capital={capital} lang={lang} timeZone={timeZones[path]}/>
      <ContentTitle title='Курс валют по отношению к BYN'/>
      <CurrencyWidget currency='BYN'/>
      {
        isPlacesLoaded ?
          <>
            <ContentTitle title={titles.photo[lang]}/>
            <ImageSlider slides={placesData}/>
            <ContentTitle title={titles.video[lang]}/>
            <VideoPlayer url={videoLink}/>
          </>
          :
          <></>
      }
      {
        isMapLoaded ?
          <>
            <ContentTitle title={titles.map[lang]}/>
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
