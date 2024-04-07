// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import avator1 from '../../Images/avator1.jpg';
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { Link } from 'react-router-dom';

const Staff = () => {
  const [staffs, setStaffs] = useState([]);

  const getData = async() =>{
      await axios.get("/src/db/db.json")
      .then(res =>{
        setStaffs(res.data.staffs)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className= 'absolute right-0 top-[50px] w-[80%] h-[90%] bg-[#28243d] rounded-br-md  p-2 overflow-x-hidden overflow-y-scroll'>
    <div className='m-2 flex justify-between items-center'>
      <h2 className='text-white lg:text-3xl md:text-2xl sm:text-xl px-4 font-bold'>All Staff Lists</h2>
        <Link to='/general/add' className='w-[120px] py-2 flex justify-center items-center bg-[#9055fd] rounded-md shadow-md shadow-slate-300 text-lg'><AiOutlinePlus size={20}/><span>New Staff</span></Link>
    </div>
    <div className='flex items-center justify-center'>
      <div className="card-container grid lg:grid-cols-3 gap-6 mt-4 md:grid-cols-2 sm:grid-cols-1">
        {
          staffs.map((s)=>{
            return(
              <div className="card border w-[320px] h-[100%] cursor-pointer flex flex-col items-center p-2 rounded-md" key={s.id}>
              <div className="card-image">
                <img src={avator1} alt="staff_image"  className='w-[80px] h-[80px] rounded-full object-cover object-center'/>
              </div>
              <div className="card-title mt-2">
                  <div className='p-1'>
                    <label className='text-xl text-white'>Code:</label>
                    <span className='text-[#9055fd] pl-6 ml-12 text-xl'>{s.staffCode}</span>
                  </div>
                  <div  className='p-1'>
                    <label className='text-xl text-white'>Name: </label>
                    <span className='text-[#9055fd] pl-6  ml-6 text-xl'>{s.staffName}</span>
                  </div>
                  <div  className='p-1'>
                    <label className='text-xl text-white'>DateofBirth:</label>
                    <span className='text-[#9055fd] ml-3 text-xl'>{s.dateOfBirth}</span>
                  </div>
                  <div  className='p-1'>
                    <label className='text-xl text-white'>MobileNo:</label>
                    <span className='text-[#9055fd] ml-4 text-xl pl-2'>{s.mobileNo}</span>
                  </div>
                  <div  className='p-1'>
                    <label className='text-xl text-white'>Gender:</label>
                    <span className='text-[#9055fd] ml-6 text-xl pl-6'>{s.gender}</span>
                  </div>
                  <div  className='p-1'>
                    <label className='text-xl text-white'>Postition: </label>
                    <span className='text-[#9055fd] ml-6 text-xl pl-2'>{s.position}</span>
                  </div>
                  <div className='p-1'>
                    <label className='text-xl text-white'>Address: </label>
                    <h2 className='text-[#9055fd]  text-xl mt-2'>{s.address}</h2>
                  </div>
              </div>
            </div>
            )
          })
        }
      </div>     
    </div>
    </div>
    </>
  )
}

export default Staff