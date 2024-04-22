import "./invoice.css";
import { useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import Carousel from "./slider";
import { useParams } from "react-router-dom";
import SearchInput from "./SearchInput";
import Allproducts from "./Allproducts";

const AddNewInvoice = () => {
    const [productName, setProductName] = useState("");
    const [datas, setDatas] = useState("");
    const [categories,setCategories] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const searchValue = params.get('search');
    const navigate = useNavigate();
    const {code : item} = useParams();

    const searchHandler = () => {
        navigate('/invoice/add?search=' + productName);
      };

      const fetchData = async (url, updateData) => {
        try {
            const { data } = await axios.get(url);
            updateData(data);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        let url = 'http://localhost:3000/products';
        const queryParams = [];
    
        if (searchValue) {
            queryParams.push(searchValue);
        }
    
        if (item) {
            queryParams.push(item);
        }

        if (queryParams.length > 0) {
            url += `?q=${queryParams.join('&')}`;
        }

        fetchData(url, setDatas);
    
    }, [searchValue, item]);

    useEffect(() => {
        const url = 'http://localhost:3000/productCategories';
        fetchData(url, setCategories, 
        // "Product categories fetched successfully!", "Failed to fetch product categories!"
        );
    }, []);
    
    return (
       <div className="absolute h-full w-[80%] right-2 top-[70px]">
        <section className=" InvoiceSection flex gap-3 overflow-hidden rounded-md bg-gray-50 h-[100vh] p-5">
            <div className="rounded-md p-4 w-[75%] h-fit"> 

                <SearchInput productName={productName} setProductName={setProductName} searchHandler={searchHandler}/>

                <Carousel categories={categories} item={item}/>

                <Allproducts datas={datas}/>
            </div>

            <div className="InvoiceCard  flex rounded-md p-4 w-[25%] h-[200px] ">
                Button Group
            </div>
        </section>
       </div>
    );
};

export default AddNewInvoice;