import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GlobalOn, setCatMod } from "../../redux/services/animateSlice";
import {
  useAddProductsCategoryMutation,
  useGetProductsCategoryQuery,
  useUpdateCategoryMutation,
  useUpdateProductsMutation,
} from "../../redux/api/AuthApi";

const AddCategory = () => {
  const { addCatForm, global, catMod, catId } = useSelector(
    (state) => state.animateSlice
  );
  const dispatch = useDispatch();

  const { data } = useGetProductsCategoryQuery(catId);

  const color = useSelector((state) => state.animateSlice);

  const [catName, setCatName] = useState("");
  const [catCode, setCatCode] = useState("");

  useEffect(() => {
    setCatName(data?.data.category?.productCategoryName);
  }, [data]);

  const [addCat] = useAddProductsCategoryMutation();
  const [updateCat] = useUpdateCategoryMutation();

  const addCategory = async () => {
    const addData =
      catMod === true
        ? await updateCat({
            data: {
              productCategoryCode: data?.data.category?.productCategoryCode,
              productCategoryName: catName,
            },
            id: catId,
          })
        : await addCat({
            productCategoryCode: catCode,
            productCategoryName: catName,
          });

    addData.data && dispatch(GlobalOn({ global: false }));

    addData.data && window.location.reload(true);
    addData.data && dispatch(setCatMod(false));
  };

  return (
    <div
      style={{
        right: addCatForm === true ? "0" : "-100%",
      }}
      className=" z-[9999]  addCatForm flex flex-col justify-start items-center w-[23%] absolute bg-[#28243d] h-screen  top-0 "
    >
      <div className=" flex py-6 px-3 justify-between items-center w-full ">
        <p className=" text-xl font-semibold text-[#d4d4d4] "> {catMod === true ? 'Update' : 'Add'}  Category</p>

        <MdClose
          onClick={() => dispatch(GlobalOn({ global: true }))}
          className=" text-[#d4d4d4]  cursor-pointer text-xl "
        />
      </div>

      <div
        style={{
          color: color.textColor,
          backgroundColor: color.cardBgColor,
        }}
        className=" w-full flex justify-start items-start flex-col gap-5 "
      >
        {catMod === false && (
          <div className=" w-[90%] flex flex-col justify-start items-start gap-2 p-2 ">
            <label htmlFor="categoryCode">Category Code : </label>
            <input
              required
              style={{
                color: color.textColor,
                backgroundColor: color.cardBgColor,
                border: `1px solid ${color.textColor} `,
              }}
              value={catCode}
              onChange={(e) => setCatCode(e.target.value)}
              className=" p-1 outline-none rounded   "
              type="text"
              name="categoryCode"
              id=""
            />
          </div>
        )}

        <div className=" w-[90%] flex flex-col justify-start items-start gap-2 p-2 ">
          <label htmlFor="categoryName">Category Name : </label>
          <input
            required
            style={{
              color: color.textColor,
              backgroundColor: color.cardBgColor,
              border: `1px solid ${color.textColor} `,
            }}
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            className=" p-1 outline-none rounded   "
            type="text"
            name="categoryName"
            id=""
          />
        </div>

        <div className=" w-[90%] flex flex-col justify-start items-start gap-2 p-2 ">
          <div
            style={{
              color: color.textColor,
              backgroundColor: color.BgColor,
              border: `1px solid ${color.textColor} `,
            }}
            onClick={addCategory}
            className=" rounded flex justify-center items-center px-3 py-2 "
          >
            <p> {catMod === true ? "Update" : "Add"} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
