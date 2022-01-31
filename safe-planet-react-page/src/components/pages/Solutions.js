import React from 'react';
import './page.css';
import photovoltaic from '../../asstets/img/photovoltaic.jpg';
import recycle from '../../asstets/img/recycle.png';
import elcar from '../../asstets/img/electric-car.jpg';
import cleaner from '../../asstets/img/oczyszczalnia.jpg';
function Solutions() {
  return (
    <div className='content'>
      <h1 class="content__intro">Small steps to safe out world</h1>
      <article class="content__article">
        <img src={photovoltaic} alt="" class="content__image" />
        <h1 class="content__title">Alternative energy sources</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={recycle} alt="" class="content__image" />
        <h1 class="content__title">Recycling</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={elcar} alt="" class="content__image" />
        <h1 class="content__title">Switch to electric cars</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
      <article class="content__article">
        <img src={cleaner} alt="" class="content__image" />
        <h1 class="content__title">Wastewater treatment</h1>
        <p class="content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
          nam veritatis sed eligendi, quibusdam voluptates, nobis numquam sapiente obcaecati iusto! Tempore harum ad,
          fugit deleniti quae id beatae recusandae.</p>
      </article>
    </div>
  );
}

export default Solutions;