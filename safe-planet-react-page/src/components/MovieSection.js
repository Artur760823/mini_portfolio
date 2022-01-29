import React from 'react';
import Button from './Button';
import '../App.css';
import './MovieSection.css';
import video from '../asstets/video/planet.mp4';

function MovieSection() {
  return (
    <div className='movie-container'>
      <video autoPlay='autoplay' loop='loop' muted>
        <source src={video} type='video/mp4' />
      </video>
      <h1>Your world needs you</h1>
      <p>Stop being passive!</p>
      <div className='movie-btn'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
          Take first step
        </Button>

      </div>
    </div>
  )
}

export default MovieSection;
