import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";

import { routes } from "./Route/data";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { ThemeChangerButton } from "./Components/buttons/Buttons";
import Theme from "./Common/Theme/Theme";
import { useSelector } from "react-redux";
import AddCategory from "./Pages/ProductCategory/AddCategory";
import AddProductNew from "./Pages/Product/AddProductsNew";

function App() {
  const color = useSelector((state) => state.animateSlice);

  return (
    <section
      style={{
        backgroundColor: `${color.bgColor}`,
      }}
      className="w-full flex justify-end items-end h-screen max-h-screen overflow-y-auto overflow-x-hidden relative "
    >
      <BrowserRouter>
        <SideBar />
        <NavBar />

        <ThemeChangerButton />

        <Theme />

        <div className="p-5 top-[50px] w-full flex justify-between items-center overflow-x-hidden  h-full bg-transparent ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
            {routes.map((route) =>
              route.children.map((general, index) => {
                return (
                  <>
                    <Route
                      key={index}
                      path={general.path}
                      element={general.Component}
                    />
                    {general?.children &&
                      general.children.map((children, index) => {
                        return (
                          <Route
                            key={index}
                            path={children.path}
                            element={children.Component}
                          />
                        );
                      })}
                  </>
                );
              })
            )}
          </Routes>
        </div>
      </BrowserRouter>
      <AddCategory/>
      <AddProductNew/>
    </section>
  );
}

export default App;
