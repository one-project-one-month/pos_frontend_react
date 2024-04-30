import Quantity from "./Quantity";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import sampleInvoice from "../../db/preview.json";
//import { useSelector } from "react-redux";
import axios from "axios";

const PreviewInvoice = () => {
  const color = useSelector((state) => state.animateSlice);

  const [invoiceDetails, setInvoiceDetails] = useState();

  const getData = async () => {
    const invoiceDetailsUrl = "/src/db/preview.json";
    await axios
      .get(invoiceDetailsUrl)
      .then((res) => {
        setInvoiceDetails(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //const color = useSelector((state) => state.animateSlice);

  const handlePrint = () => {
    const printContent = document.getElementById("invoice-preview");
    const newWindow = window.open("", "_blank");
    newWindow.document.write("<html><head><title>Print</title>");
    newWindow.document.write('<link rel="stylesheet" href="../index.css">');
    newWindow.document.write("</head><body>");
    newWindow.document.write(printContent.innerHTML);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.print();
  };

  //console.log(color);
  return (
    <>
      <section
        style={{
          color: color.textColor,
          backgroundColor: color.bgColor,
        }}
        className="  absolute right-2 w-[80%]  top-[70px] overflow-hidden rounded-md"
      >
        <div className="InvoiceCard rounded-md flex gap-5 items-center p-4 w-full h-auto ">
          <Quantity color={color} />
        </div>
      </section>
      <div
        id="invoice-preview"
        className="bg-transparent top-[70px] overflow-y-hidden bg-[#312d4b] shadow-md absolute w-[80%] right-0 p-10 h-[91vh]"
      >
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex flex-col justify-center w-1/2 p-10 text-black bg-white rounded-md invoice-preview">
            <div className="flex flex-col items-center">
              <h2 className="font-bold">ABC Store</h2>
              <h3>No(12), Main Road, xyz Township, Yangon, 01-112233</h3>
              <hr className="my-2 border-black border-dashed" />
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="w-[20%]">Voucher No:</td>
                    <td className="w-[30%]">
                      #{sampleInvoice.saleInvoice.voucherNo}
                    </td>
                    <td className="w-[20%]">Datetime:</td>
                    <td className="w-[30%]">
                      {sampleInvoice.saleInvoice.saleInvoiceDatetime}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[20%]">Customer:</td>
                    <td className="w-[30%]">
                      {sampleInvoice.saleInvoice.customerCode}
                    </td>
                    <td className="w-[20%]">Staff:</td>
                    <td className="w-[30%]">
                      {sampleInvoice.saleInvoice.staffCode || "Staff 1"}
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[20%]">Payment Type:</td>
                    <td className="w-[30%]">
                      {sampleInvoice.saleInvoice.paymentType || "Cash"}
                    </td>
                    <td className="w-[20%]"></td>
                    <td className="w-[30%]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-5 border-black border-dashed" />
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-left">Product</th>
                  <th className="text-right">Quantity</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoiceDetails &&
                  invoiceDetails.saleInvoice.itemList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.productName}</td>
                      <td className="text-right">
                        {item.quantity.toLocaleString()}
                      </td>
                      <td className="text-right">
                        ${item.price.toLocaleString()}
                      </td>
                      <td className="text-right">
                        ${item.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                <tr className="border-t border-black border-dashed">
                  <td>Total</td>
                  <td className="text-right">
                    {sampleInvoice.saleInvoice.itemList
                      .reduce((acc, item) => acc + (item.quantity || 0), 0)
                      .toLocaleString()}
                  </td>
                  <td></td>
                  <td className="text-right">
                    {sampleInvoice.saleInvoice.totalAmount.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td></td>
                  <td></td>
                  <td className="text-right">
                    -{sampleInvoice.saleInvoice.discount.toLocaleString() || 0}
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td></td>
                  <td></td>
                  <td className="text-right">
                    {sampleInvoice.saleInvoice.tax.toLocaleString() || 0}
                  </td>
                </tr>
                <tr className="border-t border-black border-dashed">
                  <td>Paid Amount</td>
                  <td></td>
                  <td></td>
                  <td className="text-right font-bold">
                    {sampleInvoice.saleInvoice.receiveAmount.toLocaleString() ||
                      0}
                  </td>
                </tr>
                <tr className="border-t border-black border-dashed">
                  <td>Net Amount</td>
                  <td></td>
                  <td></td>
                  <td className="text-right font-bold">
                    {sampleInvoice.saleInvoice.paymentAmount.toLocaleString() ||
                      0}
                  </td>
                </tr>
                <tr className="border-y border-black border-dashed">
                  <td>Change</td>
                  <td></td>
                  <td></td>
                  <td className="text-right font-bold">
                    {sampleInvoice.saleInvoice.change.toLocaleString() || 0}
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-center mt-3">
              Thank you so much for buying from us
            </h3>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-5"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default PreviewInvoice;
