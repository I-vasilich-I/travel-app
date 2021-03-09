import React, { useState } from 'react';
import Header from './Header';
import CountriesContainer from './CountriesContainer';
import Footer from './Footer';
import CountryPage from "./CountryPage";

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
