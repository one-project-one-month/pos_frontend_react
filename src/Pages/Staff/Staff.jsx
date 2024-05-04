// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);

  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentIndex = staffs?.slice(firstIndex, lastIndex);

  const getData = async () => {
    await axios
      .get("https://pos-frontend-next-ruby.vercel.app/api/v1/products")
      .then((res) => {
        setStaffs(res?.data.data.staffs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className=" bg-[#312d4b] shadow-md absolute w-[80%] right-0 rounded-md p-3 mt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-white lg:text-3xl md:text-2xl sm:text-xl px-4 font-bold">
            All Staff Lists
          </h2>
          <Link
            to="/general/add"
            className=" py-2 px-4 flex gap-3 justify-between text-[#ecebeb] font-medium items-center bg-[#9055fd] rounded-md shadow-md  text-lg"
          >
            <AiOutlinePlus size={20} />
            <span>New Staff</span>
          </Link>
        </div>
        <Table currentIndex={currentIndex} />
        <Pagination
          setCurrentPage={setCurrentPage}
          itemPerPage={itemPerPage}
          currentPage={currentPage}
          currentIndex={currentIndex}
          staffs={staffs}
        />
      </div>
    </>
  );
};

export default Staff;
