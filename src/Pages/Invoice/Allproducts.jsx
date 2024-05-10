import React from 'react';
import { useState } from 'react';
import { PaginationSkeleton, AllProductsSkeleton } from "../../Components/skeletons/InvoiceSkeleton";
import usePagination from '../../Hooks/usePagination';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Allproducts = ({ datas, loading, addToOrder }) => {
    const handleClick = (data) => {
        addToOrder(data);
    };
    
    const color = useSelector((state) => state.animateSlice)
      
    const itemsPerPage = 12;

    const { totalPages, currentPage, slicedData, clickNext, clickPrev } = usePagination(datas, itemsPerPage);

    return (
        <div className="w-full flex items-center gap-2 flex-wrap max-h-[600px]">
            {loading ? (
                <AllProductsSkeleton itemsPerPage={itemsPerPage} />
            ) : (slicedData && slicedData.map((data) => (
                <div key={data.productId} style={{
                  backgroundColor : color.cardBgColor,
                }} className="w-[262px] min-h-[130px] p-2 bg-gray-700 space-y-3 border border-gray-700 rounded-md " >
                    <div className="flex items-center justify-between text-xs text-gray-200">
                        <p className='bg-blue-400 px-2 py-1 rounded'>{data.productCode}</p>
                        <span className='flex bg-[#131211] text-xs px-2 py-2 text-white rounded-md h-8   w-[25%] pointer hover:bg-[#1c1c1c] cursor-pointer' onClick={() => handleClick(data)} >
                          Add <FaPlus className='ml-3 w-3 h-3'/></span>
                    </div>
                    <div className="font-semibold text-gray-200 text-sm">
                      {data.productName} 
                    </div>
                    <div className="font-semibold text-sm">${data.price}</div>
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
