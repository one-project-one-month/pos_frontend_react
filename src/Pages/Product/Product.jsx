import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList } from '../../redux/ProductsService/authSlice';
import Pagination from "./Pagination";
import productDb from "../../db/db.json";
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";

//Animate
import {
  addCatFormOn,
  exportSettingOn,
  pageOn,
  setPageNum,
} from "../../redux/ProductsService/animateSlice";

//icons
import { RiAddLine } from "react-icons/ri";
import { TiArrowSortedDown } from 'react-icons/ti';
import { PiExportThin } from 'react-icons/pi';
import { MdOutlineLocalPrintshop } from "react-icons/md";

const Product = () => {
  const { products } = productDb;
  const { addCatForm, page, exportSet, pageNum } = useSelector(state => state.animateSlice);
  const dispatch = useDispatch();

  const pageCount = [7, 10, 20, 50, 70, 100];
  const navigate = useNavigate();

  //fetch data using react useQuery 
  const { isLoading, isError, data } = useQuery('products', async () => {
    //simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return products;
  });


  // Dispatch the fetched data directly within useQuery
  if (!isLoading && data) {
    dispatch(setProductList(data));
  }
  if (isError) return <div>Error fetching data</div>;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  
  const PrintTable = () => {
    dispatch(exportSettingOn({ exportSet: !exportSet }));

    navigate("/printtable");
};


  return (

    <div className='flex flex-col absolute gap-3 right-2 w-[80%] top-[70px] h-auto justify-between items-start p-2 rounded-md bg-[#312d4b]'>
      <div className='flex  justify-between w-full '>


    <div className='flex flex-col gap-3 right-10 w-full top-[50px] h-auto justify-between items-start p-2 rounded-md bg-[#312d4b]'>

      <div className="   flex justify-between items-center w-full h-auto p-1 ">

        <div className=' border-2 px-2  border-[#76728e] flex justify-center items-center rounded-md w-[20%] h-[40px]'>
          <input
            placeholder="Search Category"
            className=" outline-none rounded-md bg-transparent w-full h-full "
            type="text"
            name=""
            id=""
          />

        </div>

        <div className=" relative flex justify-between text-[#d4d4d4] items-center w-[40%] h-[45px] p-1 ">
          <>
            <div
              onClick={() => {
                dispatch(pageOn({ page: !page }));
              }}
              className=" text-[#d4d4d4] cursor-pointer flex justify-around items-center rounded w-[15%] h-full border border-[#76728e] "
            >
              <p>{pageNum}</p>
              <TiArrowSortedDown
                className=" transition-all text-lg text-[#d4d4d4] "
                style={{
                  rotate: page === true ? "360deg" : "270deg",
                }}
              />
            </div>

            <div
              onClick={() => {
                dispatch(
                  exportSettingOn({ exportSet: !exportSet })
                );
              }}
              className=" flex justify-evenly tracking-wider items-center text-[#6c6d7b] font-medium  bg-[#3f3c57] cursor-pointer w-[30%] h-full rounded "
            >
              <PiExportThin className=" text-lg " />

              <p className=" text-sm  ">EXPORT</p>

              <TiArrowSortedDown
                className=" transition-all text-lg "
                style={{
                  rotate:
                    exportSet === true
                      ? "360deg"
                      : "270deg",
                }}
              />
            </div>
            <div
              onClick={() =>
                dispatch(
                  addCatFormOn({ addCatForm: !addCatForm })
                )
              }
              className=" flex justify-between px-3 items-center  bg-[#9055fd] cursor-pointer w-[40%] h-full rounded "
            >
              <RiAddLine className=" text-lg " />
              <p className=" font-semibold text-[15px] tracking-wide ">
                ADD CATEGORY
              </p>
            </div>

          </>

          {/* Page Count  */}
          <div
            style={{
              visibility: page === true ? "visible" : "collapse",
            }}
            className=" shadow-lg   flex flex-col justify-center items-center gap-3 absolute w-[15%] h-auto  rounded-md bg-[#312d4b]  top-[100%] "
          >
            {pageCount.map((num) => {
              return (
                <p
                  style={{
                    backgroundColor:
                      num === pageNum
                        ? "#16b1ff"
                        : "transparent",
                  }}
                  onClick={() => {
                    dispatch(setPageNum({ pageNum: num }));
                    dispatch(pageOn({ page: !page }));
                  }}
                  className=" p-2 rounded w-full justify-center text-center cursor-pointer "
                  key={num}
                >
                  {" "}
                  {num}{" "}
                </p>
              );
            })}
          </div>
          {/* Export  */}
          <div
            style={{
              visibility:
                exportSet === true ? "visible" : "collapse",
            }}
            className="  flex flex-col justify-center items-center gap-3 absolute shadow-lg w-[25%] h-[150px] rounded bg-[#312d4b]  left-[25%] top-[100%] "
          >
            <div className=" cursor-pointer gap-1 w-full justify-start items-center flex p-2 rounded text-[#6c6d7b] ">
              <MdOutlineLocalPrintshop className=" text-lg " />
              <p
                onClick={PrintTable}
                className=" cursor-pointer text-lg "
              >
                Print
              </p>
              {/* Hidden printable content */}
            </div>
          </div>

        </div>
      </div>
      {/**Table */}
      <div className="flex w-[100%] justify-between items-center">
        <div id="catListTable" className="w-[100%] text-sm text-gray-500">
          <table className=" w-[100%] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                      className="pl-10 font-medium text-blue-600 dark:text-blue-500 hover:underline"
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

    </div>
    </div>
  );
};

export default Product;
