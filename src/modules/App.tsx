import React, {useState, useEffect} from 'react';
import Header from './header/Header';
import CountriesContainer from './mainpage/CountriesContainer';
import Footer from './footer/Footer';
import CountryPage from "./countrypage/CountryPage";
import { CircularProgress } from "@material-ui/core";
import { DEFAULT_LANGUAGE, COUNTRIES_API_URL } from './constants';
import Country from './interfaces';
import Login from './login/Login';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = ():JSX.Element  => {
  const getDataFromSessionStorage = (name: string, defaultValue: unknown) => {
    const tempData = sessionStorage.getItem(name) || null;
    return tempData ? JSON.parse(tempData) : defaultValue;
  }

  const [lang, setLang] = useState(getDataFromSessionStorage('language', DEFAULT_LANGUAGE));
  const [search, setSearch] = useState('');
  const CountriesContainerRef: React.Ref<HTMLElement> = React.createRef();
  const [countriesData, setCountriesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [token, setToken] = useState(getDataFromSessionStorage('login', false));
  const [skipAuth, setSkipAuth] = useState(getDataFromSessionStorage('skip', false));

  // Fetch countries data
  useEffect(() => {
      fetch(COUNTRIES_API_URL)
      .then(res => res.json())
      .then((data) => {
        setCountriesData(data);
        setIsLoaded(true);
      })
      .catch((e) => console.log(e.message));
  }, []);

  // Filter country cards by search input
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

  }, [search, CountriesContainerRef]);
  if(!(token && token.token) && !skipAuth) {
    return <Login setToken={setToken} setSkipAuth={setSkipAuth} />
  }

  return (
    <Router>
      <Header
        lang={lang}
        setLang={setLang}
        search={search}
        setSearch={setSearch}
        setToken={setToken}
        token={token}
        setSkipAuth={setSkipAuth}
      />
      <main className="main">
        { isLoaded ?
          <Switch>
            <Route exact path="/">
              <CountriesContainer
                lang={lang}
                ref={CountriesContainerRef}
                data={countriesData}
              />
            </Route>
            {
              countriesData.map((elem: Country, id) => (
                <Route key={id} path={`/${elem.path}`}>
                  <CountryPage country={elem} lang={lang} />
                </Route>
              ))
            }
          </Switch> :
          <div className="countries-container countries-container--onload">
            <CircularProgress />
          </div>
        }
      </main>
      <Footer/>
    </Router>
  )
}

export default App;
