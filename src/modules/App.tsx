import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import CountriesContainer from './mainpage/CountriesContainer';
import Footer from './footer/Footer';
// import CountryPage from "./countrypage/CountryPage";

const App = ():JSX.Element  => {
  const [lang, setLang] = useState('ru');
  const [search, setSearch] = useState('');
  const CountriesContainerRef:React.Ref<HTMLElement> = React.createRef();

  // filter country cards by search input
  useEffect(() => {
    const childrenArray = CountriesContainerRef.current?.children;
    if (childrenArray) {
      const countriesArray = Array.from(childrenArray);
      countriesArray.map((elem) => elem.classList.remove('hidden'));
      countriesArray.filter((elem) => {
        const countryArray = Array.from(elem.children)[0];
        const countryTitleArray = Array.from(countryArray.children);
        const NameAndCapital = Array.from(countryTitleArray[1].children);
        const countryName = NameAndCapital[0].innerHTML.toLowerCase();
        const countryCapital = NameAndCapital[1].innerHTML.toLowerCase();
        const isContain = countryName.includes(search.toLowerCase()) || countryCapital.includes(search.toLowerCase());
        return !isContain;
      })
      .map((elem) => elem.classList.add('hidden'));
    }

  }, [search, CountriesContainerRef ]);

  return (
    <><Header
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
      />
      <main className="main">
        <CountriesContainer
        lang={lang}
        ref={CountriesContainerRef}/>
        {/* <CountryPage /> */}
      </main>
      <Footer />
    </>
  )
}

export default App;
