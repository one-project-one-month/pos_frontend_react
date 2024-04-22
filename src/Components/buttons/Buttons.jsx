import { React, useState } from "react";

import { PiExportBold } from "react-icons/pi";
import { MdDisplaySettings, MdOutlineArrowDropDown } from "react-icons/md";
import { FaPlus, FaCopy, FaFileExcel } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { FaFilePdf, FaFileCsv } from "react-icons/fa6";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import CustomerForm from "../Customer/CustomerForm";
import data from "../../db/db.json";
import { useSelector, useDispatch } from "react-redux";
import Icon from "@mdi/react";

import "./Button.css";
import { mdiSync } from "@mdi/js";
import { setRender, setThemeEditor } from "../../redux/services/animateSlice";

export const ExportButtons = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  // Not Working Yet!
  const exportPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      html: data.customers,
      columns: [
        { header: "Code", dataKey: "customerCode" },
        { header: "Name", dataKey: "customerName" },
        { header: "Date Of Birth", dataKey: "dateOfBirth" },
        { header: "Phone", dataKey: "mobileNo" },
        { header: "Address", dataKey: "gender" },
        { header: "Gender", dataKey: "stateCode" },
        { header: "State Code", dataKey: "townshipCode" },
        { header: "Township Code", dataKey: "address" },
      ],
    });
    doc.save("table.pdf");
  };

  return (
    <div className="export-btn relative mb-5 md:m-0">
      <button
        className="btn px-5 py-2 rounded-lg text-xl bg-slate-500 text-white flex items-center space-x-2"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <span className="export-icon ">
          <PiExportBold />
        </span>
        <p>Export</p>
        <span className="downArrow-icon">
          <MdOutlineArrowDropDown />
        </span>
      </button>
      {showDropDown && (
        <div
          className={`export-dropdown absolute top-[105%] w-full left-0 text-lg overflow-hidden  bg-slate-400 text-white rounded-md `}
        >
          <ul className="text-center">
            <li className="flex items-center justify-center space-x-2 py-3 hover:bg-slate-600">
              <IoIosPrint />
              <p>Print</p>
            </li>
            <li
              className="flex items-center justify-center space-x-2 py-3 hover:bg-slate-600"
              onClick={exportPDF}
            >
              <FaFilePdf />
              <p>PDF</p>
            </li>
            <li className="flex items-center justify-center space-x-2 py-3 hover:bg-slate-600">
              <FaFileCsv />
              <p>CSV</p>
            </li>
            <li className="flex items-center justify-center space-x-2 py-3 hover:bg-slate-600">
              <FaFileExcel />
              <p>Excel</p>
            </li>
            <li className="flex items-center justify-center space-x-2 py-3 hover:bg-slate-600">
              <FaCopy />
              <p>Copy</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const AddNewUserButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="adduser-btn sm:w-full ">
      <button
        className="btn bg-slate-500 text-white h-full px-5 py-3.5 xs:py-2 rounded-lg text-lg flex items-center space-x-2"
        onClick={() => setShowForm(!showForm)}
      >
        <span className="plus-icon">
          <FaPlus className="size-4 lg:size-5" />
        </span>
        <p className="hidden sm:block text-sm lg:text-base">Add New User</p>
      </button>
      {showForm && <CustomerForm setShowForm={setShowForm} />}
    </div>
  );
};

export const ReFreshButton = () => {
  const { reRender } = useSelector((state) => state.animateSlice);
  const color = useSelector((state) => state.animateSlice);


  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setRender(reRender + 1))}
      style={{
        color:color.textColor,
        backgroundColor:color.cardBgColor
      }}
      className=" shadow-md  justify-between items-center px-2 py-1 rounded flex gap-2  cursor-pointer  "
    >
      <p>Refresh</p>
      <Icon path={mdiSync} size={0.8} color={color.textColor} />
    </div>
  );
};


export const ThemeChangerButton = () => {
    const {themeEditor, cardBgColor,textColor  } = useSelector((state) => state.animateSlice);
    const dispatch = useDispatch();


    return(
        <div onClick={()=> dispatch(setThemeEditor(true))} style={{
            color:textColor + 'e1',
            backgroundColor:cardBgColor+'57'
        }} className=" fixed text-3xl z-[9999] backdrop-blur rounded-l-md  p-4 top-[60px] cursor-pointer  " >
            <MdDisplaySettings/>
        </div>
    )
}
