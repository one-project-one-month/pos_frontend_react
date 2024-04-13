import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { routes } from "./Route/data";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCategory from "./Pages/ProductCategory/AddCategory";
import Footer from "./Common/Footer/Footer";

function App() {
  return (
    <section className="w-full flex justify-end items-end h-screen max-h-screen overflow-x-auto relative bg-[#28243d]">
      <BrowserRouter>
        
          <SideBar />
          <NavBar />
          
          <div className="p-5 top-[50px] w-full flex justify-between items-center   h-full bg-transparent ">
          
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
      {/* <AddCategory /> */}


    </section>
  );
}

export default App;
