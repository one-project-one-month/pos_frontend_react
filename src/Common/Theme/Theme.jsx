import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveTheme,
  setBgColor,
  setCardBgColor,
  setTextColor,
  setThemeEditor,
} from "../../redux/services/animateSlice";
import { MdOutlineClose, MdOutlineGeneratingTokens, MdOutlineSave } from "react-icons/md";
import faker from "faker";
import chroma from "chroma-js";

const Theme = () => {
  const color = useSelector((state) => state.animateSlice);
  const dispatch = useDispatch();

  

  const generateColors = () => {

    const rang1 = faker.datatype.hexaDecimal(6).slice(2,8)
    const rang2 = faker.datatype.hexaDecimal(8).slice(3,9)
   const col = chroma.scale([`#${rang2}`,'#181818'])
   .mode('lch').colors(6)

   const col1 = chroma.scale([`#${rang2}`,col[1]])
   .mode('lch').colors(6)

   const col2 = chroma.scale([col[5],col1[5]])
   .mode('lch').colors(6)


   dispatch(setBgColor(col[0]))

   dispatch(setCardBgColor(col1[3]))
   dispatch(setTextColor(col2[1]))

  };


  return (
    <div
      style={{
        backgroundColor: `${color.cardBgColor}57`,
        color: color.textColor,
        right: color.themeEditor === true ? "0" : "-120%",
        visibility: color.themeEditor === true ? "visible" : "hidden",
      }}
      className=" fixed backdrop-blur transition-all top-[60px] z-[9999999] shadow-lg rounded-l-md w-[40%] h-auto p-4 "
    >
      <div className=" flex justify-between items-center w-full ">
        <h1 className=" text-xl font-medium "> Theme Editor</h1>
        <div
          onClick={() => dispatch(setThemeEditor(false))}
          className=" text-xl flex p-1 rounded-full cursor-pointer  "
        >
          <MdOutlineClose />
        </div>
      </div>

      <div className=" flex flex-col justify-start items-start relative w-full h-full p-8 ">
        <div className=" flex p-2 justify-start items-center ">
          <label className=" px-4 " htmlFor="bgColor">
            Background Color :{" "}
          </label>
          <input
            onChange={(e) => dispatch(setBgColor(e.target.value))}
            className=" rounded cursor-pointer  "
            name="bgColor"
            id="nativeColorPicker1"
            type="color"
            value={color.bgColor}
          />
        </div>

        <div className=" flex p-2 justify-start items-center ">
          <label className=" px-4 " htmlFor="Card Background Color">
            Card Background Color :{" "}
          </label>
          <input
            onChange={(e) => dispatch(setCardBgColor(e.target.value))}
            className=" rounded cursor-pointer  "
            name="Card Background Color"
            id="nativeColorPicker1"
            type="color"
            value={color.cardBgColor}
          />
        </div>

        <div className=" flex p-2 justify-start items-center ">
          <label className=" px-4 " htmlFor="textColorNormal">
            Normal Text Color :{" "}
          </label>
          <input
            onChange={(e) => dispatch(setTextColor(e.target.value))}
            className=" rounded cursor-pointer  "
            name="textColorNormal"
            id="nativeColorPicker1"
            type="color"
            value={color.textColor}
          />
        </div>
      </div>

      <div className=" flex justify-between gap-8 items-center " >
      <div
        style={{
          backgroundColor: color.cardBgColor,
          color: color.textColor,
        }}
        onClick={() =>{ dispatch(saveTheme(true))
            dispatch(setThemeEditor(false))
        }}
        className=" flex justify-center shadow-md cursor-pointer font-medium items-center w-[200px] gap-2 px-2 py-3 rounded  "
      >
        <p>Save Theme</p>
        <MdOutlineSave />
      </div>

      <div
        style={{
          backgroundColor: color.cardBgColor,
          color: color.textColor,
        }}
        onClick={generateColors}
        className=" flex justify-center shadow-md cursor-pointer font-medium items-center w-[200px] gap-2 px-2 py-3 rounded  "
      >
        <p>Generate Theme</p>
        <MdOutlineGeneratingTokens />
      </div>
      </div>

     
    </div>
  );
};

export default Theme;
