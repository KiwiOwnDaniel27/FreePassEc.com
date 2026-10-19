import React from 'react'
import { ProductsData } from '../const/data';
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import * as variants from '../motion/animation';

const Products = () => {
  return <div className="mt-14 mb-12">
        
        
        <div className="text-center mb-10 w-90 mx-auto ml-3 container
        2xl:ml-195 2xl:w-153
        xl:ml-95 xl:w-149
        lg:ml-60
        md:ml-30
        sm:ml-20">
            <p data-aos="fade-up" className="text-sm font-bold text-amber-400 dark:text-amber-500
            2xl:text-5xl">Productos más vendidos</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold
            2xl:text-5xl">Outfits</h1>
            <p data-aos="fade-up" className="text-xs text-gray-700
            2xl:text-2xl">Viste con actitud: cada prenda hecha para ti ✨</p>
        </div>

        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            place-items-center gap-0 2xl:gap-5 xl:gap-5 lg:xl:gap-5 md:gap-5 sm:gap-5 text-center">
                {ProductsData.map((data) =>(
                    <div 
                    data-aos= "fade-up"
                    data-aos-delay= {data.aosDeLay}
                    key={data.id}
                    className="space-y-3 mb-9 md:mb-0">
                        <a href={data.link}>
                        <img src={data.image} alt="" className="h-70 w-46 object-cover rounded-md
                        2xl:h-140 2xl:w-130
                        xl:h-85 xl:w-130
                        lg:h-90 lg:w-130
                        md:h-110 md:w-130
                        sm:h-100 sm:w-75" />
                        
                        <div className="mt-6">
                            <h3 className="font-semibold
                            2xl:text-2xl">{data.title}</h3>
                            <p className="text-sm text-gray-700 mt-1
                            2xl:text-2xl">{data.color}</p>
                        </div>
                        </a>

                        <div className="flex items-center gap-3">
                            <span className="ml-19 md:ml-25
                            2xl:text-2xl">{data.rating}</span>
                            <FaStar className="text-amber-400 dark:text-amber-500"/>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-amber-400 dark:bg-amber-500  text-white py-3 px-9
                rounded-md
                active:scale-95 hover:scale-105
              active:bg-white active:text-amber-400 active:duration-300
                2xl:text-2xl"> 
                    <a href="/#/tienda">
                    Ver más
                    </a>
                </button>
            </div>
        </div>
    </div>;
};

export default Products;