import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ id, category, price, image, title, description }) => {

  return (
    <>
      <div className='card' id={id}> 
        <div className='card__header'>
            <figure className='header__figure'>
              <img className='img'  src={image} alt="" />
            </figure>
            
            <h2 className='title'>{title}</h2>
        </div>

        <div className='card__body'>
          <p className='category'>Categoria: {category}</p>
          <p className='description'>{description.slice(0, 180)}...</p>
        </div>

        <div className='card__footer'>
          <p className='price'>${price}</p>
          <NavLink to={`/item/${id}`}><button className='button'>Ver más</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Item;