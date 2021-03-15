import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { COLOR_MUI_PAPER_BACKGROUND } from '../constants';

const useStyles = makeStyles({
  root: {
    margin: 10,
    backgroundColor: COLOR_MUI_PAPER_BACKGROUND,
  },
  media: {
    height: 240,
  },
});

interface Country {
  avatar: string,
  path: string,
  name: {
    [lang: string]: string,
  },
  capital: {
    [lang: string]: string,
  },
  population: number,
  area: number,
  region: {
    [lang: string]: string,
  },
  currency: string,
  flag: string,
  languages: string[],
}

interface CountryData {
  country: Country,
  lang: string
}

export default function MediaCard(props: CountryData):JSX.Element {
  const classes = useStyles();
  const { country, lang } = props;
  const { name, capital, avatar, path } = country;

  return (
    <Link to={path}>
      <Card className={classes.root}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={avatar}
            title={name[lang]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              {name[lang]}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {capital[lang]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

