import React from 'react';
import banner_1 from "../../../assets/banner/banner-1.jpg"
import banner_2 from "../../../assets/banner/banner-2.jpg"



const HomeCarousel = () => {
    return (
        <>
            <div class="carousel h-96">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner_1} alt="banner-1" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={banner_2} alt="banner-2" class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};



export default HomeCarousel;