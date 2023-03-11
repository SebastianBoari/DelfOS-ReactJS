import React from 'react';
import NavLogo from '../assets/delfos-logo-xxl.png';
import { Link } from 'react-router-dom';

const Brand = () => {

  return (
    <figure id='brand'>
        <Link to={'/'}><img id='brand__img' src={NavLogo} alt="" /></Link>
    </figure>
  );
};

export default Brand