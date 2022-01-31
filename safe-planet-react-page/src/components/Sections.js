import React from 'react';
import SectionItem from './SectionItem';
import './Sections.css';
import pictureEco from '../asstets/img/eco.png';
import pictureThreats from '../asstets/img/threats.jpg';
import picturePeople from '../asstets/img/people.jpg';

function Sections() {
  return (
    <div className='section'>
      <h1>Find the way</h1>
      <div className='section__container'>
        <SectionItem
          src={pictureEco}
          text='Learn about eco solutions'
          label='How'
          path='/solutions'
        />
        <SectionItem
          src={pictureThreats}
          text='Known the threats'
          label='What'
          path='/threats'
        />
        <SectionItem
          src={picturePeople}
          text='Find the good people'
          label='Who'
          path='/activists'
        />
      </div>
    </div>
  );
}

export default Sections;
