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

const InvoiceList = () => {
    const [invoiceNumber,setInvoiceNumber] = useState ('')

    const [click,setClick] = useState (false)

    const [invoiceLists,setInvoiceLists] = useState ([])

    const [date, setDate] = useState([
        {
          startDate: new Date('January 1, 2024 00:00:00'),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

      const datRef = useRef(null)

      useEffect(() => {
        function handleClickOutside (event) {
            console.log(event.target);
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

      useEffect(()=>{
        const fetchData= async() => {
            const startDateString = date[0].startDate;
            const endDateString = date[0].endDate;
            const {data :{data :{saleInvoices}}} = await axios.get(`https://pos-frontend-next-ruby.vercel.app/api/v1/sale-invoices${date ? `?start=${startDateString}&end=${endDateString}`:''}`)
            setInvoiceLists(saleInvoices)
        }
        fetchData()
      },[date])

      const itemsPerPage = 8;
      const [pages,setPages] = useState(0)
      const [slicedData,setSlicedData] = useState ([])
      let totalPages= Math.floor(invoiceLists.length/itemsPerPage)

      useEffect(()=>{
        setSlicedData([...invoiceLists].slice(0,itemsPerPage))
      },[invoiceLists])

      const clickNext = () => {
        if(pages < totalPages) {
            const nextPage = pages + 1;
            setPages(nextPage);
            const startIndex = nextPage * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            setSlicedData([...invoiceLists].slice(startIndex,endIndex))
            }
      }

      const clickPrev = () => {
        if(pages > 0) {
            const prevPage = pages - 1;
            setPages(prevPage)
            const startIndex = prevPage * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            setSlicedData([...invoiceLists].slice(startIndex,endIndex)) 
        }
      }

    return (
        <section className="absolute h-full w-[80%] right-2 top-[70px]">
            <div className="flex gap-3 rounded-md bg-gray-50 h-[100vh] p-5">
                <div className="rounded-md w-full h-fit space-y-6">
                   <h3 className="text-2xl font-medium">Sale Invoices List</h3>
                   <ul className='flex justify-between mx-auto'>
                    <li className='w-[30%]'>
                        <form className='flex items-center max-w-lg'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
                                <input
                                type='text'
                                id='simple-search'
                                className='bg-white border border-gray-300 text-gray-900 text-sm
                                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3
                                p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Search Invoice number here'
                                required
                                value={invoiceNumber} 
                                onChange={(e) => setInvoiceNumber(e.target.value)}
                                />               
                                {invoiceNumber && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[13px] 
                                right-3 cursor-pointer" 
                                onClick={()=>setInvoiceNumber('')}
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                )}
                            </div>
                        </form>
                    </li>
                    <div className="w-[30%] relative" ref={datRef}>
                        <li>
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
                        </li>
                        {click && (
                            <li className="absolute right-0 top-[48px]">          
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
                   <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700
                    dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Voucher Number</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Staff Code</th>
                        <th scope="col" className="px-6 py-3">Payment Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {slicedData.map((invoice) => (
                        <tr key={invoice.saleInvoiceId} className=" bg-transparent">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {invoice.saleInvoiceDetails[0].voucherNo}
                        </th>
                        <td className="px-6 py-4">{moment(invoice.dateTime).format("DD MMMM, YYYY, hh:mma")}</td>
                        <td className="px-6 py-4">{invoice.staffCode}</td>
                        <td className="px-6 py-4">{invoice.paymentAmount}</td>
                        </tr>
                    ))}
                    </tbody> 
                   </table>
                   <div className="flex justify-end items-center gap-3">
                   <p className="text-sm">Page {pages + 1} of {totalPages + 1}</p>
                    <button className={`p-1 bg-transparent text-white border border-gray-300 rounded-md
                    ${pages !== 0 ? 'hover:bg-slate-100' : 'cursor-not-allowed'}`}onClick={clickPrev} 
                    disabled={pages===0}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    </button>
                    <button className={`p-1 bg-transparent text-white border border-gray-300 rounded-md
                    ${pages !== totalPages ? 'hover:bg-slate-100' : 'cursor-not-allowed'}`}
                    onClick={clickNext} 
                    disabled={pages===totalPages}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default InvoiceList;
