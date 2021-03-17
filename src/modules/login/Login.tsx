import React from 'react'
import LoginForm from './LoginForm';

interface LoginProps {
  lang?: string,
  setToken: React.Dispatch<React.SetStateAction<{user: string, token: boolean}>>
  setSkipAuth: React.Dispatch<React.SetStateAction<boolean>>
}

// interface Title {
//   [lang: string]: string;
// }

const Login = ({ setToken, setSkipAuth }: LoginProps):JSX.Element => {

  // const title:Title = {
  //   'ru': 'Авторизация',
  //   'en': 'Log in',
  //   'de': 'Einloggen'
  // }

  return (
    <section className="login-container">
      <h1>Log in</h1>
      <LoginForm setToken={setToken} setSkipAuth={setSkipAuth}/>
    </section>
  )
}

export default Login;
