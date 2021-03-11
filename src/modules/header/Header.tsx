import React from 'react';
import SearchInput from './SearchInput';
import LangSelect from './LangSelect';

interface HeaderProps{
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header = (props: HeaderProps):JSX.Element => {
  const { lang, setLang, search, setSearch } = props;
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            className="header__logo"
            src="assets/images/logo.svg"
            alt="Oleg Vaskevich"
          />
        </a>
      </div>
      <div className="header__search">
        <SearchInput
          search={search}
          setSearch={setSearch}
        />
      </div>
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
