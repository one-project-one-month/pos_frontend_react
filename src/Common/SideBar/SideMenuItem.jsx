/* eslint-disable react/prop-types */
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import MenuChildrenItem from "./MenuChildrenItem";
import { useState } from "react";

const SideMenuContent = ({ side, menuItemArrow }) => {
  const getArrowIconRotationClass = (isOpen) => {
    if (isOpen) {
      return "transition-all rotate-90";
    }
    return "rotate-0";
  };

  const getSideItemClass = () => {
    return `h-full flex items-center`;
  };
  return (
    <div className=" menu-item flex w-full justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full ">
      <div className={`w-[10%] justify-center ${getSideItemClass()}`}>
        {side.icon}
      </div>
      <div className={`w-[80%] justify-start ${getSideItemClass()}`}>
        {side.routeName}
      </div>

      {side?.children && (
        <div className=" relative transition-transform flex self-end w-[10%] justify-center items-center">
          <IoIosArrowForward
            className={`${getArrowIconRotationClass(menuItemArrow)}`}
          />
        </div>
      )}
    </div>
  );
};

const SideMenuItem = ({ side }) => {
  const [menuItemArrow, setMenuItemArrow] = useState(false);
  const currentRoute = useParams();

  const handleClickNavLink = () => {
    if (side.children) {
      setMenuItemArrow(!menuItemArrow);
    }
  };

  return (
    <div className="flex flex-col gap-1 justify-start items-center w-[90%]">
      <NavLink
        to={side.route || currentRoute}
        onClick={handleClickNavLink}
        className="w-full"
      >
        <SideMenuContent side={side} menuItemArrow={menuItemArrow} />
      </NavLink>
      {side.children &&
        side.children.map((item, index) => {
          return (
            <MenuChildrenItem
              menuItemArrow={menuItemArrow}
              key={`${index}-${item.childrenName.length}`}
              item={item}
            />
          );
        })}
    </div>
  );
};

export default SideMenuItem;
