import React from 'react'
import { PaginationSkeleton } from '../skeletons/InvoiceSkeleton'

const PaginationComponent = ({loading,slicedData,currentPage,totalPages,clickNext,clickPrev}) => {
  console.log(currentPage);
  console.log(totalPages);
  return (
    <div className="flex justify-end items-center gap-3">
    {loading ? (
        <PaginationSkeleton/>
    ) : (
    slicedData.length > 0 && <>
    <p className="text-sm text-gray-300">Page {currentPage + 1} of {totalPages}</p>
    <button className={`p-1 bg-transparent border border-gray-300 rounded-md
    ${currentPage !== 0 ? 'hover:bg-slate-600' : 'cursor-not-allowed'}`}onClick={clickPrev} 
    disabled={currentPage===0}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
    </button>
    <button className={`p-1 bg-transparent border border-gray-300 rounded-md
    ${currentPage+1 !== totalPages ? 'hover:bg-slate-600' : 'cursor-not-allowed '}`}
    onClick={clickNext} 
    disabled={currentPage===totalPages}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    </button>
    </>
    )}
    </div>
  )
}

export default PaginationComponent