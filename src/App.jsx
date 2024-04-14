import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import { routes } from "./Route/data";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCategory from "./Pages/ProductCategory/AddCategory";

function App() {
    return (
        <section className="mainSection">
            <BrowserRouter>
                <div className="grid grid-cols-5 w-full h-screen relative">
                    <section className="sidebar col-span-1 bg-[#28243d]">
                        <SideBar />
                    </section>
                    <section className="col-span-4 bg-[#28243d]">
                        <div className="">
                            <NavBar />
                        </div>
                        <div className="p-5 h-page ">
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
                                                    general.children.map(
                                                        (children, index) => {
                                                            return (
                                                                <Route
                                                                    key={index}
                                                                    path={
                                                                        children.path
                                                                    }
                                                                    element={
                                                                        children.Component
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    )}
                                            </>
                                        );
                                    })
                                )}
                            </Routes>
                        </div>
                    </section>
                </div>
            </BrowserRouter>
            {/* <AddCategory /> */}
        </section>
    );
}

export default App;
