import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Radar, PolarArea, Scatter } from 'react-chartjs-2';

// 1. HAMMA kerakli modullarni ro'yxatdan o'tkazamiz
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AllCharts = () => {
  const areaRef = useRef(null);
  const [areaData, setAreaData] = useState({ datasets: [] });

  // Area Chart uchun gradient sozlamasi
  useEffect(() => {
    const chart = areaRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(255, 0, 212, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 251, 0, 0)');
      
      setAreaData({
        labels: ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Yak'],
        datasets: [{
          fill: true,
          label: 'Foydalanuvchilar',
          data: [65, 59, 80, 81, 56, 55, 90],
          borderColor: 'rgb(228, 54, 54)',
          backgroundColor: gradient,
          tension: 0.4,
        }],
      });
    }
  }, []);

  // --- Chart Ma'lumotlari ---

  const radarData = {
    labels: ['Sifat', 'Narx', 'Dizayn', 'Yetkazib berish', 'Xizmat'],
    datasets: [{
      label: 'Mahsulot A',
      data: [80, 90, 70, 85, 95],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
    }]
  };

  const polarData = {
    labels: ['Sotuv', 'Foyda', 'Xarajat', 'Reklama'],
    datasets: [{
      data: [11, 16, 7, 14],
      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#36A2EB'],
    }]
  };

  const scatterData = {
    datasets: [{
      label: 'Nuqtali bog\'liqlik',
      data: [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 30 }],
      backgroundColor: 'rgb(255, 99, 132)',
    }]
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px'}}>
      
      {/* Area Chart */}
      <div style={{ background: '#ffb3b3', padding: '15px', borderRadius: '10px', height: '300px' }}>
        <h3>Area Chart</h3>
        <Line ref={areaRef} data={areaData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Radar Chart */}
      <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '10px', height: '400px'  }}>
        <h3>Radar Chart</h3>
        <Radar data={radarData} />
      </div>

      {/* Polar Area Chart */}
      <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '10px' , height: '400px' }}>
        <h3>Polar Area Chart</h3>
        <PolarArea data={polarData} />
      </div>

      {/* Scatter Chart */}
      <div style={{ background: '#f1f8e9', padding: '15px', borderRadius: '10px', height: '400px' }}>
        <h3>Scatter Chart</h3>
        <Scatter data={scatterData} />
      </div>

    </div>
  );
};

export default AllCharts;