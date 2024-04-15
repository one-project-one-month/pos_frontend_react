import "./invoice.css";
import { useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import axios from "axios"
import Carousel from "./slider";


const AddNewInvoice = () => {

    const [productName, setProductName] = useState("");
    const [datas, setDatas] = useState("");
    const [categories,setCategories] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchValue = params.get('search');
    const navigate = useNavigate();

    const isSuccessfull = useSelector((state) => state.newShopReducer.isSuccessful);

    const searchHandler = () => {
        navigate('/invoice/add?search=' + productName);
      };

      const fetchData = async (url, setData, successMessage, failureMessage) => {
        try {
            const { data } = await axios.get(url);
            setData(data);
            toast.success(successMessage);
        } catch (error) {
            console.error(error);
            toast.error(failureMessage);
        }
    };
    
    useEffect(() => {
        const url = `http://localhost:3000/products${searchValue ? `?q=${searchValue}` : ''}`;
        fetchData(url, setDatas, "Products fetched successfully!", "Failed to fetch products!");
    }, [searchValue]);
    
    useEffect(() => {
        const url = 'http://localhost:3000/productCategories';
        fetchData(url, setCategories, "Product categories fetched successfully!", "Failed to fetch product categories!");
    }, []);


    return (
       <div className="absolute h-full w-[80%] right-2 top-[70px]">
        <section className=" InvoiceSection flex gap-3 overflow-hidden rounded-md bg-gray-100 h-[100vh] p-5">
            <div className="rounded-md p-4 w-[75%] h-fit">    
                <ul className='flex justify-between items-center mx-auto'>
                    <li className='w-full'>
                        <form className='flex items-center max-w-lg'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
                                <input
                                type='text'
                                id='simple-search'
                                className='bg-white border border-gray-300 text-gray-900 text-sm
                                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3
                                p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Search all product here'
                                required
                                value={productName} 
                                onChange={(e) => setProductName(e.target.value)}
                                />
                                {productName && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-3 right-3" onClick={()=>setProductName('')}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>}
                            </div>
                            <button
                                type='button'
                                className='p-2.5 ms-2 text-sm font-medium text-blue-500 bg-white rounded-lg border border-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                onClick={searchHandler}
                            >
                                <svg
                                className='w-4 h-4'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'
                                >
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                /> 
                                </svg>  
                                <span className='sr-only'>Search</span>     
                            </button>
                        </form>
                    </li> 
                </ul> 
                {/* <div className="w-full mt-6 mb-10 flex items-center gap-5">
                  {categories && categories.map((category)=>(
                    <div key={category.id} className="bg-white px-3 py-2 text-sm rounded shadow">{category.productCategoryName}</div>
                  ))}
                </div> */}
                <div className="px-6">
                 <Carousel categories={categories}/>
                </div>
                {datas && <div>{datas[0]?.productName}</div>}
            </div>
            <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            className='w-[350px]'
            />

            <div className="InvoiceCard  flex rounded-md p-4 w-[25%] h-[200px] ">
                Button Group
            </div>
        </section>
       </div>
    );
};

export default AddNewInvoice;
