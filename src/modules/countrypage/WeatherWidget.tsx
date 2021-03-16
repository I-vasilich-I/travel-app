import React, {useEffect, useState} from 'react';

import WindSpeed from '@material-ui/icons/Toys';
import Humidity from '@material-ui/icons/Opacity';
import Sunrise from '@material-ui/icons/Brightness5';
import Sunset from '@material-ui/icons/NightsStay';
import {CircularProgress, Switch} from "@material-ui/core";

interface WeatherWidgetProps {
  capital: string,
  lang: string,
  timeZone: string
}

interface WeatherType {
  temp: number,
  icon: string,
  timeOfDay: string
  stateWeather: string,
  wind: string,
  humidity: string,
  sunrise: number,
  sunset: number,
}

interface Titles {
  wind: {
    [lang: string]: string
  }
  humidity: {
    [lang: string]: string
  }
  sunrise: {
    [lang: string]: string
  }
  sunset: {
    [lang: string]: string
  }
  speed: {
    [lang: string]: string
  }
}

export default function WeatherWidget(props: WeatherWidgetProps): JSX.Element {

  const [isLoaded, setIsLoaded] = useState(false);
  const [useMetrics, setUseMetrics] = useState(true);

  const [weather, setWeather] = useState<WeatherType>({
    temp: 0,
    icon: '',
    timeOfDay: '',
    stateWeather: '',
    wind: '',
    humidity: '',
    sunrise: 0,
    sunset: 0,
  });

  const {capital, lang, timeZone} = props;

  const titles: Titles = {
    wind: {
      'ru': 'Ветер',
      'en': 'Wind',
      'de': 'Wind',
    },
    humidity: {
      'ru': 'Влажность',
      'en': 'Humidity',
      'de': 'Feuchtigkeit',
    },
    sunrise: {
      'ru': 'Рассвет',
      'en': 'Sunrise',
      'de': 'Dämmerung',
    },
    sunset: {
      'ru': 'Закат',
      'en': 'Sunset',
      'de': 'Sonnenuntergang',
    },
    speed: {
      'ru': 'м/с',
      'en': 'm/s',
      'de': 'm/s',
    }
  }

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=bfe77b66bdbd401c7b6a4210e7a8f5b2&lang=${lang}`)
      .then(res => res.json())
      .then((data) => {
          setWeather({
            temp: Math.round(data.main.temp),
            icon: data.weather[0].id,
            timeOfDay: data.weather[0].icon.slice(-1),
            stateWeather: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1),
            wind: data.wind.speed,
            humidity: data.main.humidity,
            sunrise: data.sys.sunrise * 1000,
            sunset: data.sys.sunset * 1000,
          });
          setIsLoaded(true);
        },
        (error) => {
          console.log(error);
        });
  }, [capital, lang, timeZone]);

  function onChangeMetric() {
    setUseMetrics(!useMetrics);
  }

  return (
    <div className='weather-wrapper'>
      {
        isLoaded ?
          <div className='weather-box'>
            <Switch onChange={() => {
              onChangeMetric()
            }}/>
            <div className="weather-info">
              <i className={`owf owf-${weather.icon}-${weather.timeOfDay} weather-info__icon`}/>
              <div className="weather-info__degree">
                <span className='degree'>{useMetrics ? weather.temp : Math.round(weather.temp * 1.8 + 32)}</span>
                <span className='units'>{useMetrics ? '℃' : '℉'}</span>
              </div>
              <div className="weather-info__description">
                <span className="country">{capital}</span>
                <span className="state">{weather.stateWeather}</span>
              </div>
            </div>
            <div className="weather-indicators">
              <div className="weather-indicators__item">
                <span className="caption-indicator">{titles.wind[lang]}</span>
                <div className="indicator-wrapper">
                  <WindSpeed/>
                  <span className="indicator">{`${weather.wind} ${titles.speed[lang]}`}</span>
                </div>
              </div>
              <div className="weather-indicators__item">
                <span className="caption-indicator">{titles.humidity[lang]}</span>
                <div className="indicator-wrapper">
                  <Humidity/>
                  <span className="indicator">{`${weather.humidity} %`}</span>
                </div>
              </div>
              <div className="weather-indicators__item">
                <span className="caption-indicator">{titles.sunrise[lang]}</span>
                <div className="indicator-wrapper">
                  <Sunrise/>
                  <span
                    className="indicator">{new Date(weather.sunrise).toLocaleTimeString(lang, {
                    timeZone: `${timeZone}`,
                    hour: "numeric",
                    minute: "numeric"
                  })}</span>
                </div>
              </div>
              <div className="weather-indicators__item">
                <span className="caption-indicator">{titles.sunset[lang]}</span>
                <div className="indicator-wrapper">
                  <Sunset/>
                  <span className="indicator">{new Date(weather.sunset).toLocaleTimeString(lang, {
                    timeZone: `${timeZone}`,
                    hour: "numeric",
                    minute: "numeric"
                  })}</span>
                </div>
              </div>
            </div>
          </div> : <CircularProgress/>
      }
    </div>
  );
}
