import React from 'react';
import Player from 'react-player';

export default function VideoPlayer(props: { url: string }): JSX.Element {
  const config = {
    url: props.url,
    className: 'video-player',
    controls: true,
    width: '100%',
    height: '100%',
  }

  return (
    <div className='video-section'>
      <div className='player-wrapper'>
        <Player {...config}/>
      </div>
    </div>
  );
}
