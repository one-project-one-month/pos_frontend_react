import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
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
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const labels = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

const TotalProfit = () => {
  const dispatch = useDispatch();
  const { income, expense, totalProfit } = useSelector(
    (state) => state.authSlice
  );
  const { reRender } = useSelector((state) => state.animateSlice);

  useEffect(() => {
    dispatch(setIncome(labels));
    dispatch(setExpense(labels));
    dispatch(
      setTotalProfit(
        ((income[labels.length - 1] - expense[labels.length - 1]) / 60) * 100
      )
    );
  }, []);

  useEffect(() => {
    dispatch(setIncome(labels));
    dispatch(setExpense(labels));
    dispatch(
      setTotalProfit(
        ((income[labels.length - 1] - expense[labels.length - 1]) / 60) * 100
      )
    );
  }, [reRender]);

  const data = {
    labels: labels,
    datasets: [
      {
        data: income,
        label: "Income",
        backgroundColor: "#186F65",
        borderColor: "#186F65",
        pointBorderColor: "#d4d4d4",
        pointBorderWidth: 0.3,
        borderWidth: 0.5,
        tension: 0.5,
      },
      {
        data: expense,
        label: "Expense",
        backgroundColor: "#E2434B",
        borderColor: "#E2434B",
        pointBorderColor: "#d4d4d4",
        pointBorderWidth: 0.3,
        borderWidth: 0.5,
        tension: 0.5,
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
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.7,
        to: 0.3,
        loop: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          footer: (tooltipItems) => {
            let income = 0;

            tooltipItems.reduce(
              (prev, curr) => (income += prev.parsed.y - curr.parsed.y)
            );

            return income < 0
              ? "Total Loss: " + income + "K"
              : "Total Profit: " + income + "K";
          },
        },
      },
    },
    scales: {
      x: {
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
    <div className=" flex flex-col justify-start w-full p-2 items-start ">
      <div className=" flex  justify-start gap-2 w-full items-center text-2xl font-semibold text-[#d4d4d4e1] ">
        <p>Total Profit </p>
        <div className=" flex flex-col h-full  gap-0 text-sm justify-center items-center ">
          {totalProfit < 0 ? (
            <p className=" text-[#E2434B] "> {totalProfit.toFixed(2) * -1}% </p>
          ) : (
            <p className=" text-[#186F65] ">{totalProfit.toFixed(2)}%</p>
          )}
        </div>

        <div className=" flex flex-col h-full  gap-0 text-sm justify-center items-center ">
          <Icon
            path={totalProfit < 0 ? mdiMenuDown : mdiMenuUp}
            size={1}
            color={totalProfit < 0 ? "#E2434B" : "#186F65"}
          />
        </div>
      </div>
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default TotalProfit;
