import React from 'react'
import HomeLogo from '../assets/delfos-logo-xxl.png';
import HomeBackgroundImg from '../assets/bg-white-1.jpg'

const Home = () => {
  return (
    <section id='home' style={{backgroundImage: `url(${HomeBackgroundImg})`}}>
        <article className='home__article'>

          <figure className='article__figure'>
            <img className='figure__img' src={HomeLogo} alt="" />
          </figure>
          
          <div className='article__txt'>
            <p className='txt__p'>Siempre simple, pero profesional.</p>
          </div>

          <button className='article__button'>
            Nuestros productos
          </button>

        </article>
    </section>
  )
}

export default Home