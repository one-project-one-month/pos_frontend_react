import "./nav.css";
import {  useSelector } from "react-redux";

const NavBar = () => {
    const color = useSelector((state) => state.animateSlice);

    return (
        <section style={{
            backgroundColor:color.bgColor+'57',
            color:color.textColor
        }} className=" fixed  right-0 top-0 z-[999] backdrop-blur-sm  w-[80%] py-5 px-2  ">
            <h1></h1>
        </section>
    );
};

export default NavBar;
