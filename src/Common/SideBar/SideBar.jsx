import "./sidebar.css";
import { NavLink } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import SideMenu from "./SideMenu";
import { menuItemArrowOn } from "../../redux/services/animateSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const { menuItemArrow } = useSelector((state) => state.animateSlice);
  return (
    <aside className=" flex fixed left-0 w-[20%] h-screen bg-[#28243d] rounded-br-md  py-2 ">
      <div className="tracking-wide flex flex-col gap-3 w-full h-full bg-[#28243d] justify-start items-start">
        <NavLink
          to={"/"}
          className="cursor-pointer logo px-4 py-2 justify-center items-start font-bold text-[#9055fd]"
        >
          <p>LOGO</p>
        </NavLink>

        <div className="flex  flex-col gap-1 justify-start items-center h-auto w-[90%]">
          <div
            onClick={() => {
              dispatch(menuItemArrowOn({ menuItemArrow: !menuItemArrow }));
            }}
            className="flex w-[100%] justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full"
          ></div>

          <div
            style={{
              visibility: menuItemArrow === true ? "visible" : "collapse",
              height: menuItemArrow === true ? "auto" : "0px",
            }}
            className="flex flex-col w-full justify-start items-center"
          ></div>
        </div>

        {SideMenu?.map((side, index) => {
          return <SideMenuItem side={side} key={index} />;
        })}
      </div>
    </aside>
  );
};

export default SideBar;
