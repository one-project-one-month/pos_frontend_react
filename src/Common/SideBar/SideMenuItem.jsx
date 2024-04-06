/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { menuItemArrowOn } from "../../redux/services/animateSlice";
import { IoIosArrowForward } from "react-icons/io";
import MenuChildrenItem from "./MenuChildrenItem";
import { useState } from "react";

const SideMenuItem = ({ side }) => {
  const dispatch = useDispatch();
  const [menuItemArrow, setMenuItemArrow] = useState(false);
  const currentRoute = useParams();
  return (
    <div className=" flex flex-col gap-1 justify-start items-center h-auto w-[90%] ">
      {side.route ? (
        <NavLink
          to={side.route ? side.route : currentRoute}
          onClick={() => {
            side.children && setMenuItemArrow(!menuItemArrow);
          }}
          className=" menu-item flex w-[100%] justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full "
        >
          <div className=" w-[10%] h-full flex justify-center items-center  ">
            {side.icon}
          </div>
          <div className=" w-[80%] h-full flex justify-start items-center  ">
            {side.routeName}
          </div>

          {side?.children && (
            <div className=" relative  transition-transform flex self-end w-[10%] justify-center items-center  ">
              <IoIosArrowForward
                className=" transition-all   "
                style={{
                  rotate: menuItemArrow === true ? "90deg" : "0deg",
                }}
              />
            </div>
          )}
        </NavLink>
      ) : (
        <div
          to={side.route ? side.route : currentRoute}
          onClick={() => {
            side.children && setMenuItemArrow(!menuItemArrow);
          }}
          className=" menu-item flex w-[100%] justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full "
        >
          <div className=" w-[10%] h-full flex justify-center items-center  ">
            {side.icon}
          </div>
          <div className=" w-[80%] h-full flex justify-start items-center  ">
            {side.routeName}
          </div>

          {side.children && (
            <div className=" relative  transition-transform flex self-end w-[10%] justify-center items-center  ">
              <IoIosArrowForward
                className=" transition-all   "
                style={{
                  rotate: menuItemArrow === true ? "90deg" : "0deg",
                }}
              />
            </div>
          )}
        </div>
      )}

      {side.children &&
        side.children.map((item, index) => {
          return (
            <MenuChildrenItem
              menuItemArrow={menuItemArrow}
              key={index}
              item={item}
            />
          );
        })}
    </div>
  );
};

export default SideMenuItem;
