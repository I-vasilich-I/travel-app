import React from 'react';
import CountryCard from './CountryCard';
import data from '../data/data';

interface Language {
  lang: string
}

const CountriesContainer = (props: Language):JSX.Element => {
  const { lang } = props;
  return (
    <section className="countries-container">
      {
        data.map((elem, id):JSX.Element => (
          <CountryCard
            key={id}
            country={elem}
            lang={lang}
          />
        ))
      }
    </section>
  )
}

export default CountriesContainer;
