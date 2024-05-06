import React from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range';
import { InvoiceSkeleton } from '../../../Components/skeletons/InvoiceSkeleton'
import "../invoice.css"
import { useSelector } from 'react-redux';

const DateRangePicker = ({click,setClick,loading,date,setDate,datRef}) => {

  const dateRangeHandler = () => {
    setClick(!click)
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };

  const currentStartDate = date[0].startDate.toLocaleDateString('en', options);
  const currentEndDate = date[0].endDate.toLocaleDateString('en', options);
  
  return (
    <div className="min-w-[30%] relative" ref={datRef}>
        <li>
        {loading ? (
            <InvoiceSkeleton/>
        ) : (
            // <button className="bg-white border border-gray-7 text-gray-900 text-sm
            // rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            // p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            // dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
            // space-x-1 hover:border-blue-500"
            // onClick={dateRangeHandler}>
            //     <span className="font-light text-gray-500">From :</span>
            //     <span>{currentStartDate}</span>
            //     <span> - </span>
            //     <span className="font-light text-gray-500">To :</span>
            //     <span>{currentEndDate}</span>
            // </button>
            <button className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 
            placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500 
            space-x-1 hover:border-blue-500"
            onClick={dateRangeHandler}>
                <span className="font-light text-gray-400">From :</span>
                <span>{currentStartDate}</span>
                <span> - </span>
                <span className="font-light text-gray-400">To :</span>
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
            // className='bg-gray-700'
            // rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
            />
            </li>
        )}
    </div>
  )
}

export default DateRangePicker