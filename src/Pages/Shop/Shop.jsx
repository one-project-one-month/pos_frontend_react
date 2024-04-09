import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Editform from './Editform';
import Deleteform from './Deleteform';

const Shop = () => {
  const [shopName, setShopName] = useState('');
  const [datas,setDatas] = useState ([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search');
  const navigate = useNavigate();
  const [isEdit,setIsEdit] = useState(false);
  const [currentId,setCurrentId] = useState(null);
  const [shop, setShop] = useState({
    shopCode: "",
    shopName :'',
    mobileNo : '',
    address : ''
  });
  const [isDelete,setIsDelete] = useState(false);

  const searchHandler = () => {
    navigate('/shop/?search='+ shopName)
  }

  const fetchData = async() => {
    try {
      const url = `http://localhost:3000/shops${search?`?q=${search}`: ''}`;
      const {data} = await axios.get(url)
      setDatas(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [search])

  const editHandler = (index,id) => {
    setIsEdit(true)
    setShop({
      shopCode :datas[index].shopCode,
      shopName :datas[index].shopName,
      mobileNo :datas[index].mobileNo,
      address : datas[index].address
    })
    setCurrentId(id)
  }

  const changeHandler = (e) => {
    const {name,value} = e
    setShop(prevShop => ({
      ...prevShop,
      [name]: value
  }))
  };

  const discardChanges = () => {
    setIsEdit(false);
    setIsDelete(false);
  };

  const deleteHandler = (id) => {
    setIsDelete(true)
    setCurrentId(id)
  }

  const submitHandler = async(e) => {
    e.preventDefault()
    try {
      const postData = {id:currentId,...shop}
      const res = await axios.patch(`http://localhost:3000/shops/${currentId}`,postData);
      console.log(res);
      if(res.status === 200) {
        setIsEdit(false)
        setDatas(prevDatas => prevDatas.map(item => {
          if (item.id === currentId) {
              return { ...item, ...shop };
          }
          return item;
      }));
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  const deleteShop = async() => {
    try {
      const res = await axios.delete(`http://localhost:3000/shops/${currentId}`);
      console.log(res);
      if(res.status === 200) {
        setIsDelete(false)
        setDatas(prevDatas => prevDatas.filter(shop => shop.id !== currentId));
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <div className='bg-white border-b-2 border-gray-200'>
        <ul className='flex justify-between items-center p-3 mx-auto'>
          <li className='w-full'>
            <form className="flex items-center max-w-sm ">   
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search shop name" required value={shopName} onChange={(e)=>setShopName(e.target.value)}/>
              </div>
              <button type="button" className="p-2.5 ms-2 text-sm font-medium text-blue-500 bg-white rounded-lg border border-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={searchHandler}>
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search</span>
              </button>
            </form>
          </li>
          <li className='w-full text-right'>
            <Link to={'/general/shops/newshop'} className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg  hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Add New Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className='bg-gray-50 h-[100vh] p-5'>
        <div className='max-w-6xl mx-auto flex items-center flex-wrap gap-5'>
        {
          datas && datas.map((data,i) => (
            <div key={data.id} className='bg-white border border-gray-200 rounded-md w-[280px] px-4 py-6 space-y-3'>
              <div className='flex items-center justify-between'>
                <p className='font-bold text-base'>{data.shopName}</p>
                <div className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500 cursor-pointer" onClick={()=>editHandler(i,data.id)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500 cursor-pointer" onClick={()=> deleteHandler(data.id)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
              </div>
              <span className='text-sm'>({data.shopCode})</span>
              <p className='text-sm font-light text-gray-500'>{data.address}</p>
              <p className='text-sm'>{data.mobileNo}</p>
            </div>
          ))
        }
        </div>
      </div>
     {isEdit && <Editform newShopCode={shop.shopCode} newShopName={shop.shopName} newShopmobileNo={shop.mobileNo} newShopAddress={shop.address} changeHandler={changeHandler} discardChanges={discardChanges} submitHandler={submitHandler}/>
     }
     {isDelete && <Deleteform discardChanges={discardChanges} deleteShop={deleteShop} />
     }
    </div>
  )
}

export default Shop
