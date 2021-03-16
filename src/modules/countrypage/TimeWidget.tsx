import React, {useEffect, useState} from 'react';

interface TimeProps {
  lang: string,
  timeZone: string,
}

export default function TimeWidget(props: TimeProps): JSX.Element {

  const {lang, timeZone} = props;

  const [dateTime, setDateTime] = useState(Date.now());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [lang]);

  function tick() {
    setDateTime(Date.now());
  }

  return (
    <div className='time-wrapper'>
      <span className='time'>{new Date(dateTime).toLocaleTimeString(lang, {timeZone: `${timeZone}`})}</span>
      <span className='date'>{new Date(dateTime).toLocaleDateString(lang, {
        timeZone: `${timeZone}`,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      })}</span>
    </div>
  );
}
