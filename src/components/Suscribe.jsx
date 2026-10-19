import React from 'react'

const Suscribe = () => {
  return (
    <div 
      data-aos="zoom-in" 
      className="bg-[url('/assets/logo1.webp')] dark:bg-[url('/assets/logo1.webp')] bg-repeat bg-center 
      bg-[length:111px_111px] md:bg-[length:170px_170px] p-6 h-80 shadow-lg mt-23 2xl:h-120"
    >
        
      <form 
        action="https://formsubmit.co/freepass.ec@gmail.com" 
        method="POST"
      >
        
        {/* Opcionales pero recomendados */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nueva Suscripción Free Pass" />
        <input type="hidden" name="_next" value="https://kiwiowndaniel27.github.io/FreePass.com/" 
        />

        <div className="container backdrop-blur-sm max-w-xl py-10 rounded-2xl 2xl:w-200 xl:w-250">
          
          <div className="space-y-6 max-w-xl mx-auto">
            
            <h1 className="text-black text-2xl text-center sm:text-4xl font-semibold 2xl:text-5xl">
              Obtén Notificaciones de Nuestras Nuevas Prendas Exclusivas.
            </h1>

            <div className="flex items-center text-sm 2xl:text-2xl">
              
              <input 
                type="email" 
                name="email" 
                required
                data-aos="fade-up"
                placeholder="Ingresar tu correo electrónico"
                className="w-full p-3 bg-white rounded-2xl"
              />

              <button 
                data-aos="fade-up" 
                type="submit" 
                className="bg-gray-800 text-white p-3 rounded-lg cursor-pointer border border-zinc-600 hover:bg-amber-400 text-sm active:scale-95 hover:scale-105 active:bg-white active:text-amber-400 active:duration-300 2xl:text-2xl"
              >
                Suscribete
              </button>

            </div> 
          </div>

        </div>
      </form>

    </div>
  );
};

export default Suscribe;


{/* con base de datos propia nuestra ejemplo

  import React from 'react'
import emailjs from "emailjs-com";

const Suscribe = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      e.target,
      "TU_PUBLIC_KEY"
    ).then(
      (result) => {
        console.log("Correo enviado");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div 
      data-aos="zoom-in" 
      className="bg-[url('/assets/fondo.webp')] dark:bg-[url('/assets/fondo1.0.webp')] bg-contain bg-center p-6 h-80 shadow-lg mt-23 2xl:h-120"
    >

      <form onSubmit={sendEmail}>
        <input 
          type="email"
          name="user_email"
          placeholder="Ingresar tu correo electrónico"
          required
        />
        <button type="submit">Suscribete</button>
      </form>

    </div>
  );
};

export default Suscribe;

*/}