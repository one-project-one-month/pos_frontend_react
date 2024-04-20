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
import axios from "axios";
import { setCategoryList } from "../../redux/services/authSlice";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";

const Category = () => {
    const { page, exportSet, addCat, pageNum, addCatForm } = useSelector(
        (state) => state.animateSlice
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageCount = [7, 10, 20, 50, 70, 100];

    const { categoryList } = useSelector((state) => state.authSlice);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Set loading state to true
            try {
                const response = await axios.get("/src/db/db.json"); // Make the GET request
                dispatch(
                    setCategoryList({
                        categoryList: response.data.productCategories,
                    })
                );
            } catch (error) {
                console.error(error); // Handle errors
            } finally {
                setIsLoading(false); // Set loading state to false regardless of success or error
            }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array ensures fetching on mount

    const PrintTable = () => {
        dispatch(exportSettingOn({ exportSet: !exportSet }));

        navigate("/printtable");
    };

    return (
        <div className="p-2 rounded-md absolute top-[70px]  w-[80%] right-2 shadow-md bg-[#312d4b]">
            <div className="   flex justify-between items-center w-full h-auto p-1 ">
                <div className="  border-2 px-2  border-[#76728e] flex justify-center items-center rounded-md w-[20%] h-[40px] ">
                    <input
                        placeholder="Search Category"
                        className=" text-[#d4d4d4e7] outline-none rounded-md bg-transparent w-full h-full "
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className=" relative flex text-[#d4d4d4] justify-between items-center w-[40%] h-[45px] p-1 ">
                    <>
                        <div
                            onClick={() => {
                                dispatch(pageOn({ page: !page }));
                            }}
                            className=" text-[#d4d4d4] cursor-pointer flex justify-around items-center rounded w-[15%] h-full border border-[#76728e] "
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
                            <RiAddLine className=" text-lg text-[#d4d4d4] " />
                            <p className=" font-semibold text-[#d4d4d4] text-[15px] tracking-wide ">
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
                    {/* Page Count  */}

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

                    {/* Export  */}
                </div>
            </div>

            <table
                id="catListTable"
                className="w-full overflow-y-hidden text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#312d4b] dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="checkbox-all-search"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PRODUCTS CATEGORY CODE
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PRODUCTS CATEGORY NAME
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
                                className="bg-white border-b dark:bg-[#312d4b] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {catData.id}
                                </th>
                                <td className="px-6 py-4">
                                    {catData.productCategoryCode}
                                </td>
                                <td className="px-6 py-4">
                                    {catData.productCategoryName}
                                </td>

                                <td className="px-6 py-4">
                                    <a
                                        href="#"
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

            <div className="flex w-full justify-between py-3 flex-row mx-1">
                <div className="w-full justify-between md:w-1/2 px-2">
                    <div
                        className="text-[#d4d4d4] text-sm font-light"
                        role="status"
                        aria-live="polite"
                    >
                        Showing 0 to {categoryList.length} of{" "}
                        {categoryList.length} entries
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-2">
                    <div className="flex items-center justify-end">
                        <ul className="pagination text-[#d4d4d4] flex gap-3 list-none rounded-md">
                            <li className="page-item disabled cursor-not-allowed">
                                <a
                                    className="page-link px-1 py-2 rounded-l-md hover:bg-[#3f3c57] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#9055fd] disabled:opacity-50"
                                    href="#"
                                    aria-disabled="true"
                                    tabIndex="-1"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item disabled cursor-not-allowed">
                                <a
                                    className="page-link px-1 py-2 rounded-r-md hover:bg-[#3f3c57] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#9055fd] disabled:opacity-50"
                                    href="#"
                                    aria-disabled="true"
                                    tabIndex="-1"
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
