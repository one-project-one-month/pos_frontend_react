/* eslint-disable react/prop-types */
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import MenuChildrenItem from "./MenuChildrenItem";
import { useState } from "react";

const SideMenuItem = ({ side, color }) => {
  const [menuItemArrow, setMenuItemArrow] = useState(false);
  const currentRoute = useParams();
  const [isHover, setIsHover] = useState(false);

  const buttonStyles = {
    color: color.textColor || "black",
    backgroundImage: isHover
      ? `linear-gradient(-90deg, ${color.bgColor}, ${color.cardBgColor}, ${color.bgColor})`
      : "none",
  };

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);
  return (
    <div
      id="side"
      className=" flex flex-col gap-1 justify-start items-center h-auto w-[90%] "
    >
      {side.route ? (
        <NavLink
          to={side.route ? side.route : currentRoute}
          onClick={() => {
            side.children && setMenuItemArrow(!menuItemArrow);
          }}
          id="menu-item"
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" menu-item flex w-[100%] justify-start gap-2   items-center pt-2 pb-3 px-4 cursor-pointer rounded-r-full "
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
        <NavLink
          to={side.route ? side.route : currentRoute}
          onClick={() => {
            side.children && setMenuItemArrow(!menuItemArrow);
          }}
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" menu-item flex w-[100%] justify-start gap-2   items-center pt-2 pb-3 px-4 cursor-pointer rounded-r-full "
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
        </NavLink>
      )}

      {side.children &&
        side.children.map((item, index) => {
          return (
            <MenuChildrenItem
              menuItemArrow={menuItemArrow}
              key={index}
              item={item}
              color={color}
            />
          );
        })}
    </div>
  );
};

export default SideMenuItem;
