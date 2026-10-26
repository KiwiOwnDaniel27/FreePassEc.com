import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import PreLoader from './pages/PreLoader';
import Home from './pages/Home';
import Origen from "./pages/Origen";
import Amedida from "./pages/Amedida";
import Galeria from "./pages/Galeria";
import Catalogo from './pages/Catalogo';
import Abrigos from './pages/Abrigos';
import Abrigo1 from './pagesAbrigos/Abrigo1';
import Abrigo2 from './pagesAbrigos/Abrigo2';
import Abrigo3 from './pagesAbrigos/Abrigo3';
import Abrigo4 from './pagesAbrigos/Abrigo4';
import Abrigo5 from './pagesAbrigos/Abrigo5';
import Abrigo6 from './pagesAbrigos/Abrigo6';
import Abrigo7 from './pagesAbrigos/Abrigo7';
import Abrigo8 from './pagesAbrigos/Abrigo8';
import Abrigo9 from './pagesAbrigos/Abrigo9';
import Abrigo10 from './pagesAbrigos/Abrigo10';
import Abrigo11 from './pagesAbrigos/Abrigo11';
import Tienda from './pages/Tienda';
import Tejidos from './pages/Tejidos';
import Indumentaria from './pages/Indumentaria';
import { Camisa1 } from './pagesCamisas/Camisa1';
import { Camisa2 } from './pagesCamisas/Camisa2';
import { Camisa3 } from './pagesCamisas/Camisa3';
import { Camisa4 } from './pagesCamisas/Camisa4';
import { Camisa5 } from './pagesCamisas/Camisa5';
import { Camisa6 } from './pagesCamisas/Camisa6';
import { Camisa7 } from './pagesCamisas/Camisa7';
import { Camisa8 } from './pagesCamisas/Camisa8';
import { Camisa9 } from './pagesCamisas/Camisa9';
import {Tejido1} from './pagesTejidos/Tejido1';
import {Tejido2} from './pagesTejidos/Tejido2';
import {Tejido3} from './pagesTejidos/Tejido3';
import {Tejido4} from './pagesTejidos/Tejido4';
import {Tejido5} from './pagesTejidos/Tejido5';
import Accesorio from './pages/Accesorio';
import Collares from './pages/Collares';
import Collar1 from './pagesCollar/Collar1';
import Collar2 from './pagesCollar/Collar2';
import Collar3 from './pagesCollar/Collar3';
import Collar4 from './pagesCollar/Collar4';
import Collar5 from './pagesCollar/Collar5';
import Collar6 from './pagesCollar/Collar6';
import Collar7 from './pagesCollar/Collar7';
import Collar8 from './pagesCollar/Collar8';
import Pago from './components/Pago';


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // duración del preloader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/origen" element={<Origen />} />
        <Route path="/amedida" element={<Amedida />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/abrigos" element={<Abrigos />} />
        <Route path="/abrigo-1" element={<Abrigo1 />} />
        <Route path="/abrigo-2" element={<Abrigo2 />} />
        <Route path="/abrigo-3" element={<Abrigo3 />} />
        <Route path="/abrigo-4" element={<Abrigo4 />} />
        <Route path="/abrigo-5" element={<Abrigo5 />} />
        <Route path="/abrigo-6" element={<Abrigo6 />} />
        <Route path="/abrigo-7" element={<Abrigo7 />} />
        <Route path="/abrigo-8" element={<Abrigo8 />} />
        <Route path="/abrigo-9" element={<Abrigo9 />} />
        <Route path="/abrigo-10" element={<Abrigo10 />} />
        <Route path="/abrigo-11" element={<Abrigo11 />} />
        <Route path="/tejidos" element={<Tejidos />} />
        <Route path="/tejido-1" element={<Tejido1 />} />
        <Route path="/tejido-2" element={<Tejido2 />} />
        <Route path="/tejido-3" element={<Tejido3 />} />
        <Route path="/tejido-4" element={<Tejido4 />} />
        <Route path="/tejido-5" element={<Tejido5 />} />
        <Route path="/indumentaria" element={<Indumentaria />} />
        <Route path="/camisa-1" element={<Camisa1/>} />
        <Route path="/camisa-2" element={<Camisa2/>} />
        <Route path="/camisa-3" element={<Camisa3/>} />
        <Route path="/camisa-4" element={<Camisa4/>} />
        <Route path="/camisa-5" element={<Camisa5/>} />
        <Route path="/camisa-6" element={<Camisa6/>} />
        <Route path="/camisa-7" element={<Camisa7/>} />
        <Route path="/camisa-8" element={<Camisa8/>} />
        <Route path="/camisa-9" element={<Camisa9/>} />
        <Route path="/accesorio" element={<Accesorio/>} />
        <Route path="/collares" element={<Collares />} />
        <Route path="/collar-1" element={<Collar1 />} />
        <Route path="/collar-2" element={<Collar2 />} />
        <Route path="/collar-3" element={<Collar3 />} />
        <Route path="/collar-4" element={<Collar4 />} />
        <Route path="/collar-5" element={<Collar5 />} />
        <Route path="/collar-6" element={<Collar6 />} />
        <Route path="/collar-7" element={<Collar7 />} />
        <Route path="/collar-8" element={<Collar8 />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </HashRouter>
  );
};

export default App;