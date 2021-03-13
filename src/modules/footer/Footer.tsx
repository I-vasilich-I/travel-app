import React from 'react';

const Footer = ():JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
            href="https://github.com/I-vasilich-I"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github__logo"
              src="assets/images/GitHub-Mark.png"
              alt="Oleg Vaskevich"
            />
        </a>
        <a
            href="https://github.com/Lex-tp"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github__logo"
              src="assets/images/GitHub-Mark.png"
              alt="Denis Korotkevich"
            />
        </a>
        {/* <a
            href="https://github.com/vi-voe"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github__logo"
              src="assets/images/GitHub-Mark.png"
              alt="Victoria Voevodkina"
            />
        </a>
        <a
            href="https://github.com/stengof"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="github__logo"
              src="assets/images/GitHub-Mark.png"
              alt="Mikita Petravets"
            />
        </a> */}
      </div>
      <p className="footer__year">© 2021</p>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <img className="rss__logo" src="assets/images/rs_school_js.svg" alt="The Rolling Scopes" />
      </a>
    </footer>
  )
}

export default Footer;
