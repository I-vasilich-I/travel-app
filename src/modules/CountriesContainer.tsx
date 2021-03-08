import React from 'react';
import CountryCard from './CountryCard'

const CountriesContainer= ():JSX.Element => {
  return (
    <section className="countries-container">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  )
}

export default CountriesContainer;
