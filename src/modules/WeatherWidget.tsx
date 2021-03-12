import React, {useEffect, useState} from 'react';

import WindSpeed from '@material-ui/icons/Toys';
import Humidity from '@material-ui/icons/Opacity';
import Sunrise from '@material-ui/icons/Brightness5';
import Sunset from '@material-ui/icons/NightsStay';

interface WeatherWidgetProps {
  country: string
}

export default function WeatherWidget(props: WeatherWidgetProps): JSX.Element {

  const [useMetrics, setUseMetrics] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [iconWeather, setIconWeather] = useState('');
  const [timesOfDay, setTimesOfDay] = useState('');
  const [stateWeather, setStateWeather] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [sunrise, setSunrise] = useState<Date>(new Date());
  const [sunset, setSunset] = useState<Date>(new Date());


  const {country} = props;

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=19ba1578547b510127691c2268a5299b`)
      .then(res => res.json())
      .then((data) => {
        setTemperature(Math.round(data.main.temp));
        setIconWeather(data.weather[0].id);
        setTimesOfDay(data.weather[0].icon.slice(-1));
        setStateWeather(data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1));
        setWindSpeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setSunrise(new Date(data.sys.sunrise*1000));
        setSunset(new Date(data.sys.sunset*1000));
      });
  });

  return (
    <div className='weather-wrapper'>
      <div className="weather-info">
        <i className={`owf owf-${iconWeather}-${timesOfDay} weather-info__icon`}/>
        <div className="weather-info__degree">
          <span className='degree'>{temperature}</span>
          <span className='units'>{useMetrics ? '℃' : '℉'}</span>
        </div>
        <div className="weather-info__description">
          <span className="country">{country}</span>
          <span className="state">{stateWeather}</span>
        </div>
      </div>
      <div className="weather-indicators">
        <div className="weather-indicators__item">
          <span className="caption-indicator">Wind</span>
          <div className="indicator-wrapper">
            <WindSpeed/>
            <span className="indicator">{`${windSpeed} m/s`}</span>
          </div>
        </div>
        <div className="weather-indicators__item">
          <span className="caption-indicator">Humidity</span>
          <div className="indicator-wrapper">
            <Humidity/>
            <span className="indicator">{`${humidity} %`}</span>
          </div>
        </div>
        <div className="weather-indicators__item">
          <span className="caption-indicator">Sunrise</span>
          <div className="indicator-wrapper">
            <Sunrise/>
            <span className="indicator">{sunrise.toLocaleTimeString('ru-Ru', {hour: "numeric", minute: "numeric"})}</span>
          </div>
        </div>
        <div className="weather-indicators__item">
          <span className="caption-indicator">Sunset</span>
          <div className="indicator-wrapper">
            <Sunset/>
            <span className="indicator">{sunset.toLocaleTimeString('ru-Ru', {hour: "numeric", minute: "numeric"})}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
