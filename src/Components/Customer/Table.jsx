import { React, useState } from "react";

import { Loading } from "../loading/Loading";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import CustomerForm from "./CustomerForm";

const Table = ({ data, isLoading }) => {
    const [showForm, setShowForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

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
        onSuccconsoless: () => {
            e.log("done");

            refetch();
        },
    });

    const updateHandler = (id) => {
        setShowForm(true);
        setUserId(id);
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
                            data.map((user) => (
                                <tr key={user.id}>
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
                                            onClick={() =>
                                                deleteUser.mutate(user.id)
                                            }
                                        >
                                            <MdDelete className="me-2" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {showForm && (
                <CustomerForm data={userData} setShowForm={setShowForm} />
            )}
        </>
    );
};

export default Table;
