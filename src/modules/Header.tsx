import React from 'react';
import SearchInput from './SearchInput';
import LangSelect from './LangSelect';

const Header: React.FC = () => {
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
        <LangSelect />
      </div>
    </header>
  )
}

export default Header;
