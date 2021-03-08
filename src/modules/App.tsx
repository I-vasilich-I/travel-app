import React from 'react';
import Header from './Header';
import CountriesContainer from './CountriesContainer';
import Footer from './Footer';
import CountryPage from "./CountryPage";

const App = ():JSX.Element  => {
  return (
    <><Header />
      <CountriesContainer />
      <CountryPage />
      <Footer /></>
  )
}

export default App;
