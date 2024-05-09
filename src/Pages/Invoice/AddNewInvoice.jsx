import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {  useSelector } from 'react-redux';
import Carousel from "./slider";
import SearchInput from "./SearchInput";
import Allproducts from "./Allproducts";
import { FaTrash} from 'react-icons/fa';
import { Plus  } from 'lucide-react'; 
import { Minus  } from 'lucide-react'; 


const AddNewInvoice = () => {
    const [productName, setProductName] = useState("");
    const [datas, setDatas] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchValue = params.get("search");
    const navigate = useNavigate();
    const color = useSelector((state) => state.animateSlice)
    const { code: item } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);

    const [subtotal, setSubtotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [loading,setLoading] = useState(false);

    const discountPercentage = 4;
    const taxPercentage = 2;

    const increaseCounter = (index) =>{
       const updateOrderDetails = [...orderDetails];
       updateOrderDetails[index].quantity  += 1;
       setOrderDetails(updateOrderDetails)
    }

    const decreaseCounter = (index) =>{

        const updateOrderDetails = [...orderDetails];
        if( updateOrderDetails[index].quantity  > 0){
            updateOrderDetails[index].quantity  -= 1;
            setOrderDetails(updateOrderDetails)
        } 
     
     }
 
    const searchHandler = () => {
        navigate("/invoice/add?search=" + productName);
    };

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://pos-frontend-next-ruby.vercel.app/api/v1/products${searchValue ? `?name=${encodeURIComponent(searchValue)}` : ''}${item ? `${searchValue ? '&' : '?'}categoryCode=${encodeURIComponent(item)}` : ''}`;
            try {
                setLoading(true); 
                const { data: { data: { products } } } = await axios.get(url);
                setDatas(products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [searchValue, item,]);

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


    const handlePayNow = () => {

        console.log(' You are completed to pay')
    }
    const deleteItem = (index) => {
        const updatedOrderDetails = [...orderDetails];
        updatedOrderDetails.splice(index, 1);
        setOrderDetails(updatedOrderDetails);
    };

    return (
        <div 
        className="absolute h-full w-[80%] right-2 top-[70px]">
            <section
             style={{
            backgroundColor: color.cardBgColor,
            color:color.textColor,
         }}
            
            className="InvoiceSection flex gap-3 rounded-md bg-gray-50 min-h-[100vh] p-5">
                <div
                 style={{
                    backgroundColor: color.bgColor,
      
                  }}
                className="rounded-md p-4 min-w-[75%] ">
                    <SearchInput productName={productName} setProductName={setProductName} searchHandler={searchHandler} loading={loading} />
                    <Carousel item={item} loading={loading} />
                    <Allproducts datas={datas} loading={loading} addToOrder={addToOrder} />
                </div>

                <div 
                style={{
                    backgroundColor: color.bgColor,
                  
                  }}
                className="InvoiceCard px-3 w-[25%] h-[100%] rounded-md  bg-[#f1efef] p-2 space-y-2">
                    <h1 className="font-bold">Order Details</h1>
                    <div className="overflow-y-auto  h-[20rem] " >
                        
                        {orderDetails.map((item, index) => (
                            <div key={index}  style={{
                                backgroundColor : color.cardBgColor,
                              }}
                               className="border rounded-md px-2 py-2  border-[#c2c2c2] w-full shadow-md space-y-2">
                                
                                <div className="flex items-center justify-between ">
                                    <p className="text-sm font-semibold">{item.productName} </p> 
                                 <button className="item-centers justify-end"
                                    onClick={() => deleteItem(index)} > <FaTrash  className="text-[#ef4444] w-3 h-3"/>
                                </button>
                                </div>
                                <div className="flex items-center justify-between">
                                {/* <span>Price : {item.price}</span> */}
                                <p className="text-sm">Quantity</p>
                                
                                <div className="flex items-center gap-2">
                                    <button
                                    onClick={() => decreaseCounter(index)}
                                    
                                    >
                                        <Minus className="w-4 h-4 text-white bg-black hover:bg-slate-400"/>
                                    </button>

                                    <span className="text-sm">{item.quantity}</span>

                                    <button
                                    onClick={() => increaseCounter(index)}>
                                        <Plus className="w-4 h-4 text-white bg-black hover:bg-slate-400"/>
                                    </button>

                                </div>
                                </div>
                                <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-3">
                                    <p className="text-sm">${item.price}</p>
                                    <p className="text-sm text-green-400">x {item.quantity}</p>
                                   </div>
                                    <p className="font-semibold" >${item.price * item.quantity}</p>
                                </div>
                                {/* <p className="mb-2" > Total : {item.price * item.quantity} 
                              
                                </p> */}
                               
                            </div>
                        ))}
                    </div>

                    <div
                     style ={{backgroundColor :  color.bgColor

                     }}
                    className="  flex flex-col font-bold mb-5 mt-5 w-full px-5 rounded-sm">
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
                            <span><button style ={{ backgroundColor : color.buttonColor}}className="bg-gray-700 text-white mb-2 mr-10 py-2 rounded-md w-[15rem] mt-3" onClick={handlePayNow}>Pay now</button></span>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default AddNewInvoice;
