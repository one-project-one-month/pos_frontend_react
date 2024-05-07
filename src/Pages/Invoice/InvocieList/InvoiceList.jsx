import "../invoice.css";
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import InvoiceInput from "./InvoiceInput";
import { useSelector } from "react-redux";
import TableComponent from "./TableComponent";
import PaginationComponent from "../../../Components/Pagination/PaginationComponent";
import usePagination from "../../../Hooks/usePagination";
import DateRangePickers from "./DateRangePicker";

const InvoiceList = () => {
    const [click,setClick] = useState (false)

    const { bgColor} = useSelector((state) => state.animateSlice);

    const [invoiceLists,setInvoiceLists] = useState ([])

    const [filteredData, setFilteredData] = useState([]);

    const [loading,setLoading] = useState(false);

    const [date, setDate] = useState([
        {
          startDate: new Date('January 1, 2024 00:00:00'),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const datRef = useRef(null)

      useEffect(() => {
        function handleClickOutside (event) {
           if(!datRef.current.contains(event.target)) {
            setClick(false)
           }
        }
        document.addEventListener('click',handleClickOutside)

        return () => {
        document.removeEventListener('click',handleClickOutside)
        }

      }, [])

      const fetchData = async () => {
      const startDateString = date[0].startDate;
      const endDateString = date[0].endDate;
      try {
        setLoading(true);
        const response = await axios.get(`https://pos-frontend-next-ruby.vercel.app/api/v1/sale-invoices?start=${startDateString}&end=${endDateString}`);
        const { data: { data: { saleInvoices },result} } = response;
        setInvoiceLists(saleInvoices);
        setFilteredData(saleInvoices);
        setCurrentPage(0)
        if(result > 0) {
            setClick(false)
            setLoading(false)
        }
    } catch (error) {
        console.error(error);
    } 
    };

      useEffect(()=>{
        fetchData()
      },[date])

    const itemsPerPage = 8

    const{totalPages,currentPage,slicedData,setCurrentPage,clickNext,clickPrev} = usePagination(filteredData,itemsPerPage)

    return (
        <section className="absolute h-full w-[80%] right-2 top-[70px]">
            <div 
             style={{
               background : bgColor
              }}
            className="flex gap-3 rounded-md h-[100vh] p-5">
                <div className="rounded-md w-full h-fit space-y-6">
                   <h3 className="text-2xl font-medium text-gray-300">Sale Invoices List</h3>
                   <ul className='flex justify-between mx-auto'>

                    <InvoiceInput invoiceLists={invoiceLists} setFilteredData ={setFilteredData} setCurrentPage={setCurrentPage} loading={loading} /> 
                
                    <DateRangePickers click={click} setClick={setClick} loading={loading} date={date} setDate={setDate} datRef={datRef}/>

                   </ul>
                
                   <TableComponent loading={loading} slicedData={slicedData}/>

                   <PaginationComponent loading={loading} slicedData={slicedData} currentPage={currentPage} totalPages={totalPages} clickNext={clickNext} clickPrev={clickPrev}/>
                </div>
            </div>
        </section>
    );
};

export default InvoiceList;