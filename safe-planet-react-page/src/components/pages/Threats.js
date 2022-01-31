import React from 'react';
import './page.css';
import polution from '../../asstets/img/polution.jpg';
import garbage from '../../asstets/img/garbage.jpg';
import co2 from '../../asstets/img/co2.jpg';
import netbird from '../../asstets/img/netbird.jpg';

function Threats() {
  return (
    <div className='content'>
      <h1 class="content__intro">Main Threats to our world</h1>
      <article class="content__article">
        <img src={polution} alt="" class="content__image" />
        <h1 class="content__title">Polution</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={garbage} alt="" class="content__image" />
        <h1 class="content__title">Garbage</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={co2} alt="" class="content__image" />
        <h1 class="content__title">High level of Co2</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={netbird} alt="" class="content__image" />
        <h1 class="content__title">Threat to the animals</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
    </div>
  );
}

export default Threats;
