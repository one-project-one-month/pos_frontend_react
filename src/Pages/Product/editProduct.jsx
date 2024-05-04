import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const [editData, setEditData] = useState({
    productCode: "",
    productName: "",
    price: "",
    productCategory: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const getData = async () => {
    try {
      const response = await axios.get(`https://pos-frontend-next-ruby.vercel.app/api/v1/products/${productId}`);
      setEditData(response.data.data.products || []);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://pos-frontend-next-ruby.vercel.app/api/v1/products/${productId}`, editData);
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#28243d] absolute right-[25%] top-[30px] rounded-br-md p-2">
      <form
        className="w-[600px] h-[550px] mx-auto mt-4 py-4 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="logo mt-2">
          <h2 className="text-white text-center text-3xl font-bold">Edit Category</h2>
        </div>

        <div className="flex flex-col m-4 mt-2">
          <label className="text-white text-xl">Product Code:</label>
          <input
            type="text"
            placeholder="e.g. s01"
            name="productCode"
            value={editData.productCode}
            className="w-[95%] mt-2 bg-transparent border-[#d4d4d48c] border-[2px] outline-none p-2 rounded-md text-white"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-center w-[100%] px-4">
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">Product Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="productName"
              value={editData.productName}
              className="w-[90%] mt-2 bg-transparent border-[#d4d4d48c] border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">Price:</label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={editData.price}
              className="w-[90%] mt-2 bg-transparent border-[#d4d4d48c] border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[100%] px-4">
         
        </div>
        <div className="flex items-center justify-center my-4">
          <input
            type="submit"
            className="w-[60%] bg-[#9055fd] text-[#eae9e9] tracking-wide font-medium py-2 rounded-lg cursor-pointer border-0 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
