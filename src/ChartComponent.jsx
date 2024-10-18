import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'pie', 
        data: data,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
