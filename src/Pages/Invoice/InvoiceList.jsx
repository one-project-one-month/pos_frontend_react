import "./invoice.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useRef } from "react";
import { InvoiceSkeleton,TableSkeleton,PaginationSkeleton } from "../../Components/skeletons/InvoiceSkeleton";
import { Link } from "react-router-dom";

const InvoiceList = () => {
    const [invoiceNumber,setInvoiceNumber] = useState ('')

    const [click,setClick] = useState (false)

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
      
      const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      };
     
      const currentStartDate = date[0].startDate.toLocaleDateString('en', options);
      const currentEndDate = date[0].endDate.toLocaleDateString('en', options);

      const dateRangeHandler = () => {
        setClick(!click)
      }

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

      const clearInput = ()=> {
        setInvoiceNumber('')
        setFilteredData(invoiceLists)
      }

    const itemsPerPage = 8

    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.floor(filteredData.length / itemsPerPage);

    const clickNext = () => {
        setCurrentPage(prevPage =>prevPage + 1);
    };

    const clickPrev = () => {
        setCurrentPage(prevPage => prevPage -  1);
    };

    const startIndex = currentPage * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const slicedData = filteredData.slice(startIndex, endIndex);

    const changeHandler =  (value) => {
    setInvoiceNumber(value);
    setCurrentPage(0)
    const filtered = invoiceLists.filter(item => item.voucherNo.includes(value));
    setFilteredData(filtered);
    };

    console.log(slicedData);

    return (
        <section className="absolute h-full w-[80%] right-2 top-[70px]">
            <div className="flex gap-3 rounded-md bg-gray-50 h-[100vh] p-5">
                <div className="rounded-md w-full h-fit space-y-6">
                   <h3 className="text-2xl font-medium">Sale Invoices List</h3>
                   <ul className='flex justify-between mx-auto'>
                    <li className='w-[30%]'>
                        <div className='flex items-center max-w-lg'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
                                {loading ? (
                                  <InvoiceSkeleton/>
                                ) : (
                                    <input
                                        type='text'
                                        id='simple-search'
                                        className='bg-white border border-gray-300 text-gray-900 
                                        text-sm rounded-lg focus:ring-blue-500
                                         focus:border-blue-500 block 
                                        w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                        placeholder='Search Invoice number here'
                                        required
                                        value={invoiceNumber} 
                                        onChange={(e)=>changeHandler(e.target.value)}
                                    />
                                )}
                                {(invoiceNumber && !loading) && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[13px] 
                                right-3 cursor-pointer" 
                                onClick={clearInput}
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                )}
                            </div>
                        </div>
                    </li>
                    <div className="min-w-[30%] relative" ref={datRef}>
                        <li>
                           {loading ? (
                            <InvoiceSkeleton/>
                           ) : (
                            <button className="bg-white border border-gray-300 text-gray-900 text-sm
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                            p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                            space-x-1 hover:border-blue-500"
                            onClick={dateRangeHandler}>
                                <span className="font-light text-gray-500">From :</span>
                                <span>{currentStartDate}</span>
                                <span> - </span>
                                <span className="font-light text-gray-500">To :</span>
                                <span>{currentEndDate}</span>
                            </button>
                           )}
                        </li>
                        {click && (
                            <li className="absolute right-0 top-[48px] z-50">          
                            <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            />
                            </li>
                        )}
                    </div>
                   </ul>
                   {loading ? (
                    <TableSkeleton/>
                   ) : (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700
                    dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Voucher Number</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Staff Code</th>
                        <th scope="col" className="px-6 py-3">Payment Amount</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {slicedData.length === 0 && <div className='absolute w-full text-center mt-5'>
                        Sorry,no data found
                    </div> }
                    {slicedData.length > 0 && slicedData.map((invoice) => (
                        <tr key={invoice.saleInvoiceId} className=" bg-transparent">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {invoice.saleInvoiceDetails[0].voucherNo}
                        </th>
                        <td className="px-6 py-4">{moment(invoice.dateTime).format("DD MMMM, YYYY, hh:mma")}</td>
                        <td className="px-6 py-4">{invoice.staffCode}</td>
                        <td className="px-6 py-4">{invoice.paymentAmount}</td>
                        <td className="px-6 py-4">
                            <Link to={'/invoice/preview'} className="bg-slate-200 p-2 text-gray-800 text-xs rounded">
                                Check Details
                            </Link>
                        </td>
                        </tr>
                    ))}
                    </tbody> 
                   </table>
                   )
                }
                   <div className="flex justify-end items-center gap-3">
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
            </div>
        </section>
    );
};

export default InvoiceList;
