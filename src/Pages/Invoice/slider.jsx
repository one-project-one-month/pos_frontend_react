import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './invoice.css'

const NextArrow = (props) => {
  const {onClick} = props
  return(
    <div onClick={onClick}>
      <button className='absolute top-[0px] -right-[40px] bg-white z-40 w-8 h-8 rounded-full 
      flex items-center justify-center g-white shadow-[-1px_-1px_10px_rgb(0,0,0,0.3)] hover:bg-blue-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="blue" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const {onClick} = props
  return(
    <div onClick={onClick}>
      <button className='absolute top-[0px] -left-[40px] bg-white z-40 w-8 h-8 rounded-full flex items-center justify-center g-white shadow-[-1px_-1px_10px_rgb(0,0,0,0.3)] hover:bg-blue-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="blue" className="w-4 h-4 flex items-center justify-center">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    </div>
  )
}

function Carousel({categories}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow : <PrevArrow/>,
    nextArrow : <NextArrow/>
  };

  return (
    <div className="px-3 py-1 w-full mx-auto mt-6 mb-6" >
      <Slider {...settings}>
        {categories && categories.map((category)=>(
          <div key={category.id} className="p-2 text-sm font-semibold bg-white rounded-lg">
            <div>{category.productCategoryName}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
