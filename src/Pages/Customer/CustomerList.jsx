import { React, useState } from "react";
import {
    StackCardOne,
    StackCardTwo,
    StackCardThree,
    StackCardFour,
} from "../../Components/Customer/Card";

import Table from "../../Components/Customer/Table";

import {
    ExportButtons,
    AddNewUserButton,
} from "../../Components/buttons/Buttons";

import axios from "axios";
import { useQuery } from "react-query";

const CustomerList = () => {
    const [search, setSearch] = useState("");

    const api = "https://jsonplaceholder.typicode.com/users";

    const getUsers = async () => {
        const res = await axios.get(api);

        return res.data;
    };

    const { data, isLoading, isError, error } = useQuery("users", getUsers);

    return (
        <div className="bg-[#b4b4b4] p-6 relative">
            <div className="grid 2xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
                <StackCardOne />
                <StackCardTwo />
                <StackCardThree />
                <StackCardFour />
            </div>
            <div className="user-dashboard bg-white w-full shadow-2xl rounded-lg p-5">
                <div className="user-dashboard__title ">
                    <h5 className="text-xl font-semibold">Search Filter</h5>
                </div>
                <div className="user-datatable">
                    <div className="btn-group p-5 flex justify-between items-center flex-col md:flex-row ">
                        <ExportButtons />
                        <div className="flex space-x-3 ">
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
                </div>
            </div>
        </div>
    );
};

export default CustomerList;
