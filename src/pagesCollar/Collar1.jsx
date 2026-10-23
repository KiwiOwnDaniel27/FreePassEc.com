import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollarPages from '../components/CollarPages';

export const Collar1 = () => {
  return (
    <div>
        <div>
            <Navbar/>
        <div>
            <CollarPages/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Collar1;
