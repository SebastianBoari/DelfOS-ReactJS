import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <>
      <article id='itemList'>
        {productos.map((producto) => {
          return (
            <Item key={producto.id} 
              id={producto.id}
              category={producto.category}
              price={producto.price}
              image={producto.image}
              title={producto.title}
              description={producto.description}
            />
          );
        })}
      </article>
    </>
  );
};

export default ItemList;
