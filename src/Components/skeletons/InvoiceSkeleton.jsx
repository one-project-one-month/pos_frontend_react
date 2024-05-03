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