import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CategoryButton = () => {
    // Inicializo un estado que realice la labor de toggle
    const [desplegarCategorias, setDesplegarCategorias] = useState(false);

    // Event Handle para cerrar el modal cuando se detecte un click
    const refMenu = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (refMenu.current && !refMenu.current.contains(event.target)) {
                setDesplegarCategorias(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div id='categoryButton__container' ref={refMenu}>
            <button id='categoryButton' onClick={() => setDesplegarCategorias(!desplegarCategorias)}> Categorias </button>
            {desplegarCategorias && (
                <ul className='category__list'>
                    <li className='list__item'><NavLink to={`/category/${'delfos'}`} onClick={() => setDesplegarCategorias(!desplegarCategorias)}>DelfOS</NavLink></li>
                    <li className='list__item'><NavLink to={`/category/${'juliusplans'}`} onClick={() => setDesplegarCategorias(!desplegarCategorias)}>Julius Plans</NavLink></li>
                    <li className='list__item'><NavLink to={`/category/${'othersoftware'}`} onClick={() => setDesplegarCategorias(!desplegarCategorias)}>Software</NavLink></li>
                </ul>
            )}
        </div>
    );
};

export default CategoryButton;
