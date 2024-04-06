import "./sidebar.css";

import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { menuItemArrowOn } from "../../redux/services/animateSlice";
import { History, Home, NotepadText, Package } from "lucide-react";

const SideBar = () => {
  const dispatch = useDispatch();
  const { menuItemArrow } = useSelector((state) => state.animateSlice);
  const currentRoute = useParams();
  const SideMenu = [
    {
      routeName: "Dashboard",
      icon: <Home />,
      route: "/",
    },
    {
      routeName: "Products",
      icon: <Package />,
      route: "/products",
    },
    {
      routeName: "Invoice",
      icon: <NotepadText />,
      Item: [
        {
          itemName: "List",
          route: "/invoice-list",
        },
        {
          itemName: "Preview",
          route: "/invoice-preview",
        },
        {
          itemName: "Edit",
          route: "/invoice-edit",
        },
        {
          itemName: "Add",
          route: "/add-new-invoice",
        },
      ],
    },
    {
      routeName: "History",
      icon: <History />,
      route: "/history",
    },
  ];
  return (
    <aside className=" sideBarSection ">
      <div className=" tracking-wide flex flex-col gap-3 w-full justify-start items-start ">
        <NavLink
          to={"/"}
          className=" cursor-pointer  logo px-4 py-2 justify-center items-start font-bold text-[#9055fd] "
        >
          <p>LOGO</p>
        </NavLink>

        {SideMenu.map((side, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col gap-1 justify-start items-center h-auto w-[90%] "
            >
              <NavLink
                to={side.route ? side.route : currentRoute}
                onClick={() => {
                  side.Item &&
                    dispatch(
                      menuItemArrowOn({ menuItemArrow: !menuItemArrow })
                    );
                }}
                className=" flex w-[100%] justify-start gap-2 text-[#e6e6eb] hover:bg-[#3a3541] items-center pt-1 pb-2 px-4 cursor-pointer rounded-r-full "
              >
                <div className=" w-[10%] h-full flex justify-center items-center  ">
                  {side.icon}
                </div>
                <div className=" w-[80%] h-full flex justify-start items-center  ">
                  {side.routeName}
                </div>

                {side.Item && (
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

              {side.Item &&
                side.Item.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        visibility:
                          menuItemArrow === true ? "visible" : "collapse",
                        height: menuItemArrow === true ? "auto" : "0px",
                      }}
                      className=" flex flex-col w-full  justify-start items-center "
                    >
                      <NavLink
                        to={item.route}
                        className=" rounded-r-full py-1 text-[#e6e6eb]  cursor-pointer menu-item flex  justify-start px-[23px] items-center gap-3 w-full "
                      >
                        <div className=" p-1 rounded-full outline-[#e6e6eb] outline-[1.5px] outline "></div>
                        <div className=" flex justify-start items-center   ">
                          <p>{item.itemName}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
