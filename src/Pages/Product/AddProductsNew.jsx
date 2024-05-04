import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GlobalOn, setPdId, setPdMod } from "../../redux/services/animateSlice";
import {
  useAddProductsMutation,
  useGetProductsCategoryQuery,
  useGetProductsQuery,
  useUpdateProductsMutation,
} from "../../redux/api/AuthApi";

const AddProductNew = () => {
  const { addPdForm, global, pdMod, pdId } = useSelector(
    (state) => state.animateSlice
  );
  const dispatch = useDispatch();

  const { data } = useGetProductsQuery(pdId);
  const cat = useGetProductsCategoryQuery();

  const catData = cat?.data?.data?.category


  const color = useSelector((state) => state.animateSlice);

  const [catName, setCatName] = useState("");
  const [catCode, setCatCode] = useState("");
  const [catPrice,setCatPrice] = useState("")
  const [catCat,setCatCat] = useState("")

  const lastProduct =  pdMod === false ?  data?.data.products[data?.data.products?.length-1] : null

  useEffect(() => {
    pdMod === true ?  setCatName(data?.data.product?.productName) : setCatName(lastProduct?.productName)
    setCatCode( pdMod === true ? data?.data.product?.productCode :lastProduct?.productCode)
    setCatPrice(pdMod === true ? data?.data.product?.price :lastProduct?.price)
    setCatCat(pdMod === true ? data?.data.product?.categoryCode :lastProduct?.categoryCode)
  }, [data]);

  const [addCat] = useAddProductsMutation();
  const [updateCat] = useUpdateProductsMutation();

  const addCategory = async () => {
    const addData =
      pdMod === true
        ? await updateCat({
            data: {
              productCode: catCode,
              productName: catName,
              price: Number(catPrice),
              categoryCode: `${catCat}`,
            },
            id: pdId,
          })
        : await addCat({
          productCode: catCode,
          productName: catName,
          price: Number(catPrice) ,
          categoryCode: `${catCat}`,
          });

    addData.data && dispatch(GlobalOn({ global: false }));

    addData.data && window.location.reload(true);
    addData.data && dispatch(setPdMod(false));

  };

  return (
    <div
      style={{
        right: addPdForm === true ? "0" : "-100%",
      }}
      className=" z-[9999]  addPdForm flex flex-col justify-start items-center w-[23%] absolute bg-[#28243d] h-screen  top-0 "
    >
      <div className=" flex py-6 px-3 justify-between items-center w-full ">
        <p className=" text-xl font-semibold text-[#d4d4d4] ">
          {" "}
          {pdMod === true ? "Update" : "Add"} Product
        </p>

        <MdClose
          onClick={() =>{ dispatch(GlobalOn({ global: true })),
          dispatch(setPdId(false))
        }
        }
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
        {pdMod === false && (
          <div className=" w-[90%] flex flex-col justify-start items-start gap-2 p-2 ">
            <label htmlFor="categoryCode">Product Code : </label>
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
          <label htmlFor="categoryName">Product Name : </label>
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
          <label htmlFor="categoryName">Product Price : </label>
          <input
            required
            style={{
              color: color.textColor,
              backgroundColor: color.cardBgColor,
              border: `1px solid ${color.textColor} `,
            }}
            value={catPrice}
            onChange={(e) => setCatPrice(e.target.value)}
            className=" p-1 outline-none rounded   "
            type="number"
            name="categoryName"
            id=""
          />
        </div>

        <div className=" w-[90%] flex flex-col justify-start items-start gap-2 p-2 ">
          <label htmlFor="categoryCode"> Category Code : </label>
          <input
            required
            style={{
              color: color.textColor,
              backgroundColor: color.cardBgColor,
              border: `1px solid ${color.textColor} `,
            }}
            value={catCat}
            onChange={(e) => setCatCat(e.target.value.toString())}
            className=" p-1 outline-none rounded   "
            type="text"
            name="categoryCode"
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
            <p> {pdMod === true ? "Update" : "Add"} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductNew;
