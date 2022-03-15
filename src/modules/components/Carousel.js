import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styling = {
    maxWidth: '1100px',
    padding : "10px 60px 10px 60px",
    margin: "0 auto",
}
const MainCarousel = () => {
    return (
        
    <Carousel autoPlay infiniteLoop showThumbs={false} touch={true}>
        <div style={styling} >
            <img src="images/banner1.png" alt="carousel"/>
           
        </div>
        <div style={styling} >
            <img src="images/banner2.png" alt="carousel"/>
           
        </div>
    </Carousel>
   
    )
};

export default MainCarousel;