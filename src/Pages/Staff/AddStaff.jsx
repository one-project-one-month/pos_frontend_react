// eslint-disable-next-line no-unused-vars
import React from 'react'

const AddStaff = () => {
  return (
    <div className= 'absolute right-0 top-[50px] w-[80%] h-[90%] bg-[#28243d] rounded-br-md  p-2'>
      <form className='w-[600px] h-[550px] border border-white mx-auto mt-8 py-4 rounded-lg shadow-md shadow-slate-300'>
        <div className="logo mt-2">
          <h2 className='text-white text-center text-3xl font-bold'>
            Create A Staff
          </h2>
        </div>
          <div className='flex flex-col m-4 mt-2'>
            <label className='text-white text-xl'>Name:</label>
            <input type="text" placeholder='Name' className='w-[95%] mt-2  border-0 outline-none p-2 rounded-md'/>
          </div>
        <div className='flex justify-center items-center w-[100%] px-4'>
          <div className='flex flex-col w-[50%]'>
            <label className='text-white text-xl'>Date:</label>
            <input type="date" placeholder='Name' className='w-[90%] mt-2  border-0 outline-none p-2 rounded-md'/>
          </div>
          <div className='flex flex-col w-[50%]'>
            <label className='text-white text-xl'>MobileNo:</label>
            <input type="text" placeholder='mobileNo' className='w-[90%] mt-2  border-0 outline-none p-2 rounded-md'/>
          </div>
        </div>
        <div className='flex justify-center items-center w-[100%] px-4 mt-4'>
          <div className='w-[50%]'>
            <label className='text-white text-xl'>Gender:</label>
            <select className='text-xl w-[90%]  border-0 outline-none rounded-md px-2 py-1 mt-2'>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='w-[50%]'>
            <label className='text-white text-xl'>Position:</label>
            <select className='text-xl w-[90%] mt-2 border-0 outline-none rounded-md px-2 py-1'>
              <option value="">Select</option>
              <option value="manager">Manager</option>
              <option value="cashier">Cashier</option>
              <option value="saleperson">Sale Person</option>
              <option value="salehelper">Sale Helper</option>
              <option value="stockkeeper">Stockkeeper</option>
            </select>
          </div>
        </div>
        <div className='m-4 flex flex-col'>
          <label className='text-white text-xl'>Address:</label>
          <textarea className='w-[95%] mt-2  border-0 outline-none p-2 rounded-md h-[100px]' placeholder='Address'></textarea>
        </div>
        <div className='flex items-center justify-center my-4'>
          <input type="submit"  className='w-[60%] bg-blue-400 py-2 rounded-lg cursor-pointer border-0 outline-none'/>
        </div>
      </form>
    </div>
  )
}

export default AddStaff