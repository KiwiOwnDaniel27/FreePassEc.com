import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pago from '../components/Pago';

const Carrito = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <Pago/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Carrito;