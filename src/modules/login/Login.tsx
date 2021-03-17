import React from 'react'
import LoginForm from './LoginForm';

interface LoginProps {
  setToken: React.Dispatch<React.SetStateAction<{user: string, token: boolean}>>
  setSkipAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setToken, setSkipAuth }: LoginProps):JSX.Element => {
  return (
    <section className="login-container">
      <h1>Log in</h1>
      <LoginForm setToken={setToken} setSkipAuth={setSkipAuth}/>
    </section>
  )
}

export default Login;
