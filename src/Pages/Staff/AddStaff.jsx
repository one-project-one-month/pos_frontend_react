// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddStaff = () => {
  const [newStaff, setNewStaff] = useState({
    staffCode: "",
    staffName: "",
    dateOfBirth: "",
    password: "",
    mobileNo: "",
    gender: "",
    position: "",
    address: "",
  });
  const nvaigate = useNavigate();

  const handleClick = (e) => {
    const { name, value } = e.target;
    setNewStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newStaff);
    await axios
      .post("https://pos-frontend-next-ruby.vercel.app/api/v1/staffs", newStaff)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    nvaigate("/general");
  };
  return (
    <div className=" bg-[#28243d] absolute right-[25%] top-[30px] rounded-br-md  p-2">
      <form
        className="w-[600px] h-[550px]   mx-auto mt-4 py-4 rounded-lg  shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="logo mt-2">
          <h2 className="text-white text-center text-3xl font-bold">
            Create A Staff
          </h2>
        </div>
        <div className="flex flex-col m-4 mt-2">
          <label className="text-white text-xl">StaffCode:</label>
          <input
            type="text"
            placeholder="e.g. s01"
            name="staffCode"
            className="w-[95%] mt-2 bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
            onChange={handleClick}
          />
        </div>
        <div className="flex justify-center items-center w-[100%] px-4">
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="staffName"
              className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleClick}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">Password:</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleClick}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[100%] px-4">
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">Date:</label>
            <input
              type="date"
              placeholder="Name"
              name="dateOfBirth"
              className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleClick}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <label className="text-white text-xl">MobileNo:</label>
            <input
              type="text"
              placeholder="mobileNo"
              name="mobileNo"
              className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleClick}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[100%] px-4 mt-4">
          <div className="w-[50%]">
            <label className="text-[#d4d4d4] text-xl">Gender:</label>
            <select
              className="text-xl w-[90%] text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1 mt-2"
              onChange={handleClick}
              name="gender"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-[50%]">
            <label className="text-[#d4d4d4] text-xl">Position:</label>
            <select
              className="text-xl w-[90%] mt-2 text-[#d4d4d4] bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1"
              onChange={handleClick}
              name="position"
            >
              <option value="">Select</option>
              <option value="manager">Manager</option>
              <option value="cashier">Cashier</option>
              <option value="saleperson">Sale Person</option>
              <option value="salehelper">Sale Helper</option>
              <option value="stockkeeper">Stockkeeper</option>
            </select>
          </div>
        </div>
        <div className="m-4 flex flex-col">
          <label className="text-[#d4d4d4] text-xl">Address:</label>
          <textarea
            className="w-[95%] mt-2  text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md h-[100px]"
            onChange={handleClick}
            name="address"
            placeholder="Address"
          ></textarea>
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

export default AddStaff;
