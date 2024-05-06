import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

const PreviewInvoice = () => {
  const { saleInvoiceId } = useParams();
  const [saleInvoice, setSaleInvoice] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const baseurl = "https://pos-frontend-next-ruby.vercel.app/api/v1/";
    let saleInvoiceEndpoint = `sale-invoices/${saleInvoiceId}`;
    const saleInvoiceUrl = `${baseurl}${saleInvoiceEndpoint}`;
    console.log("test => " + saleInvoiceUrl);
    try {
      const res = await axios.get(saleInvoiceUrl);
      console.log(res.data.data.saleInvoice);
      setSaleInvoice(res.data.data.saleInvoice);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (saleInvoiceId) {
      getData();
    }
  }, [saleInvoiceId]);

  const handlePrint = () => {
    const printContent = document.getElementById("invoice-preview");
    const newWindow = window.open("", "_blank");
    newWindow.document.write('<html><head><title>Print</title>');
    newWindow.document.write('<link rel="stylesheet" href="../index.css">');
    newWindow.document.write('</head><body>');
    newWindow.document.write(printContent.innerHTML);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div id="invoice-preview" className="bg-transparent top-[70px] overflow-y-hidden bg-[#312d4b] shadow-md absolute w-[80%] right-0 p-10 h-[91vh]">
      <div className="flex flex-col items-center justify-center w-full ">
        {loading ? (
          <div className="flex flex-col justify-center w-1/2 h-[450px] p-10 text-black bg-white rounded-md invoice-preview">

          </div>
        ) : (
          <div
              className="flex flex-col justify-center w-1/2 p-10 text-black bg-white rounded-md invoice-preview">
              <div className="flex flex-col items-center">
                <h2 className="font-bold">ABC Store</h2>
                <h3>No(12), Main Road, xyz Township, Yangon, 01-112233</h3>
                <hr className="my-2 border-black border-dashed" />
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="w-[20%]">Voucher No:</td>
                      <td className="w-[30%]">#{saleInvoice && saleInvoice?.voucherNo}</td>
                      <td className="w-[20%]">Datetime:</td>
                      <td className="w-[30%]">{saleInvoice && moment(saleInvoice?.dateTime)?.format("DD MMM, YYYY, hh:mma")}</td>
                    </tr>
                    <tr>
                      <td className="w-[20%]">Customer:</td>
                      <td className="w-[30%]">{saleInvoice && saleInvoice?.customerCode}</td>
                      <td className="w-[20%]">Staff:</td>
                      <td className="w-[30%]">{saleInvoice && saleInvoice?.staff?.staffName}</td>
                    </tr>
                    <tr>
                      <td className="w-[20%]">Payment Type:</td>
                      <td className="w-[30%]">{saleInvoice && saleInvoice?.paymentType || "Cash"}</td>
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
                  {saleInvoice &&
                    saleInvoice.saleInvoiceDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product.productName}</td>
                        <td className="text-right">{item.quantity.toLocaleString()}</td>
                        <td className="text-right">{item.price.toLocaleString()}</td>
                        <td className="text-right">{item.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  <tr className="border-t border-black border-dashed">
                    <td>Total</td>
                    <td className="text-right">{saleInvoice && saleInvoice.saleInvoiceDetails.reduce((acc, item) => acc + (item.quantity || 0), 0).toLocaleString()}</td>
                    <td></td>
                    <td className="text-right">{saleInvoice && saleInvoice.totalAmount.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td></td>
                    <td></td>
                    <td className="text-right">-{saleInvoice && saleInvoice.discount.toLocaleString() || 0}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td></td>
                    <td></td>
                    <td className="text-right">{saleInvoice && saleInvoice.tax?.toLocaleString() || 0}</td>
                  </tr>
                  <tr className="border-t border-black border-dashed">
                    <td>Paid Amount</td>
                    <td></td>
                    <td></td>
                    <td className="text-right font-bold">{saleInvoice && saleInvoice.receiveAmount?.toLocaleString() || 0}</td>
                  </tr>
                  <tr className="border-t border-black border-dashed">
                    <td>Net Amount</td>
                    <td></td>
                    <td></td>
                    <td className="text-right font-bold">{saleInvoice && saleInvoice.paymentAmount?.toLocaleString() || 0}</td>
                  </tr>
                  <tr className="border-y border-black border-dashed">
                    <td>Change</td>
                    <td></td>
                    <td></td>
                    <td className="text-right font-bold">{saleInvoice && saleInvoice.change?.toLocaleString() || 0}</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-center mt-3">Thank you so much for buying from us</h3>
            </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-5" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default PreviewInvoice;
