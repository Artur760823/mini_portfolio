import React from 'react';
import './page.css';
import muir from '../../asstets/img/muirJ.jpg'
import carson from '../../asstets/img/rachelC.jpg'
import erin from '../../asstets/img/erin.png'
import davidA from '../../asstets/img/davidA.jpg'
import starhawk from '../../asstets/img/starhawk.jpg'
import gretta from '../../asstets/img/grettaT.jpg'

function Activists() {
  return (
    <div className='content'>
      <h1 class="content__intro">People you can fallow</h1>
      <article class="content__article">
        <img src={muir} alt="Jonh Muir" class="content__image" />
        <h1 class="content__title">John Muir</h1>
        <p class="content__description">John Muir (April 21, 1838 – December 24, 1914),
          also known as "John of the Mountains" and "Father of the National Parks", was an influential Scottish-American naturalist,
          author, environmental philosopher, botanist, zoologist, glaciologist, and early advocate for the preservation of wilderness
          in the United States of America.</p>
      </article>
      <article class="content__article">
        <img src={carson} alt="Rachel Carson" class="content__image" />
        <h1 class="content__title">Rachel Carson</h1>
        <p class="content__description">Rachel Louise Carson (May 27, 1907 – April 14, 1964) was an American marine biologist, author,
          and conservationist whose influential book Silent Spring (1962) and other writings
          are credited with advancing the global environmental movement.</p>
      </article>
      <article class="content__article">
        <img src={erin} alt="Erin brocovich" class="content__image" />
        <h1 class="content__title">Erin brocovich</h1>
        <p class="content__description">Erin Brockovich (born Pattee; June 22, 1960) is an American legal clerk, consumer advocate,
          and environmental activist, who, despite her lack of education in the law,
          was instrumental in building a case against Pacific Gas And Electric Company
          involving groundwater contamination in a town in California with the help of attorney Ed Masry in 1993.</p>
      </article>
      <article class="content__article">
        <img src={davidA} alt="David Attenborough" class="content__image" />
        <h1 class="content__title">David Attenborough</h1>
        <p class="content__description">Sir David Frederick Attenborough (born 8 May 1926) is an English broadcaster,
          natural historian and author. He is best known for writing and presenting, in conjunction with the BBC Natural History Unit,
          the nine natural history documentary series forming the Life collection, a comprehensive survey of animal and plant life on Earth.</p>
      </article>
      <article class="content__article">
        <img src={starhawk} alt="Starhawk" class="content__image" />
        <h1 class="content__title">Starhawk</h1>
        <p class="content__description">Starhawk (born Miriam Simos on June 17, 1951) is an American feminist and author.
          She is known as a theorist of feminist Neopaganism and ecofeminism.[2] She is a columnist for Beliefnet.com and for On Faith,
          the Newsweek/Washington Post online forum on religion.
          Her book The Spiral Dance (1979) was one of the main inspirations behind the Goddess movement. </p>
      </article>
      <article class="content__article">
        <img src={gretta} alt="Greta Thunberg" class="content__image" />
        <h1 class="content__title">Greta Thunberg</h1>
        <p class="content__description">Greta Tintin Eleonora Ernman Thunberg (born 3 January 2003) is a Swedish environmental activist who is known for challenging world leaders
          to take immediate action for climate change mitigation.
          Thunberg initially gained notice for her youth and her straightforward and blunt speaking manner,
          both in public and to political leaders and assemblies, in which she criticizes world leaders
          for their failure to take what she considers sufficient action to address the climate crisis.</p>
      </article>
    </div>
  );
}

export default Activists;