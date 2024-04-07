import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/Header/NavBar";
import SideBar from "./Common/SideBar/SideBar";
import View from "./Route/View";
import Home from "./Pages/Home/Home";
import AddNewInvoice from "./Pages/Invoice/AddNewInvoice";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Product from "./Pages/Product/Product"

function App() {
  return (
    <section className=" bg-[#28243d] mainSection flex relative justify-end  w-full h-screen ">
      <BrowserRouter>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-new-invoice" element={<AddNewInvoice />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path = "product" element= {<Product/>}/>
        </Routes>
      </BrowserRouter>

  
    </section>
  );
}

export default App;
