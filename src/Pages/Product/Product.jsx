import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector
import { setProductList } from '../../redux/ProductsService/authSlice';
import Pagination from "./Pagination";
import productDb from "../../db/db.json";

//Animate
import {
  addCatFormOn,
  exportSettingOn,
} from "../../redux/ProductsService/animateSlice";

//icons
import { PiExportThin } from "react-icons/pi";
import { RiAddLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

const Product = () => {

  const {products} = productDb; //use dummy data for testing
  const { productList} = useSelector(state => state.authSlice); // Using useSelector to access Redux state
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

  return (
    <div className='flex flex-col gap-3 mt-24 right-10 w-[75%] top-[50px] h-auto justify-between items-start p-2 rounded-md bg-[#312d4b]'>
      <div className='flex'>
      <div className="border-2 px-2 mx-5 border-[#76728e] flex justify-center items-center rounded-md w-[20%] h-[40px] ">
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
        className=" flex justify-between px-3 items-center  bg-[#9055fd] cursor-pointer w-[40%] h-full rounded "
        >
      <RiAddLine className=" text-lg " />
      <p className=" font-semibold text-[15px] tracking-wide ">
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
              {productList.map((product) => (
                <tr key={product.id}>
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
                  <td className="pl-4">{product.id}</td>
                  <td className="pl-7">{product.productCode}</td>
                  <td className="pl-7">{product.productName}</td>
                  <td className="pl-7">{product.price}</td>
                  <td className="pl-10">{product.productCategoryCode}</td>
                  <td className="px-6 py-4">
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
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
