import React from 'react';
import { useState } from 'react';
import { PaginationSkeleton, AllProductsSkeleton } from "../../Components/skeletons/InvoiceSkeleton";
import usePagination from '../../Hooks/usePagination';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
import { FaPlus } from 'react-icons/fa';

const Allproducts = ({ datas, loading, addToOrder }) => {
    const handleClick = (data) => {
        addToOrder(data);
    };

      
    const itemsPerPage = 12;

    const { totalPages, currentPage, slicedData, clickNext, clickPrev } = usePagination(datas, itemsPerPage);

    return (
        <div className="w-full flex items-center gap-2 flex-wrap max-h-[600px]">
            {loading ? (
                <AllProductsSkeleton itemsPerPage={itemsPerPage} />
            ) : (slicedData && slicedData.map((data) => (
                <div key={data.productId} className="w-[262px] p-2 bg-gray-700 space-y-3 border border-gray-700 rounded-md cursor-pointer" >
                    <div className="flex font-semibold text-gray-200">
                        {data.productName} 
                        <span className='flex bg-[#2b2827] ml-5 px-2 py-2 text-white rounded-md h-8   w-[35%] pointer hover:bg-[#a59991] ' onClick={() => handleClick(data)} >
                          Add <FaPlus className='ml-3 w-4 h-4'/></span>
                    </div>
                    <div className="px-2 py-1 max-w-fit bg-slate-300 text-gray-700 text-xs rounded-sm">
                        {data.productCode}
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">${data.price}</div>
                </div>
            )
            ))}
            <div className="w-full flex justify-end items-center gap-3 mt-3">
                {loading ? (
                    <PaginationSkeleton />
                ) : (
                    <PaginationComponent loading={loading} slicedData={datas} currentPage={currentPage} totalPages={totalPages} clickNext={clickNext} clickPrev={clickPrev} />
                )}
            </div>
        </div>
    );
}

export default Allproducts;
