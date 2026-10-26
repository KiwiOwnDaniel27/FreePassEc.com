import React from 'react';
import { ImageList } from '../const/data';
import Slider from "react-slick";



const Hero = () => {

    var settings ={
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className="relative overflow-y-hidden min-h-40 bg-gray-900 text-white dark:bg-gray-950 dark:text-white
        duration-200 
        2xl:h-170  
        xl:h-135
        lg:h-80
        md:h-85
        sm:h-90">

            <div className="h-60 w-60
            bg-[url('/assets/fondo.webp')] bg-contain bg-center flex -ml-35 2xl:ml-265
            xl:ml-155 lg:ml-100 md:ml-103 sm:-ml-29 mt-19 rounded-3xl rotate-45 -z-10
            2xl:h-160 2xl:w-160 2xl:-mt-60
            xl:h-150 xl:w-150 xl:-mt-65
            lg:w-140 lg:h-140 lg:-mt-100
            md:w-90 md:h-90 md:-mt-30
            sm:w-60 sm:h-60 sm:mt-14  dark:hidden
            ">
            </div>
            <div className="h-60 w-60
            bg-[url('/assets/fondo1.0.webp')] bg-contain bg-center -ml-35 2xl:ml-265
            xl:ml-155 lg:ml-100 md:ml-103 sm:-ml-29 mt-19 rounded-3xl rotate-45 -z-10
            2xl:h-160 2xl:w-160 2xl:-mt-60
            xl:h-150 xl:w-150 xl:-mt-65
            lg:w-140 lg:h-140 lg:-mt-100
            md:w-90 md:h-90 md:-mt-30
            sm:w-60 sm:h-60 sm:mt-14 hidden dark:block
            ">
            </div>

            <div className="container pb-8 sm:pb-0 -mt-80
            2xl:-mt-69
            xl:-mt-60
            lg:-mt-30
            md:-mt-45
            sm:-mt-56" >
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2" >
    
                                <div className="xl:ml-11 2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 ml-23
                                2xl:-mt-5 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4">
                                        <h1 className="text-3xl font-bold 2xl:w-120
                                        2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl
                                        sm:text-3xl">
                                            {data.title}
                                        </h1>
    
                                        <p className="text-sm 2xl:text-2xl ml-1">
                                            {data.description}
                                        </p>
                                        <div >
                                        <a
                                            href={data.link}
                                            className="primary-button-cat inline-block text-center
                                            2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 sm:mt-12 mt-65
                                            2xl:text-2xl
                                            2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 -ml-3"
                                        >
                                            Ver más
                                        </a>
                                        </div>
                                </div>
    
    
                                <div className="order-1 sm:order-2">
                                    <div>
                                        <img className=" w-150 h-50 sm:scale-105 -mt-70 ml-3 rounded-4xl
                                        2xl:w-600 2xl:h-123 2xl:mt-0 2xl:-ml-11
                                        xl:w-200 xl:h-auto xl:mt-0 xl:-ml-11
                                        lg:w-100 lg:h-60 lg:mt-0 lg:-ml-20
                                        md:w-100 md:h-60 md:mt-0 md:-ml-20
                                        sm:w-100 sm:h-60 sm:mt-0 sm:-ml-20" src={data.image} alt=""/>
                                    </div>    
                                </div>    
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;