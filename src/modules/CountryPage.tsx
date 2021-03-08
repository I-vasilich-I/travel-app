import React from 'react';
import CountryInfo from "./CountryInfo";

import Belarus from '../assets/images/belarus.jpg';
import FlagBel from '../assets/images/flag.png';

function CountryPage():JSX.Element {

  return (
    <div className='country-container'>
      <CountryInfo
        avatar={Belarus}
        name='Беларусь'
        capital='Минск'
        area={`${parseInt('207600').toLocaleString('ru-RU')} км².`}
        population={`${parseInt('9408400').toLocaleString('ru-RU')} чел.`}
        region='Восточная Европа'
        currency='BYN'
        flag={FlagBel}
        languages={['Русский','Белорусский']}/>
    </div>
  );
}

export default CountryPage;
