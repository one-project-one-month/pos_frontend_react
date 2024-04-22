/* eslint-disable no-constant-condition */
import {
  Chart as ChartJs,
  LineElement,
  BarElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Line, Bar, Radar, PolarArea } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {
  setExpense,
  setIncome,
  setTotalProfit,
} from "../../redux/services/authSlice";
import { useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import { ReFreshButton } from "../../Components/buttons/Buttons";

ChartJs.register(
  LineElement,
  BarElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);
let labels = [];

for (let index = 2019; index < 2025; index++) {
  labels.push(index);
}

const TotalProfit = ({ type, w }) => {
  const dispatch = useDispatch();
  const { income, expense, totalProfit } = useSelector(
    (state) => state.authSlice
  );
  const { reRender } = useSelector((state) => state.animateSlice);

  const color = useSelector((state) => state.animateSlice);

  useEffect(() => {
    dispatch(setIncome(labels));
    dispatch(setExpense(labels));
  }, []);

  useEffect(() => {
    dispatch(
      setTotalProfit(
        ((income[labels.length - 1] - expense[labels.length - 1]) / 60) * 100
      )
    );
  }, [income]);

  useEffect(() => {
    dispatch(setIncome(labels));
    dispatch(setExpense(labels));
  }, [reRender]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: income,
        label: "Income",
        backgroundColor:
          type === "radar" || "polar"
            ? `${color.upTrendColor}57`
            : `${color.upTrendColor}`,
        borderColor: `${color.upTrendColor}`,
        pointBorderColor: `${color.textColor}`,
        pointBorderWidth: 0.3,
        borderWidth: 0.5,
        tension: type !== "line" ? 0 : 0.5,
        borderRadius: type === "radar" || "polar" ? 0 : 100,
      },
      {
        data: expense,
        label: "Expense",
        backgroundColor:
          type === "radar" || "polar"
            ? `${color.downTrendColor}57`
            : `${color.downTrendColor}`,
        borderColor: `${color.downTrendColor}`,
        pointBorderColor: `${color.textColor}`,
        pointBorderWidth: 0.3,
        borderWidth: 0.5,
        tension: type !== "line" ? 0 : 0.5,
        borderRadius: type === "radar" || "polar" ? 0 : 100,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },

    animations: {
      tension:
        type !== "line"
          ? 0
          : {
              duration: 1000,
              easing: "linear",
              from: 0.4,
              to: 0.8,
              loop: true,
            },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          footer: (item) => {
            console.log(item);
            const total = item.reduce((prev, curr) => prev.raw - curr.raw);

            return total < 0
              ? "Total Loss: " + total + "K"
              : "Total Profit: " + total + "K";
          },
        },
      },
    },
    scales: {
      x: {
        min: 2019,
        max: 2025,
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 60,
        ticks: {
          stepSize: 10,
          callback: (value) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div
      style={{
        width: w === "full" ? "100%" : "48%",
        backgroundColor: color.cardBgColor,
      }}
      className=" flex shadow gap-3   flex-col justify-end   rounded-md  px-3 py-5 items-end "
    >
      <ReFreshButton />
      <div
        style={{
          color: color.textColor + "e1",
        }}
        className=" flex h-[30px] pb-3  justify-start gap-3 w-full items-end text-2xl font-semibold  "
      >
        <p>Total Profit </p>

        <div className=" flex justify-center items-center ">
          <div className=" flex flex-col h-full  gap-0 text-sm justify-center items-center ">
            {totalProfit < 0 ? (
              <p
                style={{
                  color: color.downTrendColor,
                }}
              >
                {" "}
                {totalProfit.toFixed(2) * -1}%{" "}
              </p>
            ) : (
              <p
                style={{
                  color: color.upTrendColor,
                }}
              >
                {totalProfit.toFixed(2)}%
              </p>
            )}
          </div>

          <div className=" flex flex-col h-full transition-all  gap-0 text-sm justify-center items-center ">
            <Icon
              path={totalProfit < 0 ? mdiMenuDown : mdiMenuUp}
              size={1}
              color={
                totalProfit < 0 ? color.downTrendColor : color.upTrendColor
              }
            />
          </div>
        </div>
      </div>

      {type === "bar" && <Bar data={data} options={options}></Bar>}
      {type === "line" && <Line data={data} options={options}></Line>}
      {type === "radar" && <Radar data={data} options={options}></Radar>}
      {type === "polar" && (
        <PolarArea data={data} options={options}></PolarArea>
      )}
    </div>
  );
};

export default TotalProfit;
