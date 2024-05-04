import React from 'react'

export const InvoiceSkeleton = () => {
  return (
    <div className='rounded-lg bg-slate-200 h-10 w-full animate-pulse'></div>
  )
}

export const TableSkeleton = () => {
    return (
      <div className='rounded-lg bg-slate-200 h-[450px] w-full animate-pulse'></div>
    )
  }

export const PaginationSkeleton = () => {
    return (
      <div className='rounded-lg bg-slate-200 h-10 w-[150px] animate-pulse'></div>
    )
  }

export const AllProductsSkeleton = ({ itemsPerPage }) => {
    const slicedData = Array.from({ length: itemsPerPage }, (_, i) => i + 1);
  
    return (
      <>
        {slicedData &&
          slicedData.map((data) => (
            <div
              key={data}
              className="w-[262px] p-2 bg-slate-200 space-y-3 rounded-md animate-pulse"
            >
              <div className="font-semibold text-slate-200">gg</div>
              <div className="px-2 py-1 max-w-fit text-slate-200 text-xs rounded-sm">
                wp
              </div>
              <div className="font-semibold text-sm text-slate-200">ggwp</div>
            </div>
          ))}
      </>
    );
  };

export const SliderSkeleton = () => {
    return (
      <div className='w-full rounded-lg bg-slate-200 h-10 animate-pulse'></div>
    )
  }