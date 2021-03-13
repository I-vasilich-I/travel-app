import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {
  COLOR_MUI_PAPER_BACKGROUND,
  LANGUAGE_1,
  LANGUAGE_2,
  SEARCH_PLACE_HOLDER_LANG_1,
  SEARCH_PLACE_HOLDER_LANG_2,
  SEARCH_PLACE_HOLDER_LANG_3,
} from '../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 400,
      minWidth: 280,
      backgroundColor: COLOR_MUI_PAPER_BACKGROUND,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

interface Search{
  search: string,
  lang: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}


export default function CustomizedInputBase(props: Search):JSX.Element {
  const classes = useStyles();
  const { lang, search, setSearch } = props;

  const placeHolder = () => {
    if (lang === LANGUAGE_1) return SEARCH_PLACE_HOLDER_LANG_1;
    if (lang === LANGUAGE_2) return SEARCH_PLACE_HOLDER_LANG_2;
    return SEARCH_PLACE_HOLDER_LANG_3;
  }

  return (
      <Paper component="form" className={classes.root}  onSubmit={(e) => {e.preventDefault()}}>
      <InputBase
        className={classes.input}
        placeholder={placeHolder()}
        inputProps={{ 'aria-label': placeHolder() }}
        autoFocus={true}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
