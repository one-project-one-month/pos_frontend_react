// eslint-disable-next-line no-unused-vars
import React from "react";

const AddStaff = () => {
    return (
        <div className=" bg-[#28243d] absolute right-[25%] top-[80px] rounded-br-md  p-2">
            <form className="w-[600px] h-[550px]   mx-auto mt-8 py-4 rounded-lg  shadow-md">
                <div className="logo mt-2">
                    <h2 className="text-white text-center text-3xl font-bold">
                        Create A Staff
                    </h2>
                </div>
                <div className="flex flex-col m-4 mt-2">
                    <label className="text-white text-xl">Name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-[95%] mt-2 bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md"
                    />
                </div>
                <div className="flex justify-center items-center w-[100%] px-4">
                    <div className="flex flex-col w-[50%]">
                        <label className="text-white text-xl">Date:</label>
                        <input
                            type="date"
                            placeholder="Name"
                            className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label className="text-white text-xl">MobileNo:</label>
                        <input
                            type="text"
                            placeholder="mobileNo"
                            className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center w-[100%] px-4 mt-4">
                    <div className="w-[50%]">
                        <label className="text-[#d4d4d4] text-xl">Gender:</label>
                        <select className="text-xl w-[90%] text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1 mt-2">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="w-[50%]">
                        <label className="text-[#d4d4d4] text-xl">Position:</label>
                        <select className="text-xl w-[90%] mt-2 text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1">
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
