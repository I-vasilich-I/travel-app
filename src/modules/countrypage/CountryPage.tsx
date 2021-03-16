import React from 'react';
import CountryInfo from "./CountryInfo";

// import Belarus from '../../assets/images/belarus.jpg';
// import FlagBel from '../../assets/images/flag.png'
import CountryContent from "./CountryContent";
import Country from '../interfaces';

interface CountryData {
  country: Country;
  lang: string;
}

interface Mesure {
  areaM: {
    [lang: string]: string
  }
  populationM: {
    [lang: string]: string
  }
}

function CountryPage(props: CountryData): JSX.Element {
  const { avatar, name, capital, population, area, region, currency, flag, languages } = props.country;
  const { lang } = props;
  const localLang = `${lang}-${lang.toUpperCase()}`;
  const mesureLang: Mesure = {
    areaM: {
      'ru': 'км².',
      'en': 'км².',
      'de': 'км².'
    },
    populationM: {
      'ru': 'чел.',
      'en': 'ppl.',
      'de': 'mnsch.'
    },


  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const langObj: any = languages[0];
  return (
    <div className='country-container'>
      <CountryInfo
        avatar={avatar}
        name={name[lang]}
        capital={capital[lang]}
        area={`${area.toLocaleString(localLang)} ${mesureLang.areaM[lang]}`}
        population={`${population.toLocaleString(localLang)} ${mesureLang.populationM[lang]}`}
        region={region[lang]}
        currency={currency}
        flag={flag}
        languages={langObj[lang]}
        lang={lang}/>
      <CountryContent/>
    </div>
  );
}

export default CountryPage;
