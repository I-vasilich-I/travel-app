import React from 'react'
import LoginForm from './LoginForm';

interface LoginProps {
  lang?: string,
  setToken: React.Dispatch<React.SetStateAction<undefined>>
}

// interface Title {
//   [lang: string]: string;
// }

const Login = ({ setToken }: LoginProps):JSX.Element => {

  // const title:Title = {
  //   'ru': 'Авторизация',
  //   'en': 'Log in',
  //   'de': 'Einloggen'
  // }

  return (
    <section className="login-container">
      <h1>Log in</h1>
      <LoginForm />
    </section>
  )
}

export default Login;
