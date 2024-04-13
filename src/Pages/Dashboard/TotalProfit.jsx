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
  import faker from "faker";
import { Line } from "react-chartjs-2";
  
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
    const data = {
        labels: labels,
        datasets: [
          {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
            label: "Income",
            backgroundColor: "#186F65",
            borderColor: "#186F65",
            pointBorderColor: "#d4d4d4",
            pointBorderWidth: 0.3,
            borderWidth: 0.5,
            tension: 0.5,
          },
          {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
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
          title: {
            display: true,
            text: "Total Profit",
            position:'top',
            fontSize:40
          },
          tooltip: {
            callbacks: {
              footer: (tooltipItems) => {
                let income = 0;
                console.log(tooltipItems);
    
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
    <Line data={data} options={options}></Line>
  )
}

export default TotalProfit