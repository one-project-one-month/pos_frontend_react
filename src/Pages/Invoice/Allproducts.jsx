import React from 'react'
import { useState } from 'react';
import { PaginationSkeleton,AllProductsSkeleton } from "../../Components/skeletons/InvoiceSkeleton";

const Allproducts = ({datas,loading,addToOrder}) => {

  const handleClick = (data) => {
    addToOrder(data);
};

const itemsPerPage = 12

const [currentPage, setCurrentPage] = useState(0);

const totalPages = Math.floor(datas.length / itemsPerPage);

const clickNext = () => {
    setCurrentPage(prevPage =>prevPage + 1);
};

const clickPrev = () => {
    setCurrentPage(prevPage => prevPage -  1);
};

const startIndex = currentPage * itemsPerPage;

const endIndex = startIndex + itemsPerPage;

const slicedData = datas.slice(startIndex, endIndex);

  return (
    <div className="w-full flex items-center gap-2 flex-wrap max-h-[600px]">
    {loading ? (
      <AllProductsSkeleton itemsPerPage={itemsPerPage}/>
    ) : (slicedData && slicedData.map((data) => (
    <div key={data.productId} className="w-[262px] p-2 bg-white space-y-3 border border-gray-200 rounded-md cursor-pointer" onClick={() => handleClick(data)}>
      <div className="font-semibold">{data.productName}</div>
      <div className="px-2 py-1 max-w-fit bg-teal-100 text-gray-700 text-xs rounded-sm">
        {data.productCode}
      </div>
      <div className="text-blue-400 font-semibold text-sm">${data.price}</div>
    </div>
    )
    ))}
    <div className="w-full flex justify-end items-center gap-3 mt-3">
      {loading ? (
          <PaginationSkeleton/>
      ) : (
      slicedData.length > 0 && <>
      <p className="text-sm">Page {currentPage + 1} of {totalPages + 1}</p>
      <button className={`p-1 bg-transparent text-white border border-gray-300 rounded-md
      ${currentPage !== 0 ? 'hover:bg-slate-100' : 'cursor-not-allowed'}`}onClick={clickPrev} 
      disabled={currentPage===0}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      </button>
      <button className={`p-1 bg-transparent text-white border border-gray-300 rounded-md
      ${currentPage !== totalPages ? 'hover:bg-slate-100' : 'cursor-not-allowed'}`}
      onClick={clickNext} 
      disabled={currentPage===totalPages}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      </button>
      </>
      )}
    </div>
</div>

  )
}

export default Allproducts