import React from 'react'
import { TableSkeleton } from '../../../Components/skeletons/InvoiceSkeleton'
import moment from "moment";
import { Link } from "react-router-dom";

const TableComponent = ({loading,slicedData}) => {
  return (
    loading ? (
        <TableSkeleton/>
       ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-700
       text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">Voucher Number</th>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Staff Code</th>
            <th scope="col" className="px-6 py-3 w-[15%]">Payment Amount</th>
            <th scope="col" className="px-6 py-3"></th>
        </tr>
        </thead>
        <tbody>
            {slicedData.length === 0 && (
                <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                    Sorry, no data found
                </td>
                </tr>
            )}
            {slicedData.length > 0 &&
                slicedData.map((invoice) => (
                <tr key={invoice.saleInvoiceId} className="bg-transparent">
                    <th scope="row" className="px-6 py-3 font-medium text-gray-300 whitespace-nowrap">
                    {invoice.saleInvoiceDetails[0].voucherNo}
                    </th>
                    <td className="px-6 py-3">{moment(invoice.dateTime).format("DD MMM, YYYY, hh:mma")}</td>
                    <td className="px-6 py-3">{invoice.staffCode}</td>
                    <td className="px-6 py-3 text-right">
                        {invoice.paymentAmount}
                    </td>
                    <td className="px-6 py-3 flex items-center justify-center">
                    <Link to={`/invoice/preview/${invoice.saleInvoiceId}`} className="bg-gray-100 px-4 p-2 text-center text-gray-800 text-xs rounded">
                        Detail
                    </Link>
                    </td>
                </tr>
                ))}
        </tbody>

       </table>
       )
    
  )
}

export default TableComponent