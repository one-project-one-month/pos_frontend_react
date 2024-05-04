import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GlobalOn } from "../../redux/services/animateSlice";

const AddCategory = () => {
  const { addCatForm, global } = useSelector((state) => state.animateSlice);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        right: addCatForm === true ? "0" : "-100%",
      }}
      className=" z-[9999]  addCatForm flex flex-col justify-start items-center w-[23%] absolute bg-[#28243d] h-screen  top-0 "
    >
      <div className=" flex py-6 px-3 justify-between items-center w-full ">
        <p className=" text-xl font-semibold text-[#d4d4d4] ">Add Category</p>

        <MdClose
          onClick={() => dispatch(GlobalOn({ global: true }))}
          className=" text-[#d4d4d4]  cursor-pointer text-xl "
        />
      </div>
    </div>
  );
};

export default AddCategory;
