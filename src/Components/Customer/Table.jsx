import { React, useState } from "react";

import { Loading } from "../loading/Loading";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";

import axios from "axios";
import { useSelector } from "react-redux";

import CustomerForm from "./CustomerForm";
import { Notify } from "../toastify/Toastify";

Modal.setAppElement("#root");

const Table = ({ data, isLoading }) => {
    const [showForm, setShowForm] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const color = useSelector((state) => state.animateSlice);


    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const refetch = () => {
        queryClient.invalidateQueries("users");
    };

    const [userId, setUserId] = useState(null);

    const { data: userData } = useQuery(
        ["user", userId],
        async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            return response.data;
        },
        { enabled: userId !== null }
    );

    const deleteUser = useMutation({
        mutationFn: async (id) => {
            return await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
        },
        onSuccess: () => {
            refetch();
            Notify("User Delete Successfully", "info");
        },
    });

    const updateHandler = (id) => {
        setShowForm(true);
        setUserId(id);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "20%",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            borderRadius: "15px",
        },
        overlay: {
            background: "#00000050",
            opacity: "0.5",
            backdropFilter: "blur(1px)",
        },
    };

    return (
        <>
            <div className="block w-full overflow-x-auto">
                <table className="table w-full" id="my-table">
                    <thead>
                        <tr>
                            <th className="px-3 py-2">
                                <input
                                    className="w-5 h-5 accent-purple-600"
                                    type="checkbox"
                                    name=""
                                    id=""
                                />
                            </th>
                            <th className="px-3 py-2">Code</th>
                            <th className="px-3 py-2">Name</th>
                            <th className="px-3 py-2">Date Of Birth</th>
                            <th className="px-3 py-2">Phone</th>
                            <th className="px-3 py-2">Address</th>
                            <th className="px-3 py-2">Gender</th>
                            <th className="px-3 py-2">State Code</th>
                            <th className="px-3 py-2">Township Code</th>
                            <th className="px-3 py-2">Action</th>
                            <th className="px-3 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {isLoading && (
                            <tr className="text-center">
                                <td colSpan="10" className="bg">
                                    <Loading isLoading={isLoading} />
                                </td>
                            </tr>
                        )}
                        {data &&
                            data.map((user, i) => (
                                <tr style={{
                                    color:color.textColor
                                }}  key={i}>
                                    <td className="px-3 py-2">
                                        <input
                                            className="w-5 h-5 accent-purple-600"
                                            type="checkbox"
                                            name=""
                                            id=""
                                        />
                                    </td>
                                    <td className="px-3 py-2">{user.name}</td>
                                    <td className="px-3 py-2">{user.email}</td>
                                    <td className="px-3 py-2">
                                        {user.website}
                                    </td>
                                    <td className="px-3 py-2">{user.phone}</td>
                                    <td className="px-3 py-2">
                                        {user.address.street}
                                    </td>
                                    <td className="px-3 py-2">
                                        {user.website}
                                    </td>
                                    <td className="px-3 py-2">
                                        {user.address.zipcode}
                                    </td>
                                    <td className="px-3 py-2">
                                        {user.address.suite}
                                    </td>
                                    <td className="px-3 py-2">
                                        <button
                                            className="btn w-full bg-blue-500 text-white px-3 py-2 rounded-lg flex mx-auto justify-center items-center"
                                            onClick={() => {
                                                updateHandler(user.id);
                                            }}
                                        >
                                            <FaRegEdit className="me-2" />
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn w-full bg-red-500 text-white px-3 py-2 rounded-lg flex mx-auto justify-center items-center"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <MdDelete className="me-2" />
                                            Delete
                                        </button>
                                        {modalIsOpen && (
                                            <div className="">
                                                <Modal
                                                    isOpen={modalIsOpen}
                                                    onRequestClose={() =>
                                                        setIsOpen(false)
                                                    }
                                                    style={customStyles}
                                                    contentLabel="Example Modal"
                                                >
                                                    <div className="mb-3">
                                                        <h2 className="text-3xl font-semibold mb-5">
                                                            Delete User
                                                        </h2>
                                                        <p className="">
                                                            Are you sure to
                                                            delete this user?
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-end items-center space-x-3">
                                                        <button
                                                            className="bg-slate-300 py-2 text-lg rounded-lg px-8"
                                                            onClick={() =>
                                                                setIsOpen(false)
                                                            }
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            className="bg-red-500 text-white py-2 text-lg rounded-lg px-8"
                                                            onClick={() => {
                                                                deleteUser.mutate(
                                                                    user.id
                                                                );
                                                                setIsOpen(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </Modal>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {showForm && (
                <CustomerForm data={userData}  setShowForm={setShowForm} />
            )}
        </>
    );
};

export default Table;
