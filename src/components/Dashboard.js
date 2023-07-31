import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const Dashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', // You can change the type of chart (e.g., 'bar', 'line', 'pie', etc.)
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize the background color
            borderColor: 'rgba(75, 192, 192, 1)', // Customize the border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Start the y-axis at zero
          },
        },
      },
    });

    return () => {
      myChart.destroy(); // Clean up the chart when the component unmounts
    };
  }, []);

  return (
    <div className="container mt-4" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Dashboard</h2>
          <p>Welcome to the Dashboard! This is the main page after user authentication.</p>
          {/* Add other components, charts, tables, or statistics here */}
          <canvas id="myChart" ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
