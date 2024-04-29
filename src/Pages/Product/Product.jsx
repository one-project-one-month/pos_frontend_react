import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  addCatFormOn,
  exportSettingOn,
  pageOn,
  setPageNum,
} from "../../redux/services/animateSlice";
import { PiExportThin } from "react-icons/pi";
import { RiAddLine } from "react-icons/ri";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Product/Pagination";
import commerce from "../../../Commerce/commerce";

const Category = () => {
  const { page, exportSet, addCat, pageNum, addCatForm } = useSelector(
    (state) => state.animateSlice
  );

  const color = useSelector((state) => state.animateSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageCount = [7, 10, 20, 50, 70, 100];

  const [category, setCategory] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list({
        limit: pageNum,
      })
      .then((products) => {
        setCategory(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [pageNum]);

  const filteredCat = category;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(pageNum);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //pagination
  const indexOfLastProduct = currentPage * pageNum;
  const indexOfFirstProduct = indexOfLastProduct - pageNum;
  const categoryList = filteredCat?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const PrintTable = () => {
    dispatch(exportSettingOn({ exportSet: !exportSet }));

    navigate("/printtable");
  };

  return (
    <div
      style={{
        backgroundColor: color.bgColor,
      }}
      className="p-2 rounded-md absolute top-[70px]  w-[80%] right-2 shadow-md "
    >
      <div className="   flex justify-between items-center w-full h-auto p-1 ">
        <div
          style={{
            borderColor: color.cardBgColor,
          }}
          className="  border-2 px-2   flex justify-center items-center rounded-md w-[20%] h-[40px] "
        >
          <input
            style={{
              color: color.textColor,
            }}
            placeholder="Search Category"
            className="  outline-none rounded-md bg-transparent w-full h-full "
            type="text"
            name=""
            id=""
          />
        </div>
        <div
          style={{
            color: color.textColor,
          }}
          className=" relative flex  justify-between items-center w-[40%] h-[45px] p-1 "
        >
          <>
            <div
              onClick={() => {
                dispatch(pageOn({ page: !page }));
              }}
              style={{
                color: color.textColor,
              }}
              className="  cursor-pointer flex justify-around items-center rounded w-[15%] h-full border border-[#76728e] "
            >
              <p>{pageNum}</p>
              <TiArrowSortedDown
                className=" transition-all text-lg "
                style={{
                  rotate: page === true ? "360deg" : "270deg",
                }}
              />
            </div>

            <div
              onClick={() => {
                dispatch(exportSettingOn({ exportSet: !exportSet }));
              }}
              style={{
                color: color.textColor,
                backgroundColor: color.cardBgColor,
              }}
              className=" flex justify-evenly tracking-wider items-center  cursor-pointer w-[30%] h-full rounded "
            >
              <PiExportThin className=" text-lg " />

              <p className=" text-sm  ">EXPORT</p>

              <TiArrowSortedDown
                className=" transition-all text-lg "
                style={{
                  rotate: exportSet === true ? "360deg" : "270deg",
                }}
              />
            </div>

            <a
             target="_blank"
             href="https://dashboard.chec.io/products/add"
              style={{
                color: color.textColor,
                backgroundColor: color.cardBgColor,
              }}
              className=" flex justify-between px-3 items-center   cursor-pointer w-[40%] h-full rounded "
            >
              <RiAddLine
                style={{
                  color: color.textColor,
                  backgroundColor: color.cardBgColor,
                }}
                className=" text-lg text-[#d4d4d4] "
              />
              <p
                style={{
                  color: color.textColor,
                  backgroundColor: color.cardBgColor,
                }}
                className=" font-semibold text-[#d4d4d4] text-[15px] tracking-wide "
              >
                ADD PRODUCTS
              </p>
            </a>
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
                      num === pageNum ? "#16b1ff" : "transparent",
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
          {/* Page Count  */}

          {/* Export  */}
          <div
            style={{
              visibility: exportSet === true ? "visible" : "collapse",
            }}
            className="  flex flex-col justify-center items-center gap-3 absolute shadow-lg w-[25%] h-[150px] rounded bg-[#312d4b]  left-[25%] top-[100%] "
          >
            <div
              style={{
                color: color.textColor,
                backgroundColor: color.cardBgColor,
              }}
              className=" cursor-pointer gap-1 w-full justify-start items-center flex p-2 rounded  "
            >
              <MdOutlineLocalPrintshop className=" text-lg " />
              <p onClick={PrintTable} className=" cursor-pointer text-lg ">
                Print
              </p>
              {/* Hidden printable content */}
            </div>
          </div>

          {/* Export  */}
        </div>
      </div>

      <table
        style={{
          color: color.textColor,
          backgroundColor: color.cardBgColor,
        }}
        id="catListTable"
        className="w-full overflow-y-hidden text-sm text-left rtl:text-right "
      >
        <thead
          style={{
            color: color.textColor,
            backgroundColor: color.cardBgColor,
          }}
          className="text-xs text-gray-700 uppercase "
        >
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  style={{
                    color: color.textColor,
                    backgroundColor: color.cardBgColor,
                  }}
                  className="w-4 h-4 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS  CODE
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS  NAME
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS CATEGORY CODE
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryList?.map((catData) => {
            return (
              <tr
                key={catData.id}
                style={{
                  color: color.textColor,
                  backgroundColor: color.cardBgColor,
                }}
                className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      value={catData.id}
                      id="checkbox-table-search-1"
                      type="checkbox"
                      style={{
                        color: color.textColor,
                        backgroundColor: color.cardBgColor,
                      }}
                      className="w-4 h-4   border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  style={{
                    color: color.textColor,
                    backgroundColor: color.cardBgColor,
                  }}
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {catData.id}
                </th>
                <td className="px-6 py-4">{catData.sku}</td>
                <td className="px-6 py-4">{catData.name}</td>
                <td className="px-6 py-4">{catData.categories[0]?.id}</td>


                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    href={`https://dashboard.chec.io/products/${catData.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* Hidden printable content */}
      </table>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={category?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Category;
