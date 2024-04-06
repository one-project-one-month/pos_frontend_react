/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const RenderIcon = ({ icon }) => {
  return (
    <div className="w-[10%] h-full flex justify-center items-center">
      {icon || (
        <div className="p-1 rounded-full outline-[#e6e6eb] outline-[1.5px] outline"></div>
      )}
    </div>
  );
};
const MenuChildrenItem = ({ item, menuItemArrow: isOpen }) => {
  const getMenuChildItemShowHiddenClass = (isOpen) => {
    if (isOpen) {
      return "visible h-auto";
    }
    return "hidden h-0";
  };
  return (
    <div
      className={`flex flex-col w-full justify-start items-center ${getMenuChildItemShowHiddenClass(
        isOpen
      )}`}
    >
      <NavLink
        to={item.route}
        className="rounded-r-full py-1 text-[#e6e6eb] cursor-pointer menu-item flex justify-start px-[23px] items-center gap-3 w-full"
      >
        <RenderIcon icon={item.icon} />
        <div className="flex justify-start items-center">
          <p>{item.childrenName}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default MenuChildrenItem;
