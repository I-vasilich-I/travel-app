import React from 'react'
import LoginForm from './LoginForm';

interface Language {
  lang: string,
}

interface Title {
  [lang: string]: string;
}

const Login = ({ lang }: Language):JSX.Element => {

  const title:Title = {
    'ru': 'Авторизация',
    'en': 'Log in',
    'de': 'Einloggen'
  }

  return (
    <section className="login-container">
      <h1>{title[lang]}</h1>
      <LoginForm />
    </section>
  )
}

export default Login;
