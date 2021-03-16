import React from 'react';

import Euro from '../../assets/images/euro.png';
import Dollar from '../../assets/images/dollar.png';
import Ruble from '../../assets/images/ruble.png';

function CurrencyWidget(): JSX.Element {
  return (
    <div className='currency-box'>
      <div className='currency-captions'>
        <div className='currency-item'>
          <img className='currency-icon' src={Euro} alt='euro'/>
          <span className='currency-point'>1 Евро</span>
        </div>
        <div className='currency-item'>
          <img className='currency-icon' src={Dollar} alt='dollar'/>
          <span className='currency-point'>1 Доллар</span>
        </div>
        <div className='currency-item'>
          <img className='currency-icon' src={Ruble} alt='ruble'/>
          <span className='currency-point'>1 Российский рубль</span>
        </div>
      </div>
      <div className='currency-numbers'>
        <div className='currency-item'>
          <span className='currency-point'>1.2</span>
        </div>
        <div className='currency-item'>
          <span className='currency-point'>1.2</span>
        </div>
        <div className='currency-item'>
          <span className='currency-point'>1.2</span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyWidget;
