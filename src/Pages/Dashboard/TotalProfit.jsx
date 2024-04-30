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

const TotalProfit = ({
  type,
  w,
  title,
  width,
  range,
  label,
  income,
  expense
}) => {
  const dispatch = useDispatch();
  const { totalProfit } = useSelector((state) => state.authSlice);
  const { reRender } = useSelector((state) => state.animateSlice);

  const color = useSelector((state) => state.animateSlice);

  let labelf = () => {
    for (let index = 0; index < label.length; index++) {
      if (label[index].type === type) {
        return [label[index].data];
      }
    }
  };

  const labels = labelf()
  


  useEffect(() => {
    dispatch(
      setIncome({
        incomeType:
          type === "radar"
            ? "total"
            : type === "line"
            ? "month"
            : type === "bar"
            ? "daily"
            : type === "polar"
            ? "cash"
            : null,
        labels: labels,
      })
    );
    dispatch(
      setExpense({
        expenseType:
          type === "radar"
            ? "total"
            : type === "line"
            ? "month"
            : type === "bar"
            ? "daily"
            : type === "polar"
            ? "wallet"
            : null,
        labels: labels,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(setTotalProfit((income[labels.length - 1] / 60) * 100));
  }, [income]);

  useEffect(() => {
    dispatch(
      setIncome({
        incomeType:
          type === "radar"
            ? "total"
            : type === "line"
            ? "month"
            : type === "bar"
            ? "daily"
            : type === "polar"
            ? "cash"
            : null,
        labels: labels,
      })
    );
    dispatch(
      setExpense({
        expenseType:
          type === "radar"
            ? "total"
            : type === "line"
            ? "month"
            : type === "bar"
            ? "daily"
            : type === "polar"
            ? "wallet"
            : null,
        labels: labels,
      })
    );
  }, [reRender]);

  const data = {
    labels: labels.find(d => d),
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
            const total = item.reduce((prev, curr) => prev.raw - curr.raw);

            return total < 0
              ? "Total Loss: " + total + "K"
              : "Total Profit: " + total + "K";
          },
        },
      },
    },
    scales: !width && {
      x: {
        min: type === "radar" ? 2019 : 0,
        max: type === "radar" ? 2025 : labels[0].length,
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
        width: width ? width : "37%",
        backgroundColor: color.cardBgColor,
        // height: type === "line" ? "400px" : "auto",
        paddingLeft: width ? "12px" : "12px",
        paddingRight: width ? "2px" : "12px",
        paddingTop: width ? "20px" : "20px",
        paddingBottom: width ? "2px" : "20px",
      }}
      className=" flex shadow gap-3    flex-col justify-end   rounded-md  py-5 items-end "
    >
      {/* { !width && <ReFreshButton />} */}
      <div
        style={{
          color: color.textColor + "e1",
          fontSize: width ? "16px" : "20px",
          paddingBottom: width ? "0px" : "12px",
          height: width ? "15px" : "30px",
        }}
        className=" flex h-[30px]   justify-start gap-3 w-full items-end  font-semibold  "
      >
        <p>{title} </p>

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

      {type === "line" && <Line data={data} options={options}>
        
        </Line>}
      {type === "radar" && <Radar data={data} options={options}>
      </Radar>}
      {type === "bar" && <Bar data={data} options={options}></Bar>}

      {type === "polar" && (
        <PolarArea data={data} options={options}></PolarArea>
      )}
    </div>
  );
};

export default TotalProfit;
