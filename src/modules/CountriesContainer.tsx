import React from 'react';
import CountryCard from './CountryCard'

const CountriesContainer: React.FC = () => {
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
