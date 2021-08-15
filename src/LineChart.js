import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 6, 3, 5, 6, 3],
      fill: true,
      backgroundColor: "rgb(255, 99, 132, .7)",
      borderColor: "rgba(255, 99, 132, 0.2)"
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  responsive: true
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
