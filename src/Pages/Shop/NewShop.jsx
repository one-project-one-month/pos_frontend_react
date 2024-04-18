
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {setIsSuccessful} from '../../redux/services/Shop/newshopsucces'

const NewShop = () => {
  const [shop, setShop] = useState({
    shopCode: "",
    shopName :'',
    mobileNo : '',
    address : ''
  });
  const [isClick,setIsClick] = useState (false);
  const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e;
        setShop((prevShop) => ({
            ...prevShop,
            [name]: value,
        }));
    };

    const navigate = useNavigate();
  
  const addHandler = async() => {
    setIsClick(true)
    const isFormCompleted = Object.values(shop).every(value => value)
    if(isFormCompleted) {
      const url = 'http://localhost:3000/shops'
      const response = await axios.post(url,shop)
      if(response.status == 201) {
        dispatch(setIsSuccessful(true))
        navigate('/general/shops')
    }
    }
  }

  return (
   <div className='bg-gray-50 h-full py-10 overflow-hidden absolute w-[80%] right-2 top-[70px]'>
    <form className="max-w-xl mx-auto bg-white p-5 rounded-lg border border-gray-100">
      <div className="w-full px-3 mb-6 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
           Shope Code
        </label>
        <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border ${isClick && !shop.shopCode? 'border-red-500' : 'border-gray-200'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-first-name" type="text" name='shopCode' value={shop.shopCode} onChange={(e)=> handleChange(e.target)} placeholder="Enter your shop code"/>
        {isClick && !shop.shopCode &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
      </div>
      <div className="w-full px-3 mb-6 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
           Shop Name
        </label>
        <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border ${isClick && !shop.shopName? 'border-red-500' : 'border-gray-200'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-first-name" type="text" name='shopName' value={shop.shopName} onChange={(e)=> handleChange(e.target)} placeholder="Enter your shop name"/>
        {isClick && !shop.shopName &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
      </div>
      <div className="w-full px-3 mb-6 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Mobile Number
        </label>
        <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border ${isClick && !shop.shopName? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-last-name" type="text" name='mobileNo' value={shop.mobileNo} onChange={(e)=> handleChange(e.target)}  placeholder="Enter your mobile number"/>
        {isClick && !shop.mobileNo  &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
      </div>
      <div className="w-full px-3 mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Address
        </label>
        <textarea className={`appearance-none block w-full bg-gray-50 text-gray-700 border ${isClick && !shop.shopName? 'border-red-500' : 'border-gray-200'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-last-name" rows='6' name='address' value={shop.address} onChange={(e)=> handleChange(e.target)} placeholder="Enter your address"/>
        {isClick && !shop.address &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
      </div>
    </form>
    <div className='max-w-xl mx-auto mt-6'>
      <button className="w-full py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg  hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={addHandler} >
        Add New Shop
      </button>
    </div>
   </div>
  )
}

export default NewShop;
