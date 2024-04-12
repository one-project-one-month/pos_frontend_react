/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuChildrenItem = ({ item, menuItemArrow }) => {
  return (
    <div
      style={{
        visibility: menuItemArrow === true ? "visible" : "hidden",
        height: menuItemArrow === true ? "auto" : "0px",
      }}
      className=" flex flex-col w-full  justify-start items-center "
    >
      <NavLink
        to={item.route}
        className=" rounded-r-full py-1 text-[#e6e6eb]  cursor-pointer menu-item flex  justify-start px-[23px] items-center gap-3 w-full "
      >
        {item.icon ? (
          <div className=" w-[10%] h-full flex justify-center items-center  ">
            {item.icon}
          </div>
        ) : (
          <div className=" p-1 rounded-full outline-[#e6e6eb] outline-[1.5px] outline "></div>
        )}
        <div className=" flex justify-start items-center   ">
          <p>{item.childrenName}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default MenuChildrenItem;
