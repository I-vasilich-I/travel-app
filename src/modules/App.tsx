import React, { useState } from 'react';
import Header from './header/Header';
import CountriesContainer from './mainpage/CountriesContainer';
import Footer from './footer/Footer';
import CountryPage from "./countrypage/CountryPage";

const App = ():JSX.Element  => {
  const [lang, setLang] = useState('ru');

  return (
    <><Header lang={lang} setLang={setLang} />
      <CountriesContainer lang={lang}/>
      <CountryPage />
      <Footer /></>
  )
}

export default App;
