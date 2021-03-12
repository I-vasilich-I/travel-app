import React, {useEffect} from 'react';

interface WeatherWidgetProps {
  country: string
}

export default function WeatherWidget():JSX.Element {

  useEffect(()=>{

  });

  return (
    <div className='widget-wrapper'>
      <div className="temperature-box">
      <div className="degree">19</div>
      </div>
    </div>
  );
}
