import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionButton = () => {
  return (
    <Link to={'/catalogue'}>
      <button className='article__button'>
        Nuestros productos
      </button>
    </Link>
  );
};

export default CallToActionButton;