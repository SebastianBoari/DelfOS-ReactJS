import React from 'react';
import FooterBackgroundImg from '../assets/bg-footer-1.jpg';

const Footer = () => {
  return (
    <footer id='footer' style={{backgroundImage: `url(${FooterBackgroundImg})`}}>

      <nav className='footer__navbar'>
        <ul className='navbar__list'>
          <li className='list__item'>
            <a href="https://sebastianboari.github.io/DelfOS.github.io/" target="_blank">DelfOS</a>
          </li>

          <li className='list__item'>
            <a href="https://sebastianboari.github.io/DelfOS.github.io/pages/nosotros.html" target="_blank">Nosotros</a>
          </li>

          <li className='list__item'>
            <a href="https://sebastianboari.github.io/DelfOS.github.io/pages/partners.html" target="_blank">Partners</a>
          </li>
        </ul>
      </nav>

      <p className='footer__rights'>All rights reserverd to Delfos</p>
    </footer>
  );
};

export default Footer;