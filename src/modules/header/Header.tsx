import React from 'react';
import SearchInput from './SearchInput';
import LangSelect from './LangSelect';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps{
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header = (props: HeaderProps):JSX.Element => {
  const { lang, setLang, search, setSearch } = props;
  const location = useLocation();
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

      <div className="header__language">
        <LangSelect
          lang={lang}
          setLang={setLang}
        />
      </div>
    </header>
  )
}

export default Header;
