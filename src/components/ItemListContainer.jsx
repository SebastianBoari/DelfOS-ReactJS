import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CatalogueBackgroundImg from '../assets/bg-dark-1.png'

const ItemListContainer = () => {
  // Inicializo un estado con un array vacio donde guardar los productos
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  // Creo una funcion que haga fetch a mi archivo JSON y simulo un retardo de 2 segundos 
  async function getProducts(){
    try {
      const respuesta = await fetch("/products.json");
      const datos = await respuesta.json();
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(datos.products);
        }, 2000);
      });
    } catch (error) {
      alert('Error: Ha ocurrido un error. Por favor intente mas tarde.');
      console.error(error);
    }
  };

  // Utilizo un useEffect para llamar a la funcion que trae los productos
  // Guardo la respuesta dentro del estado 'productos'
  useEffect(() => {
    getProducts().then((data) => {
      setProductos(data);
    });
  }, [])

  const categoryFilter = productos.filter((producto) => producto.category === category);
  
  return (
    <section id='catalogue' style={{backgroundImage: `url(${CatalogueBackgroundImg})`}}>
      {category ? <ItemList productos={categoryFilter} /> : <ItemList productos={productos} />}
    </section>
  );

};

export default ItemListContainer;