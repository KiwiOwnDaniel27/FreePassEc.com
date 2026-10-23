import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa6';
import Slider from "react-slick";
import { motion } from "framer-motion";
import * as variants from '../motion/animation';
import { collar7} from '../const/data';
import { CarruselCollar7 } from '../const/data';
import { useShoppingCart } from '../context/shopping-cart';

const CollarPages6 = () => {

    const { products, addProduct} = useShoppingCart();
      
        const checkAvailableToAddCart = productId => {
          return Boolean (products.find(data => data.id === productId ));
        }

  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlides(1);
      } else if (width < 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  var settings ={
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const settingss = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (

<motion.div
variants={variants.staggerContainer}
initial='hidden'
whileInView='show'
viewport={{once: true}}
className="overflow-x-hidden"
>

<div className="mt-6 mb-12 container mx-auto px-4">



<div className="text-center mb-10">
  <h1 className="text-4xl font-bold 2xl:text-7xl">
    Excelente Elección
  </h1>

  <p className="text-xl font-bold text-amber-400 dark:text-amber-500 2xl:text-4xl">
    Coleccion Exclusiva
  </p>
</div>




<div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 container ">



<div className="w-100 sm:w-300">

<Slider {...settings}>
{CarruselCollar7.map((data, index) => (

<div key={index}>

<div className="flex justify-center">

<img
className="rounded-2xl xl:w-100 xl:-ml-110 2xl:w-140 lg:w-100 lg:-ml-160 md:w-100 md:-ml-200
sm:w-100 sm:-ml-240 w-66 -ml-220"
src={data.image}
alt=""
/>

<img 
className="mt-45 w-30 -ml-19 absolute 2xl:ml-20 2xl:w-50 2xl:-mt-60
xl:-ml-110 xl:w-40 xl:mt-80 lg:ml-20 lg:w-40 lg:-mt-45 md:ml-13 md:w-35 md:-mt-40
sm:ml-16 sm:w-40 sm:-mt-50"
src={data.img} 
alt="" />

</div> 
  <p className="font-bold absolute
                ml-15 mt-10 text-2xl w-60 text-center
                2xl:ml-160 2xl:-mt-170 2xl:text-3xl 
                xl:ml-130  xl:-mt-120 xl:text-2xl xl:w-150
                lg:ml-105 lg:-mt-120 lg:text-2xl lg:w-150
                md:ml-90 md:-mt-120 md:text-xl md:w-60
                sm:ml-60 sm:-mt-120 sm:text-xl">{data.title}</p>
  <p className="ml-35 mt-30 text-2xl absolute
                2xl:ml-169 2xl:-mt-150 2xl:text-3xl
                xl:ml-153  xl:-mt-100 xl:text-2xl xl:w-150
                lg:ml-129 lg:-mt-100 lg:text-2xl
                md:ml-112 md:-mt-100 md:text-xl
                sm:ml-80 sm:-mt-100 sm:text-xl"> $ {data.price}</p>
  <button className="bg-amber-400 dark:bg-amber-500 hover:scale-105 active:scale-95 duration-300 text-white
                      py-3 px-6 rounded-full  group-hover:bg-white  group-hover:text-amber-400
                      active:bg-white active:text-amber-400 active:duration-300
                      xl:ml-150 xl:-mt-80 xl:absolute
                      2xl:ml-166 2xl:-mt-130 2xl:text-3xl 2xl:absolute
                      lg:ml-125 lg:-mt-80 lg:text-2xl lg:absolute
                      md:ml-95 md:-mt-80 md:text-xl md:absolute
                      sm:ml-65 sm:-mt-80 sm:text-xl sm:absolute
                      2xl:mb-6
                      ml-15 mt-50 text-2xl relative
                      [WebkitTapHighlightColor:transparent]"
                      onClick={() => addProduct(data)}
                      disabled={checkAvailableToAddCart(data.id)}
                      >
                        Añadir al carrito
                    </button>
  
</div>

))}
</Slider>

</div>
</div>


{/* PRODUCTOS RELACIONADOS */}

<motion.div variants={variants.fadeInUp} className="mt-20">

<Slider {...settingss} className="px-2 md:px-10">

{collar7.map((data) => (

<div key={data.id} className="px-3">

<div
className="bg-white bg-[url('/assets/fondo.prod4.png')] dark:bg-[url('/assets/fondo.prod1.png')] bg-cover
hover:bg-amber-400 hover:text-white
relative shadow-xl duration-300 group rounded-2xl
w-full h-full"
>

<div className="w-46 ml-23 md:w-full flex justify-center mt-10 md:ml-0">

<img
src={data.image}
alt=""
className=" 
group-hover:scale-110 duration-300 drop-shadow-md"
/>

</div>

<div className="p-4 text-center text-sm">

<div className="flex items-center justify-center gap-2 text-xl mb-3 mt-9">

<FaStar className="text-yellow-500 group-hover:text-white"/>
<FaStar className="text-yellow-500 group-hover:text-white"/>
<FaStar className="text-yellow-500 group-hover:text-white"/>

</div>

<h1 className="text-lg font-bold">
{data.title}
</h1>

<p className="text-gray-500 group-hover:text-white duration-300 mt-2 text-sm line-clamp-2">
{data.description}
</p>

</div>

</div>

</div>

))}

</Slider>

</motion.div>

</div>
</motion.div>
  )
}

export default CollarPages6;
