import React, {useEffect, useState} from 'react';
import Euro from '../../assets/images/euro.png';
import Dollar from '../../assets/images/dollar.png';
import Ruble from '../../assets/images/ruble.png';
import {CircularProgress} from "@material-ui/core";

interface CurrencyProps {
  currency: string,
  lang: string
}

interface CurrencyType {
  usb: number,
  euro: number
  ruble: number,
}

interface Titles {
  euro: {
    [lang: string]: string
  }
  usd: {
    [lang: string]: string
  }
  rub: {
    [lang: string]: string
  }
}

export default function CurrencyWidget(props: CurrencyProps): JSX.Element {

  const [isLoaded, setIsLoaded] = useState(false);
  const [currencyConverted, setCurrencyConverted] = useState<CurrencyType>();
  const {currency, lang} = props;
  const titles: Titles = {
    euro: {
      'ru': '1 Евро',
      'en': '1 Euro',
      'de': '1 Euro',
    },
    usd: {
      'ru': '1 Доллар',
      'en': '1 Dollar',
      'de': '1 Dollar',
    },
    rub: {
      'ru': '1 Российский рубль',
      'en': '1 Russian ruble',
      'de': '1 Russischer Rubel',
    }
  }

  useEffect(() => {
    fetch(`https://free.currconv.com/api/v7/convert?q=USD_${currency},EUR_${currency}&apiKey=3cc85b7273ede806a604`)
      .then(res => res.json())
      .then((dataFirst) => {
          fetch(`https://free.currconv.com/api/v7/convert?q=RUB_${currency}&apiKey=3cc85b7273ede806a604`)
            .then(res => res.json())
            .then((dataSecond) => {
                setCurrencyConverted(
                  {
                    usb: +(dataFirst.results["USD_" + currency].val).toFixed(2),
                    euro: +(dataFirst.results["EUR_" + currency].val).toFixed(2),
                    ruble: +(dataSecond.results["RUB_" + currency].val).toFixed(2),
                  }
                );
                setIsLoaded(true);
              },
              (error) => {
                console.log(error);
              });
        },
        (error) => {
          console.log(error);
        });
  }, [currency]);

  return (
    <div className='currency-box'>
      {
        isLoaded ?
          <>
            <div className='currency-captions'>
              <div className='currency-item'>
                <img className='currency-icon' src={Euro} alt='euro'/>
                <span className='currency-point'>{titles.euro[lang]}</span>
              </div>
              <div className='currency-item'>
                <img className='currency-icon' src={Dollar} alt='dollar'/>
                <span className='currency-point'>{titles.usd[lang]}</span>
              </div>
              <div className='currency-item'>
                <img className='currency-icon' src={Ruble} alt='ruble'/>
                <span className='currency-point'>{titles.rub[lang]}</span>
              </div>
            </div>
            <div className='currency-numbers'>
              <div className='currency-item'>
                <span className='currency-point'>{`${currencyConverted?.usb} ${currency}`}</span>
              </div>
              <div className='currency-item'>
                <span className='currency-point'>{`${currencyConverted?.euro} ${currency}`}</span>
              </div>
              <div className='currency-item'>
                <span className='currency-point'>{`${currencyConverted?.ruble} ${currency}`}</span>
              </div>
            </div>
          </> : <CircularProgress/>
      }
    </div>
  );
}
