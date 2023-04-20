"use client";

import { useEffect } from "react";
import { Chart } from "chart.js";

function BarChart() {
  useEffect(() => {
    var ctx = document.getElementById("myBarChart").getContext("2d");
    var myBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [300, 220, 250, 360, 400, 310],
            borderColor: "#009AAC",
            backgroundColor: "#009AAC",
            borderWidth: 2,
            borderRadius: 15,
            borderSkipped: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                min: 0,
                max: 400,
                callback: function (value, index, ticks) {
                  if (value === 0) {
                    return "0";
                  }
                  if (value === 200) {
                    return "200";
                  }
                  if (value === 400) {
                    return "400";
                  }
                },
                fontColor: "#3c3c3c70",
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 0.3,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <>
      <canvas style={{ width: "12rem" }} id="myBarChart"></canvas>
    </>
  );
}
export default BarChart;
