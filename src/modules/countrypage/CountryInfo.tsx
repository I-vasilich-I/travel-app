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
  languages: string[],
  lang: string
}

interface Titles {
  capital: {
    [lang: string]: string
  },
  area: {
    [lang: string]: string
  },
  population: {
    [lang: string]: string
  },
  region: {
    [lang: string]: string
  },
  flag: {
    [lang: string]: string
  },
  currency: {
    [lang: string]: string
  },
  lang: {
    [lang: string]: string
  },
}

function CountryInfo(props: CountryInfoProps): JSX.Element {
  const {avatar, name, capital, population, area, region, currency, flag, languages, lang} = props;
  const titles: Titles = {
    capital: {
      'ru': 'Столица',
      'en': 'Capital',
      'de': 'Hauptstadt'
    },
    area: {
      'ru': 'Территория',
      'en': 'Area',
      'de': 'Bereich'
    },
    population: {
      'ru': 'Население',
      'en': 'Population',
      'de': 'Population'
    },
    region: {
      'ru': 'Расположение',
      'en': 'Region',
      'de': 'Region'
    },
    flag: {
      'ru': 'Государственный флаг',
      'en': 'State flag',
      'de': 'Staatsflagge'
    },
    currency: {
      'ru': 'Валюта',
      'en': 'Currency',
      'de': 'Währung'
    },
    lang: {
      'ru': 'Государственный язык',
      'en': 'Official language',
      'de': 'Staatssprache'
    },
  }
  return (
    <div className='country-info'>
      <div className="country-info__name">{name}</div>
      <img className='country-info__avatar' src={avatar} alt={`avatar-${name}`}/>
      <div className="country-info__summary">
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.capital[lang]}</span>
          <span className='country-info__summary__text'>{capital}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.area[lang]}</span>
          <span className='country-info__summary__text'>{area}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.population[lang]}</span>
          <span className='country-info__summary__text'>{population}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.region[lang]}</span>
          <span className='country-info__summary__text'>{region}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.flag[lang]}</span>
          <img className='country-info__summary__flag' src={flag} alt="flag"/>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.currency[lang]}</span>
          <span className='country-info__summary__currency'>{currency}</span>
        </div>
        <div className="country-info__summary__item">
          <span className='country-info__summary__label'>{titles.lang[lang]}</span>
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
