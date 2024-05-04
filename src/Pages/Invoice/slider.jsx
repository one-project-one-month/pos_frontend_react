import React, { useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './invoice.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SliderSkeleton } from "../../Components/skeletons/InvoiceSkeleton";

const NextArrow = (props) => {
  const {onClick} = props;
  return (
    <div>
      {onClick && (
        <button onClick={onClick} className='absolute top-[1px] -right-[20px] bg-white border
         border-gray-300  z-40 w-9 h-9 rounded-full slider
          flex items-center justify-center hover:bg-gray-100'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}

const PrevArrow = (props) => {
  const {onClick} = props
  return(
    <div>
      {onClick && (
        <button onClick={onClick} className='absolute top-[1px] left-[4px] bg-white border 
        border-gray-300 slider z-40 w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-4 h-4 flex items-center justify-center">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      ) }
    </div>
  )
}

function Carousel({item,loading}) {

  const [categories, setCategories] = useState(null);

  const navigate = useNavigate();

  const slideWidth = "auto"; 
  const slidesToShow = 5;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll:3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    variableWidth: true,
  };

  useEffect(() => {
    const url = 'https://pos-frontend-next-ruby.vercel.app/api/v1/product-categories'
    const fetchData = async() => {
        const {data:{data:{categories}}} = await axios.get(url)
        console.log(categories);
        setCategories(categories)
    }
    fetchData()
}, []);

  const clickHandler = (code) => {
    navigate('/invoice/add/' +code)
  }

  const clickALlHandler = () => {
    navigate('/invoice/add')
  }

  return (
    <div className="w-[96%] mx-auto mt-6 mb-6 -ml-2" >
      {loading? (
        <SliderSkeleton/>
      ):(
        <Slider {...settings}>
          <div className={`p-2 text-sm border border-gray-200
            ${!item? 'bg-blue-500 text-white' : 'bg-white text-black'}
            text-center rounded cursor-pointer`} 
            onClick={clickALlHandler}  style={{ width: slideWidth  }}>
            All
          </div>
          {categories && categories.map((category)=>(
              <div key={category.productCategoryId}
                className={`p-2 text-sm border border-gray-200 text-center font-semibold rounded cursor-pointer
                ${category.productCategoryCode === item ? 'bg-blue-500 text-white' :'bg-white'}`} 
                onClick={()=>clickHandler(category.productCategoryCode)}>
                {category.productCategoryName}
              </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Carousel;
