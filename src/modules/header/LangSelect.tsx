import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  LANGUAGE_1,
  LANGUAGE_2,
  LANGUAGE_3,
} from '../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 40,
    },
    selectEmpty: {
      // marginTop: theme.spacing(2),
      height: 40,
    },
  }),
);

interface Language{
  lang: string,
  setLang: React.Dispatch<React.SetStateAction<string>>
}

export default function SimpleSelect(props: Language):JSX.Element  {
  const classes = useStyles();
  const { lang, setLang } = props;
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
    localStorage.setItem('language', JSON.stringify(event.target.value));
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={LANGUAGE_1}>{LANGUAGE_1}</MenuItem>
          <MenuItem value={LANGUAGE_2}>{LANGUAGE_2}</MenuItem>
          <MenuItem value={LANGUAGE_3}>{LANGUAGE_3}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
