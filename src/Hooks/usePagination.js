import React from 'react'
import { useState } from 'react';

const usePagination = (filteredData,itemsPerPage) => {

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.floor(filteredData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const slicedData = filteredData.slice(startIndex, endIndex);

  const clickNext = () => {
    setCurrentPage(prevPage =>prevPage + 1);
};

const clickPrev = () => {
    setCurrentPage(prevPage => prevPage -  1);
};

  return {totalPages,currentPage,slicedData,setCurrentPage,clickNext,clickPrev}
}

export default usePagination