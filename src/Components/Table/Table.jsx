// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
// eslint-disable-next-line react/prop-types
const Table = ({ currentIndex }) => {
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      axios
        .delete(`https://pos-frontend-next-ruby.vercel.app/api/v1/staffs/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
    }
    window.location.reload();
  };

  return (
    <table className="table-fixed  rounded-md w-[100%] mx-[auto]  shadow-md mt-4">
      <thead className=" text-center font-bold border-b bg-[#312d4b] text-[#d4d4d4]">
        <tr>
          <th>
            <input type="checkbox" className="cursor-pointer" />
          </th>
          <th className="px-6 py-3">StaffCode</th>
          <th className="px-6 py-3">StaffName</th>
          <th className="px-6 py-3">DateOfBirth</th>
          <th className="px-6 py-3">MobileNo</th>
          <th className="px-6 py-3">Address</th>
          <th className="px-6 py-3">Gender</th>
          <th className="px-6 py-3">Position</th>
          <th className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody className="text-white text-center  font-medium">
        {
          // eslint-disable-next-line react/prop-types
          currentIndex?.map((s) => {
            return (
              <tr
                key={s.staffId}
                className="hover:bg-gray-500 border-b border-[#d4d4d48b] "
              >
                <td>
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="px-4 py-1">{s.staffCode}</td>
                <td className="px-4 py-1">{s.staffName}</td>
                <td className="px-4 py-1">
                  {moment(s.dateOfBirth).format("LLL")}
                </td>
                <td className="px-4 py-1">{s.mobileNo}</td>
                <td className="px-4 py-1">{s.address}</td>
                <td className="px-4 py-1">{s.gender}</td>
                <td className="px-4 py-1">{s.position}</td>
                <td className="flex items-center justify-evenly mt-6">
                  <Link to={`/general/${s.staffId}`}>
                    <MdEdit
                      size={20}
                      className="text-blue-500 cursor-pointer"
                    />
                  </Link>
                  <MdDelete
                    size={20}
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(s.staffId)}
                  />
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
