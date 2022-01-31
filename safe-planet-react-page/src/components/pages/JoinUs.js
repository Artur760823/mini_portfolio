import React from 'react';
import Register from '../Register';
import '../../App.css';
import videoOut from '../../asstets/video/forest.mp4';

function JoinUs() {
  return (
    <>
      <div className='movie-container'>
        <video autoPlay='autoplay' loop='loop' muted>
          <source src={videoOut} type='video/mp4' />
        </video>
        <Register />
      </div>
    </>

  )
}

export default JoinUs;