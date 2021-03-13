import React from 'react';
import CountryCard from './CountryCard';
import data from '../../data/data';
interface Language {
  lang: string
}

// eslint-disable-next-line react/display-name
const CountriesContainer = React.forwardRef((props:Language, ref:React.Ref<HTMLElement>):JSX.Element => {
  const { lang } = props;
  return (
    <section ref={ref} className="countries-container">
      {
        data.map((elem, id):JSX.Element => (
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
