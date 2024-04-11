/* eslint-disable react/jsx-no-undef */
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import SideMenu from "./SideMenu";

// eslint-disable-next-line react/prop-types
const SideBar = ({ menuItemArrow }) => {
    return (
        <aside className=" sideBarSection ">
            <div className="tracking-wide h-full flex flex-col gap-3 w-full justify-start items-start border-r-2">
                <NavLink
                    to={"/"}
                    className=" cursor-pointer  logo px-4 py-2 justify-center items-start font-bold text-[#9055fd] "
                >
                    <p>LOGO</p>
                </NavLink>
                <div className=" flex flex-col gap-1 justify-start items-center h-auto w-[90%] ">
                    <div
                        style={{
                            // eslint-disable-next-line no-undef
                            visibility:
                                menuItemArrow === true ? "visible" : "collapse",
                            // eslint-disable-next-line no-undef
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

                {SideMenu?.map((side, index) => {
                    return <SideMenuItem side={side} key={index} />;
                })}
            </div>
        </aside>
    );
};

export default SideBar;
