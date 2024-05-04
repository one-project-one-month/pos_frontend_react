
import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-end text-white h-10 px-3 gap-3 ">
      <button
       className=' hover:bg-[#8578e6] text-white px-3 mt-2 rounded-xl text-[16px]'
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button 
          key={number}
          onClick={() => paginate(number)}
          style={{
            backgroundColor:currentPage === number ? '#8578e6' :''
          }}
          className='hover:bg-[#8578e6] text-white px-3 mt-2 rounded-xl text-[16px]'
        >
          {number}
        </button>
      ))}
      <button
        className='hover:bg-[#8578e6] text-white px-3 mt-2 rounded-xl text-[16px]'  
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;

