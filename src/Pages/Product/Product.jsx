import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { setProductList } from '../../redux/ProductsService/authSlice';
import Pagination from "./Pagination";
import productDb from "../../db/db.json";

//Animate
import {
  addCatFormOn,
  exportSettingOn,
} from "../../redux/ProductsService/animateSlice";

//icons
import { RiAddLine } from "react-icons/ri";
const Product = () => {
  const { products } = productDb;
  const { addCatForm } = useSelector(state => state.authSlice);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        dispatch(setProductList(products));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product list:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, products]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Calculate the index of the first and last products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Slice the products array to get the products for the current page
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='flex flex-col gap-3 right-10 w-[100%] top-[50px] h-auto justify-between items-start p-2 rounded-md bg-[#312d4b]'>
      <div className='flex  justify-between w-full '>

        <div className="border-2  px-2 mx-5 border-[#76728e] flex justify-center items-center rounded-md  h-[40px] ">
          <input
            placeholder="Search Category"
            className="outline-none rounded-md bg-transparent w-full h-full"
            type="text"
          />
        </div>

        <div
          onClick={() =>
            dispatch(addCatFormOn({ addCatForm: !addCatForm }))
          }
          className=" flex justify-between px-3 items-center  bg-[#9055fd] cursor-pointer  h-auto rounded "
        >
          <RiAddLine className=" text-lg " />
          <p className="flex font-semibold text-[15px] tracking-wide  ">
            ADD CATEGORY
          </p>
        </div>
      </div>

      <div className="flex w-[100%] justify-between items-center">
        <div id="catListTable" className="w-full text-sm text-gray-500">
          <table className=" w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <thead>
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="p-4">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  productCategoryCode
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className='border-b border-gray-200'>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="pl-5">{product.id}</td>
                  <td className="pl-14">{product.productCode}</td>
                  <td className="pl-14">{product.productName}</td>
                  <td className="pl-10">{product.price}</td>
                  <td className="pl-16">{product.productCategoryCode}</td>
                  <td className="px-6 pl-3 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
