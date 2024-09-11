'use client'

// Import necessary components from Chart.js and register them
import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import styles from '../styles/dashboard.module.css';
import Header from '../components/Header';
import ChartSection from '../components/ChartSection';
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

// Register necessary components for Chart.js to work
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [error, setError] = useState(null); // state to track errors

  useEffect(() => {
    async function fetchData() {
      try {
        const [candlestick, line, bar, pie] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/candlestick-data/"),
          axios.get("http://127.0.0.1:8000/api/line-chart-data/"),
          axios.get("http://127.0.0.1:8000/api/bar-chart-data/"),
          axios.get("http://127.0.0.1:8000/api/pie-chart-data/"),
        ]);

        setCandlestickData(candlestick.data);
        setLineChartData(line.data);
        setBarChartData(bar.data);
        setPieChartData(pie.data);
      } catch (error) {
        setError('Failed to load data. Please try again later.'); // Set error message if API fails
        console.error("Error fetching data:", error); // Log the error for debugging
      }
    }
    fetchData();
  }, []);

  // If there is an error, display an error message
  if (error) {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.errorMessage}>{error}</div> {/* Error message displayed here */}
      </div>
    );
  }

  // If the data hasn't loaded yet, display a loading message
  if (!candlestickData || !lineChartData || !barChartData || !pieChartData) {
    return <div>Loading...</div>;
  }

  const lineData = {
    labels: lineChartData.labels,
    datasets: [
      {
        label: "Line Chart",
        data: lineChartData.data,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  const barData = {
    labels: barChartData.labels,
    datasets: [
      {
        label: "Bar Chart",
        data: barChartData.data,
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const pieData = {
    labels: pieChartData.labels,
    datasets: [
      {
        data: pieChartData.data,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.grid}>
        <ChartSection title="Candlestick Chart">
          <CandlestickChart data={candlestickData.data} />
        </ChartSection>

        <ChartSection title="Line Chart">
          <LineChart data={lineData} />
        </ChartSection>

        <ChartSection title="Bar Chart">
          <BarChart data={barData} />
        </ChartSection>

        <ChartSection title="Pie Chart">
          <PieChart data={pieData} />
        </ChartSection>
      </div>
    </div>
  );
}

