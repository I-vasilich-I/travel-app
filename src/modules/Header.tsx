import React from 'react';
import SearchInput from './SearchInput';
import LangSelect from './LangSelect';

interface Language{
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
}

const Header = (props: Language):JSX.Element => {
  const { lang, setLang } = props;
  return (
    <header className="header">
      <div className="header__logo">
      <img
        className="header__logo"
        src="assets/images/logo.svg"
        alt="Oleg Vaskevich"
      />
      </div>
      <div className="header__search">
        <SearchInput />
      </div>
      <div className="header__language">
        <LangSelect lang={lang} setLang={setLang} />
      </div>
    </header>
  )
}

export default Header;
