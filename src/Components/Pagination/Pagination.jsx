/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Pagination = ({setCurrentPage,itemPerPage,currentPage,currentIndex,staffs}) => {

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [miniPageNumberLimit, setMiniPageNumberLimit] = useState(0);
    const pages = [];


    for (let i = 1; i <= Math.ceil(staffs?.length / itemPerPage); i++) {
        pages.push(i);
      }

      
    const pageClick = (e) => {
        setCurrentPage(Number(e.target.id));
      };
    
      const prevClick = () => {
        setCurrentPage((prev) => prev - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setMiniPageNumberLimit(miniPageNumberLimit - pageNumberLimit);
        }
      };
      const nextClick = () => {
        setCurrentPage((prev) => prev + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setMiniPageNumberLimit(miniPageNumberLimit + pageNumberLimit);
        }
      };
  return (
    <>
        <div className={`${currentIndex?.length=== 0 ? 'hidden':"flex items-center justify-between bg-[#312d4b] w-[100%] h-[50px] mt-4 px-6"}`}>
        <h2 className="font-semibold text-[#d4d4d4e6] ">Showing <span className="font-bold text-xl text-[#d4d4d4]">{currentIndex?.length}</span> entries</h2>
            <div className="pagination">
                <button
                    type="button"
                    className="py-1 px-3 mr-1 cursor-pointer rounded-sm bg-black text-white dark:bg-white dark:text-black"
                    onClick={prevClick}
                    disabled={currentPage === pages[0] ? true : false}
                >
                    Prev
                </button>
            {pages.map((p, index) => {
                if (p < maxPageNumberLimit + 1 && p > miniPageNumberLimit) {
                return (
                    <button
                    type="button"
                    className={
                        currentPage === p
                        ? " py-1 mr-1 w-[30px] cursor-pointer rounded-sm bg-[#212121] text-[#d4d4d4]"
                        : "py-1 w-[30px]  cursor-pointer rounded-sm bg-black text-[#d4d4d4] dark:bg-white dark:text-black mr-1"
                    }
                    key={index}
                    id={p}
                    onClick={pageClick}
                    >
                    {p}
                    </button>
                );
                } else {
                return null;
                }
            })}
            <button
                type="button"
                className="py-1 px-3  mr-1 cursor-pointer rounded-sm bg-black text-white dark:bg-white dark:text-black"
                onClick={nextClick}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
                Next
            </button>
            </div>
        </div>
    </>
  )
}

export default Pagination