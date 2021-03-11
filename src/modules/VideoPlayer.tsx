import React from 'react';
import Player from 'react-player';

export default function VideoPlayer(): JSX.Element {
  const config = {
    url: 'https://youtu.be/hHy_uUnvkho',
    className: 'video-player',
    controls: true,
    width: '100%',
    height: '100%',
  }

  return (
    <div className='player-wrapper'>
      <Player {...config}/>
    </div>
  );
}
