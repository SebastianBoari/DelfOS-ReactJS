import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Brand from './Brand';
import CartWidget from './CartWidget';

import CategoryButton from './CategoryButton';


const NavBar = () => {
  return (
    <>
    <header id='header'>
        <Brand />
        <nav className='header__navBar'>
            <ul className='navBar__list'>
              <li className='navBarList__item'><Link className="item__link" to='/'>Inicio</Link></li>
              <li className='navBarList__item'><Link className="item__link" to='/catalogue'>Productos</Link></li>
              <li className='navBarList__item'><Link className="item__link" to='/contactUs'>Contacto</Link></li>
              <CategoryButton />
              <CartWidget />
            </ul>
        </nav>
    </header>
    </>
  );
};

export default NavBar;