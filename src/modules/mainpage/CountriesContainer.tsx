import React from 'react';
import CountryCard from './CountryCard';
import Country from '../interfaces';

interface Language {
  lang: string,
  data: Country[]
}

// eslint-disable-next-line react/display-name
const CountriesContainer = React.forwardRef((props:Language, ref:React.Ref<HTMLElement>):JSX.Element => {
  const { lang, data } = props;

  return (
    <section ref={ref} className="countries-container">
      {
        data.map((elem: Country, id):JSX.Element => (
          <CountryCard
            key={id}
            country={elem}
            lang={lang}
          />
        ))
      }
    </section>
  )
})

export default CountriesContainer;
