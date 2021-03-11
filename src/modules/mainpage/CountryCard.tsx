import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: 10,
  },
  media: {
    height: 240,
  },
});

interface CountryData {
  country: {
    avatar: string,
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
  },
  lang: string
}

export default function MediaCard(props: CountryData):JSX.Element {
  const classes = useStyles();
  const { country, lang } = props;
  const { name, capital, avatar } = country;


  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={avatar}
          title={name[lang]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name[lang]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {capital[lang]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

