// eslint-disable-next-line no-unused-vars
import React from 'react'
import avator1 from '../../Images/avator1.jpg';
import { AiOutlinePlus } from "react-icons/ai";

const Staff = () => {
  return (
    <>
    <div className='absolute top-[70px] left-[290px]'>
        <button className='px-4 py-2 bg-[#9055fd] rounded-md flex items-center justify-between'><AiOutlinePlus size={20}/><span className='pl-2'>New Staff</span></button>
    </div>
    <div className='flex gap-3 absolute right-6 w-[70%] top-[50px] h-[90%] justify-center items-start p-2 rounded-md bg-[#312d4b] overflow-y-scroll overflow-hidden shadow-md shadow-slate-400' >
      <div className="card-container grid grid-cols-3 gap-4 mt-2">
        <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md">
          <div className="card-image">
            <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
          </div>
          <div className="card-title mt-2">
              <div className='p-1'>
                <label className='text-xl text-white'>Code:</label>
                <span className='text-[#9055fd] pl-6 ml-12 text-xl'>S001</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Name: </label>
                <span className='text-[#9055fd] pl-3  ml-6 text-xl'>Daw Mya Mya Soe</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>DateofBirth:</label>
                <span className='text-[#9055fd] ml-3 text-xl'>1985-07-15</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>MobileNo:</label>
                <span className='text-[#9055fd] ml-4 text-xl pl-2'>1234567890</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Gender:</label>
                <span className='text-[#9055fd] ml-6 text-xl pl-6'>Female</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Postition: </label>
                <span className='text-[#9055fd] ml-6 text-xl pl-2'>Sale Person</span>
              </div>
              <div className='p-1'>
                <label className='text-xl text-white'>Address: </label>
                <h2 className='text-[#9055fd]  text-xl mt-2'>123 Main St, Cityville, USA</h2>
              </div>
          </div>
        </div>
        <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md">
          <div className="card-image">
            <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
          </div>
          <div className="card-title mt-2">
              <div className='p-1'>
                <label className='text-xl text-white'>Code:</label>
                <span className='text-green-400 pl-6 ml-12 text-xl'>S001</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Name: </label>
                <span className='text-green-400 pl-3  ml-6 text-xl'>Daw Mya Mya Soe</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>DateofBirth:</label>
                <span className='text-green-400 ml-3 text-xl'>1985-07-15</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>MobileNo:</label>
                <span className='text-green-400 ml-4 text-xl pl-2'>1234567890</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Gender:</label>
                <span className='text-green-400 ml-6 text-xl pl-6'>Female</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Postition: </label>
                <span className='text-green-400 ml-6 text-xl pl-2'>Sale Person</span>
              </div>
              <div className='p-1'>
                <label className='text-xl text-white'>Address: </label>
                <h2 className='text-green-400  text-xl mt-2'>123 Main St, Cityville, USA</h2>
              </div>
          </div>
        </div>
        <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md">
          <div className="card-image">
            <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
          </div>
          <div className="card-title mt-2">
              <div className='p-1'>
                <label className='text-xl text-white'>Code:</label>
                <span className='text-green-400 pl-6 ml-12 text-xl'>S001</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Name: </label>
                <span className='text-green-400 pl-3  ml-6 text-xl'>Daw Mya Mya Soe</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>DateofBirth:</label>
                <span className='text-green-400 ml-3 text-xl'>1985-07-15</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>MobileNo:</label>
                <span className='text-green-400 ml-4 text-xl pl-2'>1234567890</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Gender:</label>
                <span className='text-green-400 ml-6 text-xl pl-6'>Female</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Postition: </label>
                <span className='text-green-400 ml-6 text-xl pl-2'>Sale Person</span>
              </div>
              <div className='p-1'>
                <label className='text-xl text-white'>Address: </label>
                <h2 className='text-green-400  text-xl mt-2'>123 Main St, Cityville, USA</h2>
              </div>
          </div>
        </div>
        <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md">
          <div className="card-image">
            <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
          </div>
          <div className="card-title mt-2">
              <div className='p-1'>
                <label className='text-xl text-white'>Code:</label>
                <span className='text-green-400 pl-6 ml-12 text-xl'>S001</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Name: </label>
                <span className='text-green-400 pl-3  ml-6 text-xl'>Daw Mya Mya Soe</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>DateofBirth:</label>
                <span className='text-green-400 ml-3 text-xl'>1985-07-15</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>MobileNo:</label>
                <span className='text-green-400 ml-4 text-xl pl-2'>1234567890</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Gender:</label>
                <span className='text-green-400 ml-6 text-xl pl-6'>Female</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Postition: </label>
                <span className='text-green-400 ml-6 text-xl pl-2'>Sale Person</span>
              </div>
              <div className='p-1'>
                <label className='text-xl text-white'>Address: </label>
                <h2 className='text-green-400  text-xl mt-2'>123 Main St, Cityville, USA</h2>
              </div>
          </div>
        </div>
        <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md">
          <div className="card-image">
            <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
          </div>
          <div className="card-title mt-2">
              <div className='p-1'>
                <label className='text-xl text-white'>Code:</label>
                <span className='text-green-400 pl-6 ml-12 text-xl'>S001</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Name: </label>
                <span className='text-green-400 pl-3  ml-6 text-xl'>Daw Mya Mya Soe</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>DateofBirth:</label>
                <span className='text-green-400 ml-3 text-xl'>1985-07-15</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>MobileNo:</label>
                <span className='text-green-400 ml-4 text-xl pl-2'>1234567890</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Gender:</label>
                <span className='text-green-400 ml-6 text-xl pl-6'>Female</span>
              </div>
              <div  className='p-1'>
                <label className='text-xl text-white'>Postition: </label>
                <span className='text-green-400 ml-6 text-xl pl-2'>Sale Person</span>
              </div>
              <div className='p-1'>
                <label className='text-xl text-white'>Address: </label>
                <h2 className='text-green-400  text-xl mt-2'>123 Main St, Cityville, USA</h2>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Staff