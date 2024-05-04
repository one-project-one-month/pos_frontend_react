import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "./slider";
import SearchInput from "./SearchInput";
import Allproducts from "./Allproducts";

const AddNewInvoice = () => {
    const [datas, setDatas] = useState([]);
    const [loading,setLoading] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchValue = params.get("search");

    const { code: item } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);


    const [subtotal, setSubtotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const discountPercentage = 4;
    const taxPercentage = 2;

    useEffect(() => {
        
        const url = `https://pos-frontend-next-ruby.vercel.app/api/v1/products${searchValue ? `?name=${encodeURIComponent(searchValue)}` : ''}${item ? `${searchValue ? '&' : '?'}categoryCode=${encodeURIComponent(item)}` : ''}`;

        const fetchData = async () => {
           try {
            setLoading(true)
            const { data: { data: { products } } } = await axios.get(url);
            console.log(products);
            setDatas(products);
           } catch (error) {
            console.log(error);
           }
           setLoading(false);
        };
        fetchData();
    }, [searchValue, item]);

    //send order to orderDetails
    const addToOrder = (product) => {
        const existingProductIndex = orderDetails.findIndex(item => item.productId === product.productId);

        if (existingProductIndex !== -1) {
            const updatedOrderDetails = [...orderDetails];
            updatedOrderDetails[existingProductIndex].quantity += 1;
            setOrderDetails(updatedOrderDetails);
        } else {
            setOrderDetails([...orderDetails, { ...product, quantity: 1 }]);
        }
    };

    useEffect(() => {
        if (orderDetails.length > 0) {
            const subTotal = orderDetails.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            setSubtotal(subTotal);

            const discount = (subTotal * discountPercentage) / 100;
            setDiscountAmount(discount);

            const tax = (subTotal - discount) * (taxPercentage / 100);
            setTaxAmount(tax);

            const total = subTotal - discount + tax;
            setTotalAmount(total);
        } else {
            // Reset values if no order details
            setSubtotal(0);
            setDiscountAmount(0);
            setTaxAmount(0);
            setTotalAmount(0);
        }
    }, [orderDetails]);


    const handlePayNow = () =>{

        console.log(' You are completed to pay')
    }
    const deleteItem = (index) => {
        const updatedOrderDetails = [...orderDetails];
        updatedOrderDetails.splice(index, 1);
        setOrderDetails(updatedOrderDetails);
    };

    return (
        <div className="absolute h-full w-[80%] right-2 top-[70px]">
            <section className="InvoiceSection flex gap-3 overflow-hidden rounded-md bg-gray-50 h-[100vh] p-5">
                <div className="rounded-md p-4 min-w-[75%] h-fit">
                    <SearchInput/>
                    <Carousel item={item} loading={loading} />
                    <Allproducts datas={datas} loading={loading} addToOrder={addToOrder}/>
                </div>

                <div className="InvoiceCard  bg-[#eef0ec] flex flex-col  rounded-md w-[27%] h-[100%]">
                    <h1 className="font-bold px-2 py-2 mb-3 ">Order Details</h1>
                    <div className="overflow-y-auto max-h-[calc(100% - 100px)] ">
                        {orderDetails.map((item, index) => (
                            <div key={index} className="shadow-md  w-[75%] border rounded-md border-[#7dc5bf] mb-3 font-bold border-[] py-3  gap-[0%] mx-5 px-5" >
                                <p>{item.productName}</p>
                                <p>Qty: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                                <button className="bg-blue-500  rounded-md mx-5 px-3 text-white mt-2 pointer hover:bg-blue-700"
                                onClick={() => deleteItem(index)} >Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className=" flex flex-col font-bold mx-5 mt-5 ">
                        <div className="border-b border-t  border-[#3d3636] w-[52] pb-4">
                            <div>
                                <h3 className="inline-block mr-[3rem]">SubTotal</h3>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <h3 className="inline-block mr-[3rem]">Discount sales</h3>
                                <span>${discountAmount.toFixed(2)}</span>
                            </div>
                            <div>
                                <h3 className="inline-block mr-[3rem]">Total sales tax</h3>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="inline-block mr-[3rem]">Total: ${totalAmount.toFixed(2)}</h3>
                            <span><button className="bg-blue-500 text-white mr-10 py-2 rounded-md w-[15rem] mt-3" onClick={handlePayNow}>Pay now</button></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddNewInvoice;
