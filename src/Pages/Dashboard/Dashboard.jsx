import CongratulationsCard from "./CongratulationsCard";
import SummaryCards from "./SummaryCards";
import TotalProfit from "./TotalProfit";
import "./dashboard.css";

import "./utils";

import { useSelector } from "react-redux";
import Footer from "../../Common/Footer/Footer";
import { ReFreshButton } from "../../Components/buttons/Buttons";
import React from "react";

const Dashboard = () => {
  const { totalProfit } = useSelector((state) => state.authSlice);
  const { bgColor,textColor,textColorDim,buttonColor,borderColor,shadowColor }  = useSelector(state => state.animateSlice)
  const color  = useSelector(state => state.animateSlice)

  const type = [
    { type: "bar" },
    { type: "line" },
    { type: "radar" },
    { type: "polar" },
  ];

  return (
    <section style={{
      backgroundColor:bgColor
    }} className=" dashBoardSection overflow-x-hidden   ">
      <ReFreshButton />

      <div className=" relative flex overflow-x-hidden w-full justify-end items-end gap-3 h-[400px]  ">
        <CongratulationsCard color={color} totalProfit={totalProfit - 1.0} />

        <SummaryCards sumColor={color} />
      </div>

      <div style={{
        color:textColor
      }} className=" flex flex-col gap-6     rounded-md  w-full h-auto ">
        {/* <TotalProfit w={'full'} type={'line'} /> */}
        <div
          id="chart"
          className=" flex flex-wrap gap-8 justify-between items-start  w-[100%] "
        >
          {type.map(({ type }) => {
            return <TotalProfit key={type} type={type} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Dashboard;
