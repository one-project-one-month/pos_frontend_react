/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const MenuChildrenItem = ({item,menuItemArrow,color}) => {

  const [isHover, setIsHover] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const menuItem = document.getElementById("menu-item");

  const buttonStyles = {
    color: color.textColor || "black",
    backgroundImage: isHover
      ? `linear-gradient(-90deg, ${color.bgColor}, ${color.cardBgColor}, ${color.bgColor})`:isActive
      ? `linear-gradient(-90deg, ${color.bgColor}, ${color.cardBgColor}, ${color.bgColor})`
      : "none",
  };



  const sideBar = document.getElementById("menuChild");

  const navLinkElement = sideBar?.getElementsByTagName("a");


  useEffect(() => {
    for (let index = 0; index < navLinkElement?.length; index++) {
      console.log(navLinkElement[index].classList);

      const classList = navLinkElement[index]?.classList;

      for (let v = 0; v < classList.length; v++) {
        if(classList[v].includes('active')) { setIsActive(true)}
        
      }
    }


  }, [isActive]);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  return (
    <div id='menuChild'
    style={{
      visibility:
        menuItemArrow === true ? "visible" : "hidden",
      height: menuItemArrow === true ? "auto" : "0px",
    }}
    className=" flex flex-col w-full  justify-start items-center "
  >
    <NavLink
      to={item.route}
      style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      className=" rounded-r-full py-2   cursor-pointer menu-item flex  justify-start px-[23px] items-center gap-3 w-full "
    >
      {item.icon ? (
        <div className=" w-[10%] h-full flex justify-center items-center  ">
        {item.icon}
      </div>
      ) : (
        <div style={{
          outline:color.textColor,
        }} className=" p-1 rounded-full outline-[#e6e6eb] outline-[1.5px] outline "></div>
      )}
      <div className=" flex justify-start items-center   ">
        <p>{item.childrenName}</p>
      </div>
    </NavLink>
  </div>
  )
}

export default MenuChildrenItem