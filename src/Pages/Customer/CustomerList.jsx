import { React, useState } from "react";
import {
    StackCardOne,
    StackCardTwo,
    StackCardThree,
    StackCardFour,
} from "../../Components/Customer/Card";

import Table from "../../Components/Customer/Table";

import { Toastbox } from "../../Components/toastify/Toastify";

import {
    ExportButtons,
    AddNewUserButton,
} from "../../Components/buttons/Buttons";

import axios from "axios";
import { useQuery } from "react-query";

const CustomerList = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(10);
    const [limit, setLimit] = useState(10);

    const getUsers = async ({ page, limit }) => {
        const api = `https://jsonplaceholder.typicode.com/users?page=${page}&limit=${limit}`;

        const res = await axios.get(api);

        return [
            ...res.data,
            ...res.data,
            ...res.data,
            ...res.data,
            ...res.data,
        ];
    };

    const { data, isLoading, isError, error } = useQuery(
        ["users", page, limit],
        () => getUsers(page, limit)
    );

    let start;
    let end;

    if (data) {
        start = page * limit + 1;
        end = Math.min((page + 1) * limit, data.length);
    }

    return (
        <>
            <Toastbox />
            <div className="bg-transparent top-[70px] overflow-y-hidden text-[#d4d4d4]  bg-[#312d4b] shadow-md absolute w-[80%] right-0 ">
                <div className="grid 2xs:grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
                    <StackCardOne />
                    <StackCardTwo />
                    <StackCardThree />
                    <StackCardFour />
                </div>
                <div className="   rounded-lg p-5">
                    <div className="user-dashboard__title ">
                        <h5 className="text-xl font-semibold">Search Filter</h5>
                    </div>
                    <div className="user-datatable">
                        <div className="btn-group py-5  flex justify-between items-center flex-col md:flex-row  ">
                            <ExportButtons />
                            <div className="flex space-x-0 xs:space-x-3 space-y-2 xs:space-y-0 xs:flex-row flex-col xs:items-stretch items-end">
                                <input
                                    className="search-input border block w-full border-gray-600 px-3 py-2 rounded-lg text-lg focus:outline-none"
                                    type="search"
                                    name="search"
                                    id="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search..."
                                />
                                <AddNewUserButton />
                            </div>
                        </div>
                        <Table data={data} isLoading={isLoading} />
                        <div className="table-footer">
                            <div className="page-data-info">
                                {data && (
                                    <p>
                                        Showing {start} to {end} of{" "}
                                        {data.length} entries
                                    </p>
                                )}
                            </div>
                            <div className="pagination">
                                <div className="pages">
                                    <button
                                        className="page-btn"
                                        onClick={() => setPage(page - 1)}
                                    >
                                        Pre
                                    </button>
                                    <button
                                        className="page-btn"
                                        onClick={() => setPage(page)}
                                    >
                                        Pre
                                    </button>
                                    <button
                                        className="page-btn"
                                        onClick={() => setPage(page + 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="limit">
                                    <select
                                        name="limit"
                                        id="limit"
                                        onChange={(e) =>
                                            setLimit(e.target.value)
                                        }
                                    >
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerList;
