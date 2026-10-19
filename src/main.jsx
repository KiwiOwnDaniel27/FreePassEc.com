import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Origen from "./pages/Origen.jsx";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { HashRouter } from "react-router-dom";
import Amedida from "./pages/Amedida.jsx";
import Galeria from "./pages/Galeria.jsx";
import Tienda from "./pages/Tienda.jsx";
import Home from "./pages/Home.jsx";
import { ShoppingCartProvider } from "./context/shopping-cart.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>
);