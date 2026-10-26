import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // 🟢 1. Importamos useLocation
import { CatalogoPagos } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import Footer from '../components/Footer';
import PagoKushki from './PagoKushKi';

const Pago = () => {
  const location = useLocation(); // 🟢 2. Instanciamos useLocation

  // 🟢 3. Leemos el total enviado desde la navegación (si no existe, usa 0)
  const totalAmount = location.state?.totalAmount || 0;

  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Lógica para bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="mt-6 mb-12 relative min-h-screen">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm font-bold text-amber-400 dark:text-amber-500
          2xl:text-7xl xl:text-sm lg:text-sm md:text-sm sm:text-3xl">
          Falta poco, tu carrito te espera
        </p>
        <p data-aos="fade-up" className="text-sm font-bold text-amber-400 dark:text-amber-500
          2xl:text-7xl xl:text-sm lg:text-sm md:text-sm sm:text-3xl">
          Realiza tu pago
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold
          2xl:text-4xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl">
          Valor a cancelar: 
        </h1>
        <div className="p-4 rounded-2xl ml-33 text-2xl">
            <div className="flex justify-between font-bold text-black mb-2">
              {/* 🟢 4. Renderizamos directamente el totalAmount recibido */}
              <span>${Number(totalAmount).toFixed(2)}</span>
            </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5
          place-items-center gap-12 text-center ml-0
          2xl:ml-24 2xl:gap-[140px]
          xl:ml-40 xl:gap-24
          lg:ml-32 lg:gap-20
          md:ml-20 md:gap-16
          sm:ml-0 sm:gap-9">
          {CatalogoPagos && CatalogoPagos.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDeLay}
              key={data.id}
              className="space-y-3 w-80
              2xl:w-[500px] xl:w-80 lg:w-80 md:w-63">
              <a href={data.link}>
                <img src={data.image} alt="" className="object-cover rounded-md
                  active:scale-95 hover:scale-105 active:duration-300" />
                <div className="mt-6 text-center text-lg/tight font-bold">
                  <h3 className="font-semibold 2xl:text-4xl">{data.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="container" >
        <div className="bg-[url('/assets/logo1.webp')] bg-cover bg-center
        h-25 w-89 text-black mt-21 ml-0
        2xl:mt-9 xl:mt-9 lg:mt-9 md:mt-9 sm:mt-19 2xl:w-160
        2xl:ml-93 xl:ml-90 lg:ml-76 md:ml-37 sm:ml-30
        2xl:h-40 xl:h-40 lg:h-40 md:h-40 sm:h-40">
            <br />
            <p className="text-xs text-center -mt-21 -ml-3 xl:-mt-16 2xl:-mt-19 lg:-mt-16 md:-mt-16 sm:-mt-19">
              Derechos reservados
              <br />
              © Copyright FreePass 2026
            <br /><br />
              Viste tus sueños, define tu estilo. Cada detalle cuenta.
            </p>
        </div>
      </div>

      {/* BOTÓN FLOTANTE CON IMAGEN */}
      {!isModalOpen && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-10 left-0 z-40 active:scale-95 hover:scale-105 transition-transform"
          aria-label="Contacto"
        >
          <img 
            src="./assets/mas.png" 
            alt="Contacto" 
            className="w-27 mt-130 md:hidden rounded-full" 
          />
        </button>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl w-80 shadow-2xl z-10 mt-133">
            <div className="flex flex-col gap-3">
              <div className="absolute -mt-116 ml-59">
                <a href="https://wa.me/593988220328?text=Hola%20,estoy%20interesado/a%20en%20un%20producto%20exclusivo%20,que%20me%20recomiendas👕👗🛍️"
                  target="_blank" rel="noopener noreferrer">
                  <img src="./assets/whatsappico.png" alt="" className="w-23 active:scale-95 hover:scale-105" />
                  <p className="text-white text-sm -mt-3 ml-4 w-20 mb-3">Personal Shopper</p>
                </a>
                <a href="tel:+593959463688">
                  <img src="./assets/llamada.png" alt="" className="w-23 active:scale-95 hover:scale-105" />
                  <p className="text-white text-sm mt-0 ml-6 mb-3">Llamar</p>
                </a>
                <a href="./Catalogo-TerritorioLibre-FreePass-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src="./assets/catalogo.png" alt="" className="w-23 active:scale-95 hover:scale-105" />
                  <p className="text-white text-sm mt-0 ml-4 mb-3">Catálogo</p>
                </a>
                <a href="https://wa.me/593984611893?text=Hola%20,me%20puedes%20ayudar,%20tengo%20una%20consulta%20💻🛒"
                  target="_blank" rel="noopener noreferrer">
                  <img src="./assets/soporte.png" alt="" className="w-23 active:scale-95 hover:scale-105" />
                  <p className="text-white text-sm mt-0 ml-6">Soporte</p>
                </a>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 dark:bg-gray-900 py-2 rounded-lg dark:text-white active:scale-95 hover:scale-105"
              >
                Cancelar
              </button>
            </div>
          </div>
          <div className="absolute -ml-80 -mt-9 w-100 animate-[spin_9s_linear_infinite]">
            <img src="./assets/logo-white-circular.png" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Pago;