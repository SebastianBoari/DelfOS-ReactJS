import React, { useState } from 'react';

const ItemDetail = ({ idFilter }) => {

  const producto = idFilter[0];


  if(producto.category === 'delfos'){
    return(
      <article id='itemDetail'>

        <div id='itemDetail__left'>
          <div id='itemDetail__header'>
            <figure id='header__figure'>
              <img id='figure__img' src={producto.image} alt="" />
            </figure>
            <h2 id='header__title'>{producto.title}</h2>
          </div>
          <div id='itemDetail__body'>
            <p>{producto.description}</p>
          </div>
          <div id='itemDetail__footer'>
            <p id='footer__price'>${producto.price}</p>
            <button id='footer__btn'>Comprar</button>
          </div>
        </div>

        <div id='itemDetail__right'>
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{producto.featureTitle1}</td>
                <td>{producto.featureDescription1}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle2}</td>
                <td>{producto.featureDescription2}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle3}</td>
                <td>{producto.featureDescription3}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle4}</td>
                <td>{producto.featureDescription4}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle5}</td>
                <td>{producto.featureDescription5}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle6}</td>
                <td>{producto.featureDescription6}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle7}</td>
                <td>{producto.featureDescription7}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle8}</td>
                <td>{producto.featureDescription8}</td>
              </tr>
              <tr>
                <td>{producto.featureTitle9}</td>
                <td>{producto.featureDescription9}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </article>
    );
  } else {
    return(
      <article id='itemDetail'>

        <div id='itemDetail__left'>
          <div id='itemDetail__header'>
            <figure id='header__figure'>
              <img id='figure__img' src={producto.image} alt="" />
            </figure>
            <h2 id='header__title'>{producto.title}</h2>
          </div>
          <div id='itemDetail__body'>
            <p>{producto.description}</p>
          </div>
          <div id='itemDetail__footer'>
            <p id='footer__price'>${producto.price}</p>
            <button id='footer__btn'>Comprar</button>
          </div>
        </div>

      </article>
    );
  }

};

export default ItemDetail;