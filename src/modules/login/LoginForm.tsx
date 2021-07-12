import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import { LOGIN_API_URL } from '../constants';
import CustomizedSnackbars from './Alert';
import { AlertProps } from '@material-ui/lab/Alert';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 15,
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    input: {
      display: 'none',
    },
  }),
);

interface State {
  user: string;
  password: string;
  showPassword: boolean;
}

interface Props {
  setToken: React.Dispatch<React.SetStateAction<{user: string, token: boolean}>>
  setSkipAuth: React.Dispatch<React.SetStateAction<boolean>>
}

interface alertType {
  severity: AlertProps["severity"];
  message: string;
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

export default function InputAdornments({ setToken, setSkipAuth }: Props):JSX.Element {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    user: '',
    password: '',
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  const alertTypeDefault:alertType = {severity: "success", message:'Logged in'}
  const [alertType, setAlertType] = useState(alertTypeDefault)

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const setUserInSessionStorage = (user: string, token = true) => {
    const saveData = {
      user,
      token,
    }
    sessionStorage.setItem('login', JSON.stringify(saveData));
  }

  const handleLogIn = () => {
    if (!values.user || !values.password) return;
    fetch(`${LOGIN_API_URL}/${values.user}`)
    .then(res => res.json())
    .then((data) => {
      if (!data.length) {
        postData(LOGIN_API_URL, values);
        setToken({user: values.user, token: true});
        setUserInSessionStorage(values.user);
      } else if (data[0].password === values.password) {
        setToken({user: values.user, token: true});
        setUserInSessionStorage(values.user);
      } else {
        setOpen(true);
        setAlertType({severity: 'error', message: 'Wrong password!'});
      }
    })
    .catch((e) => console.log(e.message));
  }

  const handleSkipLogIn = () => {
    setSkipAuth(true);
    sessionStorage.setItem('skip', JSON.stringify(true));
  }

return (
  <>
    <CustomizedSnackbars alertType={alertType} setOpen={setOpen} open={open} />
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">User</InputLabel>
        <OutlinedInput
          id="outlined-user"
          value={values.user}
          onChange={handleChange('user')}
          labelWidth={40}
        />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </div>
    <div className="login__buttons">
      <Button variant="contained" color="primary" onClick={handleLogIn}>
        Log in
      </Button>
      <Button variant="contained" color="primary" onClick={handleSkipLogIn}>
        Skip
      </Button>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  </>
)}
