import React from 'react';
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
  lang?: string,
  setToken: React.Dispatch<React.SetStateAction<boolean>>
  setSkipAuth: React.Dispatch<React.SetStateAction<boolean>>
}



export default function InputAdornments({ setToken, setSkipAuth }: Props):JSX.Element {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    user: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

  const handleLogIn = () => {
    if (!values.user || !values.password) return;
    fetch(`${LOGIN_API_URL}/${values.user}`)
    .then(res => res.json())
    .then((data) => {
      if (!data.length) {
        console.log('No such user', values.user);
        postData(LOGIN_API_URL, values);
      } else if (data[0].password === values.password) {
        console.log('password correct');
        setToken(true);
      } else {
        console.log('wrong password');
      }
    })
    .catch((e) => console.log(e.message));
  }

  const handleSkipLogIn = () => {
    setSkipAuth(true);
  }

return (
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
      <div>
      <div className="login__buttons">
        <Button variant="contained" color="primary" onClick={handleLogIn}>
          Log in
        </Button>
        <Button variant="contained" color="primary" onClick={handleSkipLogIn}>
          Skip loging
        </Button>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  </div>
)}
