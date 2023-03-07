import React from 'react'

const Form = () => {
  return (
    <form id='contactForm'>
        <label className='div'>
            <input type="text" placeholder='Nombre y Apellido' id='inputNombre' />
        </label>
        <label className='div' id='numberContainter'>
            <input id="inputTelefono" type="number" name="" placeholder='Numero de Telefono' />
        </label>
        <label className='div'>
            <input type="email" name="" id="inputMail" placeholder='Email'/>
        </label>
        <label className='div'>
            <input type="text" placeholder='Motivo del contacto' id='inputMotivo' />
        </label>
        <label className='div'>
            <textarea name="" id="inputText" cols="24" rows="9" placeholder='Descripcion'></textarea>
        </label>

        <label className='div' id='submitContainter'>
            <input type="submit" value="Enviar" id='inputSubmit'/>
        </label>
    </form>
  )
}

export default Form