import { useState } from 'react';

const usePagination = (filteredData,itemsPerPage) => {

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = filteredData.length < 8 ? 1 : Math.floor(filteredData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const slicedData = filteredData.slice(startIndex, endIndex);

  const clickNext = () => {
   if(currentPage+1 !== totalPages){
    setCurrentPage(prevPage => prevPage + 1)
   }
};

const clickPrev = () => {
    setCurrentPage(prevPage => prevPage -  1);
};

  return {totalPages,currentPage,slicedData,setCurrentPage,clickNext,clickPrev}
}

export default usePagination