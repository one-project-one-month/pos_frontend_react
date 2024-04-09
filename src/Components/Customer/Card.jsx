import React from "react";

import { FaUser, FaUserPlus, FaUserCheck, FaUserClock } from "react-icons/fa";

export const StackCardOne = () => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="card-inner p-5">
                <div className="flex justify-between">
                    <div className="card-info">
                        <h3 className="title">Session</h3>
                        <div className="users flex items-center space-x-1">
                            <p className="number text-2xl font-semibold">
                                21,459
                            </p>
                            <p className="text-lime-500">(+29%)</p>
                        </div>
                        <div className="text">Total Users</div>
                    </div>
                    <div className="icon bg-[#9055fd25] rounded-md size-10 flex items-center justify-center">
                        <FaUser className="text-[#9055fd] text-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StackCardTwo = () => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="card-inner p-5">
                <div className="flex justify-between">
                    <div className="card-info">
                        <h3 className="title">Paid Users</h3>
                        <div className="users flex items-center space-x-1">
                            <p className="number text-2xl font-semibold">
                                4,567
                            </p>
                            <p className="text-lime-500">(+48%)</p>
                        </div>
                        <div className="text">Last week analytics</div>
                    </div>
                    <div className="icon bg-red-100 rounded-md size-10 flex items-center justify-center">
                        <FaUserPlus className="text-red-500 text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StackCardThree = () => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="card-inner p-5">
                <div className="flex justify-between">
                    <div className="card-info">
                        <h3 className="title">Active Users</h3>
                        <div className="users flex items-center space-x-1">
                            <p className="number text-2xl font-semibold">
                                19,459
                            </p>
                            <p className="text-red-500">(-29%)</p>
                        </div>
                        <div className="text">Last week analytics</div>
                    </div>
                    <div className="icon bg-lime-100 rounded-md size-10 flex items-center justify-center">
                        <FaUserCheck className="text-lime-500 text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StackCardFour = () => {
    return (
        <div className="card bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="card-inner p-5">
                <div className="flex justify-between">
                    <div className="card-info">
                        <h3 className="title">Pending Users</h3>
                        <div className="users flex items-center space-x-1">
                            <p className="number text-2xl font-semibold">237</p>
                            <p className="text-lime-500">(+47%)</p>
                        </div>
                        <div className="text">Last week analytics</div>
                    </div>
                    <div className="icon bg-yellow-100 rounded-md size-10 flex items-center justify-center">
                        <FaUserClock className="text-yellow-500 text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};
