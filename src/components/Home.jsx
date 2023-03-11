import React from 'react'
import HomeLogo from '../assets/delfos-logo-xxl.png';
import HomeBackgroundImg from '../assets/bg-white-1.jpg'
import CallToActionButton from './CallToActionButton'
import Brand from './Brand'

const Home = () => {
  return (
    <section id='home' style={{backgroundImage: `url(${HomeBackgroundImg})`}}>
        <article className='home__article'>

          <Brand />
          
          <div className='article__txt'>
            <p className='txt__p'>Siempre simple, pero profesional.</p>
          </div>

          <CallToActionButton />

        </article>
    </section>
  )
}

export default Home