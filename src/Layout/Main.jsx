// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
const Main = () => {
  return (
    <div className='flex h-svh w-svw overflow-hidden'>
      <Sidebar />
      <div className='overflow-y-scroll w-[100%]'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Main