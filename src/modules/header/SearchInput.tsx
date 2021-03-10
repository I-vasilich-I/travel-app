import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
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
  setSearch: React.Dispatch<React.SetStateAction<string>>
}


export default function CustomizedInputBase(props: Search):JSX.Element {
  const classes = useStyles();
  const { search, setSearch } = props;



  return (
      <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search country or capital"
        inputProps={{ 'aria-label': 'Search country or capital' }}
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
