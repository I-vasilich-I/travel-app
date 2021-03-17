import React from 'react';
import SearchInput from './SearchInput';
import LangSelect from './LangSelect';
import { Link, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface HeaderProps{
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setToken: React.Dispatch<React.SetStateAction<{user: string, token: boolean}>>
  token: {
    user: string,
    token: boolean
  }
  setSkipAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = (props: HeaderProps):JSX.Element => {
  const { lang, setLang, search, setSearch, setToken, token, setSkipAuth } = props;
  const location = useLocation();

  const handleLogOut = () => {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('skip');
    setToken({user: '', token: false});
    setSkipAuth(false);
  }

  const logOutBtn: JSX.Element = (
    <Button variant="contained" color="primary" onClick={handleLogOut}>
      Log out
    </Button>
  )

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="assets/images/logo.svg"
          alt="Oleg Vaskevich"
        />
      </Link>
      {
        location.pathname === '/' &&
        <div className="header__search">
          <SearchInput
            lang={lang}
            search={search}
            setSearch={setSearch}
          />
        </div>
      }
      <div className="header__right">
        <div className="header__language">
          <LangSelect
            lang={lang}
            setLang={setLang}
          />
        </div>
        {token && token.token ? logOutBtn: <></>}
      </div>
    </header>
  )
}

export default Header;
