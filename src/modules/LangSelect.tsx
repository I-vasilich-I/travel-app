import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 40,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
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
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={'ru'}>ru</MenuItem>
          <MenuItem value={'en'}>en</MenuItem>
          <MenuItem value={'by'}>by</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
