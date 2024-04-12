import "./sidebar.css";
import { NavLink } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import SideMenu from "./SideMenu";

const SideBar = () => {
  return (
    <aside className=" sideBarSection ">
      <div className=" tracking-wide flex flex-col gap-3 w-full justify-start items-start ">
        <NavLink
          to={"/"}
          className=" cursor-pointer  logo px-4 py-2 justify-center items-start font-bold text-[#9055fd] "
        >
          <p>LOGO</p>
        </NavLink>

        {SideMenu?.map((side, index) => {
          return <SideMenuItem side={side} key={index} />;
        })}
      </div>
    </aside>
  );
};

export default SideBar;
