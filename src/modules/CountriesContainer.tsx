import React from 'react';
import CountryCard from './CountryCard';
import data from '../data/data';

const CountriesContainer= ():JSX.Element => {
  return (
    <section className="countries-container">
      {
        data.map((elem, id):JSX.Element => (
          <CountryCard
            key={id}
            country={elem}/>
        ))
      }
    </section>
  )
}

export default CountriesContainer;
