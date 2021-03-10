import React from 'react';

interface CountryInfoProps {
  avatar: string,
  name: string,
  capital: string,
  population: string,
  area: string,
  region: string,
  currency: string,
  flag: string,
  languages: Array<string>
}

function CountryInfo(props: CountryInfoProps): JSX.Element {
  const {avatar, name, capital, population, area, region, currency, flag, languages} = props;

  return (
    <div className='country-info'>
      <div className="country-info__name">{name}</div>
      <img className='country-info__avatar' src={avatar} alt={`avatar-${name}`}/>
      <div className="country-info__summary">
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Столица</span>
          <span className='country-info__summary__text'>{capital}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Территория</span>
          <span className='country-info__summary__text'>{area}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Население</span>
          <span className='country-info__summary__text'>{population}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Расположение</span>
          <span className='country-info__summary__text'>{region}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Государственный флаг</span>
          <img className='country-info__summary__flag' src={flag} alt="flag"/>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Валюта</span>
          <span className='country-info__summary__text'>{currency}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>Государственный язык</span>
          {
            languages.map((lang, index) => {
              return <span key={index} className='country-info__summary__text'>{lang}</span>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
