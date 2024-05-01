import CongratulationsCard from "./CongratulationsCard";
import SummaryCards from "./SummaryCards";
import TotalProfit from "./TotalProfit";
import "./dashboard.css";

import "./utils";

import { useSelector } from "react-redux";
import Footer from "../../Common/Footer/Footer";
import { ReFreshButton } from "../../Components/buttons/Buttons";

const Dashboard = () => {
  const {  totalDailyProfit } = useSelector(
    (state) => state.authSlice
  );
  const { bgColor, textColor } = useSelector((state) => state.animateSlice);
  const color = useSelector((state) => state.animateSlice);

  let years = [];

  for (let index = 2019; index < 2025; index++) {
    years.push(index);
  }
  const type = [
    {
      type: "line",
      title: "Monthly Overview",
      range: 12,
      data: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },

    {
      type: "radar",
      title: "Total Revenue",
      width: "260px",
      range: 2025,
      data: years,
    },

    {
      type: "bar",
      title: "Daily Sale Report",
      range: 7,
      data: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },

    {
      type: "polar",
      title: "Payment Method",
      width: "400px",
      range: 2,
      data: ["Cash", "Wallet"],
    },
  ];

  const {
    income,
    expense,
    dailyIncome,
    monthlyIncome,
    dailyExpense,
    monthlyExpense,
    cash,
    wallet,
  } = useSelector((state) => state.authSlice);

  return (
    <section
      style={{
        backgroundColor: bgColor,
      }}
      className=" dashBoardSection    "
    >
      <ReFreshButton />

      <div className=" relative flex  w-full justify-end items-end gap-3 h-[400px]  ">
        <CongratulationsCard
          color={color}
          totalProfit={totalDailyProfit - 1.0}
        />

        <SummaryCards sumColor={color} />
      </div>

      <div
        style={{
          color: textColor,
        }}
        className=" flex flex-col gap-6     rounded-md  w-full h-auto "
      >
        {/* <TotalProfit w={'full'} type={'line'} /> */}
        <div
          id="chart"
          className=" flex flex-wrap  gap-[27px] justify-end items-start  w-[100%] "
        >
          {type.map(({ type, title, width, range }, index, data) => {
            return (
              <TotalProfit
                key={type}
                income={
                  type === "line"
                    ? monthlyIncome
                    : type === "radar"
                    ? income
                    : type === "bar"
                    ? dailyIncome
                    : type === "polar"
                    ? cash
                    : null
                }
                expense={
                  type === "line"
                    ? monthlyExpense
                    : type === "radar"
                    ? expense
                    : type === "bar"
                    ? dailyExpense
                    : type === "polar"
                    ? wallet
                    : null
                }
                label={data}
                range={range}
                width={width}
                title={title}
                type={type}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Dashboard;
