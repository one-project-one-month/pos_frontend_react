import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { exportSettingOn } from '../../redux/services/animateSlice';
import { RiAddLine } from 'react-icons/ri';
import {setProductList} from "../../redux/ProductsService/authSlice"


const ProductTable = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productList} = useSelector((state) => state.productSlice.productList);// product data in your Redux state
 

  return (
    <div className='w-full right-0 top-0 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
      
    </div>
  );
};

export default ProductTable;
