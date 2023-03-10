import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalogue from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/catalogue' element={<Catalogue />} />
        <Route exact path='/contactUs' element={<ContactUs />} />
        <Route exact path='/category/:category' element={<Catalogue />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
