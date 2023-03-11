import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import DetailsBackgroundImg from '../assets/bg-dark-2.png';

const ItemDetailContainer = () => {

  // Array vacio donde alojar la respuesta
  const [informacion, setInformacion] = useState([]);

  // Use params
  const { id } = useParams();

  // Funcion asincrona (fetch con retardo simulado) 
  async function getInformacion(){
    try {
      const respuesta = await fetch("/products.json");
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
    getInformacion()
    .then((data) => {
      setInformacion(data);
    });
  }, [])

  // Como el useParams da un string debo pasarlo a un numero entero para que encuentre coincidencia
  const idFilter = informacion.filter((info) => info.id === parseInt(id));

  if(informacion.length > 0){
    return (
      <>
        <section id='productDetail' style={{backgroundImage: `url(${DetailsBackgroundImg})`}}>
          <ItemDetail idFilter={idFilter}/>
        </section>
      </>
    );
  }
};

export default ItemDetailContainer;