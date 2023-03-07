import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  // Inicializo un estado con un array vacio donde guardar los productos
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  // Creo una funcion que haga fetch a mi archivo JSON y simulo un retardo de 2 segundos 
  async function getProducts(){
    try {
      const respuesta = await fetch("./products.json");
      const datos = await respuesta.json();
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(datos.products);
        }, 2000);
      });
    } catch (error) {
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

  
  
};

export default ItemListContainer;