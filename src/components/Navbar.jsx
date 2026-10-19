import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menu } from "../const/data";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useShoppingCart } from "../context/shopping-cart";
import { TrashIcon } from "@heroicons/react/24/solid";
import PagoKushki from "./PagoKushKi";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { products, removeProduct, totalAmount, clearShoppingCart } = useShoppingCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Lógica para bloquear scroll cuando el modal de WhatsApp está abierto
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const handleClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleCartRotate = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleWhatsAppModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="px-0 sticky md:static top-0 z-50 bg-white">

      {/* SECCIÓN SUPERIOR (BANNER) */}
      <div className="relative z-10 bg-[url('/assets/fondo.prod3.webp')] 
      dark:bg-[url('/assets/fondo.prod.webp')] bg-center flex mx-auto w-full flex-col p-6 h-36 shadow-lg 2xl:h-80
      xl:h-43 lg:h-53 md:h-53 sm:h-53">

        {/* BOTÓN WHATSAPP (Mantiene lógica de Modal) */}
        <div className="absolute left-0 active:scale-95 hover:scale-105">
          <button onClick={handleWhatsAppModal}>
            <img src="./assets/mas.png" alt="" className="w-27 mt-130 md:hidden rounded-full" />
          </button>
        </div>

        {/* BOTÓN MENU HAMBURGUESA MOBILE */}
        <button className="md:hidden absolute mt-3 sm:mt-7 -ml-3 transition-transform duration-300" onClick={handleClick}>
          <RiMenuLine size={40} className={`text-black dark:text-white transition-transform duration-900 ${isMenuOpen ? "rotate-270" : "rotate-0"}`} />
        </button>

        <div className="xl:-ml-23">
          <SearchBar />
        </div>

        <div className="container">
          <button href="https://www.instagram.com/freepassec/" target="_blank" rel="noreferrer">
            <img className="ml-21 2xl:ml-300 xl:ml-233 lg:ml-180 md:ml-140 mt-0 2xl:-mt-33 xl:-mt-19 lg:-mt-12 md:-mt-12 sm:ml-55 w-46 2xl:w-100 xl:w-70 lg:w-60 md:w-50 sm:w-45 block dark:hidden" src="./assets/logo-horizontal.webp" alt="" width={300} />
            <img className="ml-21 2xl:ml-300 xl:ml-233 lg:ml-180 md:ml-140 mt-0 2xl:-mt-33 xl:-mt-19 lg:-mt-12 md:-mt-12 sm:ml-55 w-46 2xl:w-100 xl:w-70 lg:w-60 md:w-50 sm:w-45 hidden dark:block" src="./assets/logo-horizontal1.webp" alt="" width={300} />
          </button>

          {/* CARRITO */}
          <div className="relative">
            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-amber-400 dark:bg-amber-500 hover:bg-amber-40 transition-all duration-200 text-white hover:text-black py-3 px-6 rounded-full flex items-center h-10 gap-3 group ml-45 mt-3 border border-black 2xl:w-35 2xl:h-20 2xl:ml-360 xl:ml-259 lg:ml-200 md:ml-155 sm:ml-80 2xl:mt-3 xl:mt-3 lg:mt-6 md:mt-3 sm:mt-10 active:scale-95 hover:scale-105 active:bg-white active:text-amber-400 active:duration-300"
            >
              <span className="group-hover:block transition-all duration-200 2xl:text-xl">{products.length}</span>
              <FaCartShopping
                onClick={handleCartRotate}
                className={`w-6 h-6 text-xl text-white hover:text-amber-400 drop-shadow-[2px_2px_2px_black] cursor-pointer 2xl:w-12 2xl:h-12 2xl:ml-5 transition-transform duration-500 ${isRotating ? "rotate-360" : "rotate-0"}`}
              />
            </button>

            {showCart && (
              <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-2xl z-50 flex flex-col max-h-[70vh]">
                <div className="p-4"><h3 className="font-bold text-black">Carrito</h3></div>
                <div className="overflow-y-auto flex-1 text-black">
                  {products.length === 0 ? <p className="text-gray-500 ml-4">Carrito vacío</p> :
                    products.map((data) => (
                      <div key={data.id} className="flex items-center justify-between border-b py-2 px-4">
                        <img src={data.image} alt="" className="w-23 h-30 object-cover" />
                        <div className="flex flex-col flex-1 ml-3">
                          <span className="text-sm font-semibold">{data.title}</span>
                          <span className="mt-3">${data.price}</span>
                        </div>
                        <button onClick={() => removeProduct(data.id)} className="p-2">
                          <TrashIcon className="w-5 h-5 text-red-600 active:scale-95 hover:scale-105 active:duration-600" />
                        </button>
                      </div>
                    ))
                  }
                </div>
                <div className="p-4 bg-white rounded-2xl">
                  <div className="flex justify-between font-bold text-black mb-2">
                    <span>Total:</span>
                    <span>${products.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}</span>
                  </div>
                  <PagoKushki totalAmount={totalAmount} clearShoppingCart={clearShoppingCart} />
                </div>
              </div>
            )}
          </div>

          <div className="container 2xl:-mt-20 xl:-mt-20 lg:-mt-20 md:-mt-20 sm:-mt-6 mt-1.5 -ml-20">
            <DarkMode className="active:scale-95 hover:scale-105 active:duration-300" />
          </div>
        </div>
      </div>

      {/* MENU MOBILE (Estilos aplicados del segundo código) */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <button className="absolute top-8 right-3 md:hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95" onClick={handleClick}>
          <RiCloseLine size={50} className={`text-black dark:text-white transition-transform duration-900 ${isMenuOpen ? "rotate-0 scale-100" : "rotate-270 scale-75"}`} />
        </button>

        <img className="-mt-140 absolute w-75 container block dark:hidden" src="./assets/logo-horizontal.webp" alt="" />
        <img className="-mt-140 absolute w-75 container hidden dark:block" src="./assets/logo-horizontal1.webp" alt="" />

        <img className="active:scale-95 hover:scale-105 mt-108 2xl:mt-0 absolute w-33 container block dark:hidden" src="./assets/logoDQCompany.webp" alt="" />
        <img className="active:scale-95 hover:scale-105 mt-108 2xl:mt-0 absolute w-33 container hidden dark:block" src="./assets/logoDQCompany.webp" alt="" />

        <ul className="flex flex-col items-center gap-6 text-xl -mt-19">
          <li>
            <a href="/#/tienda" className="text-black dark:text-white font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95" onClick={handleClick}>
              Tienda
            </a>
          </li>
          {Menu.map((data) => (
            <li key={data.name}>
              <Link className="text-black dark:text-white font-bold inline-block px-4 primary-btn duration-200 hover:text-amber-400 active:scale-95" to={data.link} onClick={handleClick}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MENU DESKTOP (Estilos aplicados del segundo código) */}
      <div className="hidden md:flex justify-center shadow-lg py-3 lg:w-full">
        <ul className="flex items-center gap-13 text-1xl 2xl:gap-33 xl:gap-29 lg:gap-20 md:gap-13 sm:gap-4">
          {Menu.map((data) => (
            <li key={data.name}>
              <Link className="font-bold inline-block px-4 primary-btn duration-200 2xl:text-3xl" to={data.link}>
                {data.name}
              </Link>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a href="/#/tienda" className="flex items-center primary-btn 2xl:text-3xl font-bold">
              Tienda
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>

            <div className="absolute z-50 hidden group-hover:block w-41 rounded-md bg-transparent backdrop-blur-sm p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.link} className="inline-block p-3 primary-btn w-full rounded-full">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* MODAL WHATSAPP */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl  w-80 shadow-2xl z-10 mt-133">
            <div className="flex flex-col gap-3">
              <div className="absolute -mt-116 ml-59">
                <a href="https://wa.me/593988220328?text=Hola%20,estoy%20interesado/a%20en%20un%20producto%20exclusivo%20,que%20me%20recomiendas👕👗🛍️"
                  target="_blank" >
                  <img src="./assets/whatsappico.png" target="_blank" alt="" className="w-23 active:scale-95 hover:scale-105" />
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
                <a href="https://wa.me/593984611893?text=Hola%20,me%20puedes%20ayudar,%20tengo%20una%20consulta%20💻🛒">
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

export default Navbar;