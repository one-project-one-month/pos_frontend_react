import "./invoice.css";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "./slider";
import SearchInput from "./SearchInput";
import Allproducts from "./Allproducts";

const AddNewInvoice = () => {
    const [productName, setProductName] = useState("");
    const [datas, setDatas] = useState([]);
    const [categories, setCategories] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchValue = params.get("search");
    const navigate = useNavigate();
    const { code: item } = useParams();
    const [subtotal, setSubtotal] = useState(0);
    const [orderDetails, setOrderDetails] = useState([]);

    const discountPercentage = 4; 
    const taxPercentage = 2; 

    const searchHandler = () => {
        navigate("/invoice/add?search=" + productName);
    };

    const fetchData = async (url, updateData) => {
        try {
            const { data } = await axios.get(url);
            updateData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        let url = "http://localhost:3000/products";
        const queryParams = [];

        if (searchValue) {
            queryParams.push(searchValue);
        }

        if (item) {
            queryParams.push(item);
        }

        if (queryParams.length > 0) {
            url += `?q=${queryParams.join("&")}`;
        }

        fetchData(url, setDatas);
    }, [searchValue, item]);

    useEffect(() => {
        const url = "http://localhost:3000/productCategories";
        fetchData(url, setCategories);
    }, []);



    useEffect(() => {
        if (datas && datas.length > 0) {
            const subTotal = datas.reduce((acc, curr) => acc + curr.price, 0);
            setSubtotal(subTotal);
        }
    }, [datas]);

    //send order to orderDetails 
    const addToOrder = (product) => {
        setOrderDetails([...orderDetails, product]);
    };
    
//calculateTotal is not directly used for UI ,used for the amount of computing orderDetails
    const calculateTotal = () => {
        const total = orderDetails.reduce((acc, product) => acc + product.price, 0);
        return total;
    };


    const discountAmount = (subtotal * discountPercentage) / 100;
    const taxAmount = (subtotal * taxPercentage) / 100;
    const totalAmount = subtotal - discountAmount + taxAmount;

    return (
        <div className="absolute h-full w-[80%] right-2 top-[70px]">
            <section className="InvoiceSection flex gap-3 overflow-hidden rounded-md bg-gray-50 h-[100vh] p-5">
                <div className="rounded-md p-4 w-[75%] h-fit">
                    <SearchInput productName={productName} setProductName={setProductName} searchHandler={searchHandler} />
                    <Carousel categories={categories} item={item} />
                    <Allproducts datas={datas} addToOrder={addToOrder}/>
                </div>

                <div className="InvoiceCard bg-[#f1f1f1] flex flex-col rounded-md w-[27%] h-[100%]">
                    <h1 className="font-bold px-2 py-2">Order Details</h1>
                    <div>
                        {orderDetails.map((item, index) => (
                            <div key={index}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                              
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col font-bold mx-5 mt-[35%]">
                        <div className="border-b border-[#3d3636] bg-white w-[52] pb-4">
                            <div>
                                <h3 className="inline-block mr-[3rem]">SubTotal</h3>
                                <span>${subtotal}</span>
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
                            <span><button className="bg-blue-500 text-white mr-10 py-2 rounded-md w-[15rem] mt-5">Pay now</button></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddNewInvoice;
