import React from 'react';
import CountryInfo from "./CountryInfo";

// import Belarus from '../../assets/images/belarus.jpg';
// import FlagBel from '../../assets/images/flag.png'
import CountryContent from "./CountryContent";
import Country from '../interfaces';

interface CountryData {
  country: Country
}

function CountryPage(props: CountryData): JSX.Element {
  const { avatar, name, capital, population, area, region, currency, flag, languages } = props.country;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const langObj: any = languages[0];
  return (
    <div className='country-container'>
      <CountryInfo avatar={avatar} name={name['ru']} capital={capital['ru']}
                   area={`${area.toLocaleString('ru-RU')} км².`}
                   population={`${population.toLocaleString('ru-RU')} чел.`} region={region['ru']}
                   currency={currency} flag={flag} languages={langObj['ru']}/>
      <CountryContent/>
    </div>
  );
}

export default CountryPage;
