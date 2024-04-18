import { React, useState, useEffect } from "react";

import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Notify } from "../toastify/Toastify";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const CustomerForm = ({ setShowForm, data }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const color = useSelector((state) => state.animateSlice);

    const api = "https://jsonplaceholder.typicode.com/users";

    const [newCustomer, setNewCustomer] = useState({
        name: "",
        dob: "",
        mobileNo: "",
        gender: "",
        stateCode: "",
        townshipCode: "",
        address: "",
    });

    useEffect(() => {
        if (data) {
            setNewCustomer({
                name: data.name,
                dob: data.email,
                mobileNo: data.phone,
                gender: data.website,
                stateCode: data.address.city,
                townshipCode: data.address.zipcode,
                address: data.address.street,
            });
        }
    }, [data]);

    const [error, setError] = useState({});

    // Handle user input
    const userHandler = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    // Add new user using Mutation function
    const adduser = async (postData) => {
        const res = await axios.post(api, postData);
        return res.data;
    };

    // Refetch the data after adding new user
    const refetch = () => {
        queryClient.invalidateQueries("users");
    };

    const updateUser = async (id, postData) => {
        const res = await axios.put(`${api}/${id}`, postData);
        return res.data;
    };

    const { mutate: updateUserMutation } = useMutation(updateUser, {
        onSuccess: () => {
            refetch();
            setShowForm(false);
            setNewCustomer({
                customerName: "",
                dateOfBirth: "",
                mobileNo: "",
                gender: "",
                stateCode: "",
                townshipCode: "",
                address: "",
            });
            Notify("User Updated Successfully", "success");
        },
    });

    const { mutate, isPending, isError } = useMutation(adduser, {
        onSuccess: () => {
            refetch();
            setShowForm(false);
            setNewCustomer({
                customerName: "",
                dateOfBirth: "",
                mobileNo: "",
                gender: "",
                stateCode: "",
                townshipCode: "",
                address: "",
            });
            Notify("User Added Successfully", "success");
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();

        const newError = {};

        for (let key in newCustomer) {
            if (newCustomer[key] === "") {
                newError[key] = `${key} field is required`;
            }
        }

        setError(newError);

        if (Object.keys(newError).length === 0) {
            const postData = {
                customerName: newCustomer.name,
                dateOfBirth: newCustomer.dob,
                mobileNo: newCustomer.mobileNo,
                gender: newCustomer.gender,
                stateCode: newCustomer.stateCode,
                townshipCode: newCustomer.townshipCode,
                address: newCustomer.address,
            };

            if (data) {
                updateUserMutation(data.id, postData);
            } else {
                mutate(postData);
            }
        }
    };

    return (
        <>
            <div style={{
                backgroundColor:color.bgColor
            }}
                className="overlay fixed inset-0  opacity-75"
                onClick={() => {
                    setShowForm(false);
                    navigate("/general/customers");
                }}
            ></div>

            <div style={{
                color:color.bgColor
            }} className="form-wrap opacity-100  absolute top-0 right-0 z-50 w-userForm h-full p-5">
                <div className="title mb-5">
                    <h2 className="text-center text-3xl font-semibold">
                        Add New User
                    </h2>
                    <button
                        className="absolute top-2 right-3"
                        onClick={() => {
                            setShowForm(false);
                            navigate("/general/customers");
                        }}
                    >
                        <AiFillCloseCircle className="size-6" />
                    </button>
                </div>
                <form action="" onSubmit={submitHandler}>
                    <div className="input-box mb-5">
                        <label htmlFor="name">Name</label>
                        <input
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5"
                            type="text"
                            name="name"
                            id="name"
                            value={newCustomer.name}
                            onChange={userHandler}
                            placeholder="Customer Name"
                        />
                        {error.name && (
                            <p className="text-red-500 text-sm">{error.name}</p>
                        )}
                    </div>
                    <div className="input-box mb-5">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5"
                            type="date"
                            name="dob"
                            id="dob"
                            value={newCustomer.dob}
                            onChange={userHandler}
                            placeholder="Customer Name"
                        />
                        {error.dob && (
                            <p className="text-red-500 text-sm">{error.dob}</p>
                        )}
                    </div>
                    <div className="input-box mb-5">
                        <label htmlFor="mobileNo">Phone Number</label>
                        <input
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5"
                            type="text"
                            name="mobileNo"
                            id="mobileNo"
                            value={newCustomer.mobileNo}
                            onChange={userHandler}
                            placeholder="Phone Number"
                        />
                        {error.mobileNo && (
                            <p className="text-red-500 text-sm">
                                {error.mobileNo}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-5">
                        <label>Gender</label>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-start space-x-3 items-center">
                                <label htmlFor="male">Male</label>
                                <input
                                    className="focus:outline-none border-2 block rounded-lg px-3 py-2.5"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value="male"
                                    onChange={userHandler}
                                    placeholder="Gender"
                                />
                            </div>
                            <div className="flex justify-start space-x-3 items-center">
                                <label htmlFor="female">Female</label>
                                <input
                                    className="focus:outline-none border-2 block rounded-lg px-3 py-2.5"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                    onChange={userHandler}
                                    placeholder="Gender"
                                />
                            </div>
                            <div className="flex justify-start space-x-3 items-center">
                                <label htmlFor="other">Other</label>
                                <input
                                    className="focus:outline-none border-2 block rounded-lg px-3 py-2.5"
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    value="other"
                                    onChange={userHandler}
                                    placeholder="Gender"
                                />
                            </div>
                        </div>
                        {error.gender && (
                            <p className="text-red-500 text-sm">
                                {error.gender}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-5">
                        <label htmlFor="stateCode">State Code</label>
                        <input
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5"
                            type="text"
                            name="stateCode"
                            id="stateCode"
                            value={newCustomer.stateCode}
                            onChange={userHandler}
                            placeholder="State Code"
                        />
                        {error.stateCode && (
                            <p className="text-red-500 text-sm">
                                {error.stateCode}
                            </p>
                        )}
                    </div>

                    <div className="input-box mb-5">
                        <label htmlFor="townshipCode">Township Code</label>
                        <input
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5"
                            type="text"
                            name="townshipCode"
                            id="townshipCode"
                            value={newCustomer.townshipCode}
                            onChange={userHandler}
                            placeholder="Township Code"
                        />
                        {error.townshipCode && (
                            <p className="text-red-500 text-sm">
                                {error.townshipCode}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-5">
                        <label htmlFor="address">Address</label>
                        <textarea
                            className="focus:outline-none border-2 w-full rounded-lg px-3 py-2.5 resize-none"
                            name="address"
                            id="address"
                            value={newCustomer.address}
                            onChange={userHandler}
                            placeholder="Address"
                        />
                        {error.address && (
                            <p className="text-red-500 text-sm">
                                {error.address}
                            </p>
                        )}
                    </div>
                    <input style={{
                backgroundColor:color.bgColor,
                color:color.bgColor,
            }}
                        className=" px-5 py-2.5  rounded-md"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </>
    );
};

export default CustomerForm;
