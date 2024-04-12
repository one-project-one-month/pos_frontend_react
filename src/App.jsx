import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { routes } from "./Route/data";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCategory from "./Pages/ProductCategory/AddCategory";

function App() {

  // const data = useGetProductsCategoryQuery('/products')
  // console.log(data);

  return (
    <section className=" bg-[#28243d] mainSection flex relative justify-end  w-full h-screen ">
      <BrowserRouter>
        <SideBar />
        <NavBar />
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
      </BrowserRouter>
      <AddCategory/>
    </section>
  );
}

export default App;
