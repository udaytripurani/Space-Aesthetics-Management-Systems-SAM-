import React from 'react';
import { Bar } from 'react-chartjs-2';

function RealTimeOccupancyChart() {
  // Static data for demonstration purposes, replace with real-time data from your API
  const occupancyData = [
    { room: 'Conference Room 1', occupancy: 5 },
    { room: 'Conference Room 2', occupancy: 0 },
    { room: 'Open Workspace', occupancy: 12 },
  ];

  // Prepare data for the chart
  const chartData = {
    labels: occupancyData.map((data) => data.room),
    datasets: [
      {
        label: 'Current Occupancy',
        data: occupancyData.map((data) => data.occupancy),
        backgroundColor: '#3f51b5',
      },
    ],
  };

  // Chart configuration
  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
  };

  return (
    <div style={{ width: '50%', height: '300px', margin: 'auto' }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default RealTimeOccupancyChart;
