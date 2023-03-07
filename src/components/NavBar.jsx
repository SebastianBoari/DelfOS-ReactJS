import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavLogo from '../assets/delfos-logo-mid.png';
import CategoryButton from './CategoryButton';


const NavBar = () => {
  return (
    <>
    <header id='header'>
        <figure className='header__figure'>
            <img className='figure__img' src={NavLogo} alt="" />
        </figure>
        <nav className='header__navBar'>
            <ul className='navBar__list'>
                <li className='navBarList__item'><Link className="item__link" to='/'>Inicio</Link></li>
                <li className='navBarList__item'><Link className="item__link" to='/catalogue'>Productos</Link></li>
                <li className='navBarList__item'><Link className="item__link" to='/contactUs'>Contacto</Link></li>
                <CategoryButton />
            </ul>
        </nav>
    </header>
    </>
  );
};

export default NavBar;