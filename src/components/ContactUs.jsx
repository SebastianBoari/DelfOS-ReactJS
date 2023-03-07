import React from 'react';
import Form from './Form';
import ContactUsBackgroundImg from '../assets/bg-white-1.jpg'

const ContactUs = () => {
  return (
    <section id='contactUs' style={{backgroundImage: `url(${ContactUsBackgroundImg})`}}>
      <article className='contactUs__article'>

        <div className='article__form'>
          <h2 className='form__title'>Estemos en contacto</h2>
          <Form />
        </div>

        <div className='article__adress'>
          <div className='maps__frame'>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="380" frameborder="0"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe>
          </div>
          <p>Redmond, Washington, United States.</p>
        </div>

      </article>
    </section>
  );
};

export default ContactUs;