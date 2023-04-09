import React, { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, TimeScale, LinearScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(LineController, LineElement, PointElement, TimeScale, LinearScale);

const StockChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
          },
          y: {
            type: 'linear',
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default StockChart;
