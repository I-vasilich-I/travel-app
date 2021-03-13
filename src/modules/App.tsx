import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import CountriesContainer from './mainpage/CountriesContainer';
import Footer from './footer/Footer';
import CountryPage from "./countrypage/CountryPage";
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

const App = ():JSX.Element  => {
  const getLanguage = () => {
    const localStorageLang = localStorage.getItem('language') || null;
    return localStorageLang ? JSON.parse(localStorageLang) : 'ru';
  }
  const [lang, setLang] = useState(getLanguage());
  const [search, setSearch] = useState('');
  const CountriesContainerRef:React.Ref<HTMLElement> = React.createRef();

  // filter country cards by search input
  useEffect(() => {
    const childrenArray = CountriesContainerRef.current?.children;
    if (childrenArray) {
      const countriesArray = Array.from(childrenArray);
      countriesArray.map((elem) => elem.classList.remove('hidden'));
      countriesArray.filter((elem) => {
        const links = Array.from(elem.children)[0];
        const countryArray = Array.from(links.children)[0];
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
    <Router>
      <Header
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
      />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <CountriesContainer
              lang={lang}
              ref={CountriesContainerRef}
            />
          </Route>
          <Route path="/country">
            <CountryPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
