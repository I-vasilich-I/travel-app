import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

interface CountryData {
  country: {
    avatar: string,
    name: {
      ru: string,
      en: string,
      by: string,
    },
    capital: {
      ru: string,
      en: string,
      by: string,
    },
    population: number,
    area: number,
    region: {
      ru: string,
      en: string,
      by: string,
    },
    currency: string,
    flag: string,
    languages: string[],
  }

}

const lang = 'ru';
export default function MediaCard(props: CountryData):JSX.Element {
  const classes = useStyles();
  const { country } = props;
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
      {/* <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

