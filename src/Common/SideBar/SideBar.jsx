import "./sidebar.css";
import { FaRegClipboard } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { menuItemArrowOn } from "../../redux/services/animateSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { menuItemArrow } = useSelector((state) => state.animateSlice);
  return (
    <aside className=" sideBarSection ">
      <div className=" tracking-wide flex flex-col gap-3 w-full justify-start items-start ">
        <NavLink
          to={"/"}
          className=" cursor-pointer  logo px-4 py-2 justify-center items-start font-bold text-[#9055fd] "
        >
          <p>LOGO</p>
        </NavLink>

        <NavLink
          to={"/dashboard"}
          className=" rounded-r-full py-1 text-[#e6e6eb]  cursor-pointer menu-item flex  justify-start px-4 items-center gap-3 w-[90%] "
        >
          <div className=" w-[10%] h-full flex justify-center items-center  ">
            <MdOutlineHome className=" text-[30px] " />
          </div>

          <div className=" flex justify-start items-center   ">
            <p>Dashboard</p>
          </div>
        </NavLink>
        <div className=" flex flex-col gap-1 justify-start items-center h-auto w-[90%] ">
          <div
            onClick={() => {
              dispatch(menuItemArrowOn({ menuItemArrow: !menuItemArrow }));
            }}
            className=" flex w-[100%] justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full "
          >
            <div className=" w-[10%] h-full flex justify-center items-center  ">
              <FaRegClipboard />
            </div>
            <div className=" w-[80%] h-full flex justify-start items-center  ">
              Invoice
            </div>

            <div
              style={{
                rotate: menuItemArrow === true ? "90deg" : "0deg",
              }}
              className=" rotate-0 transition-transform flex self-end w-[10%] justify-center items-center  "
            >
              <IoIosArrowForward />
            </div>
          </div>

          <div
            style={{
              visibility: menuItemArrow === true ? "visible" : "collapse",
              height: menuItemArrow === true ? "auto" : "0px",
            }}
            className=" flex flex-col w-full  justify-start items-center "
          >
            <NavLink
              to={"/add-new-invoice"}
              className=" rounded-r-full py-1 text-[#e6e6eb]  cursor-pointer menu-item flex  justify-start px-[23px] items-center gap-3 w-full "
            >
              <div className=" p-1 rounded-full outline-[#e6e6eb] outline-[1.5px] outline "></div>
              <div className=" flex justify-start items-center   ">
                <p>Add</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
