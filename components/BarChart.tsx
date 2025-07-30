'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  
  export const IncomeExpenseChart = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
            label: 'Income',
            data: [120000, 150000, 100000, 130000, 140000, 125000],
            backgroundColor: '#1A73E8', 
            categoryPercentage: 0.8,
            barPercentage: 0.8,
          },
          {
            label: 'Expense',
            data: [90000, 110000, 95000, 120000, 135000, 100000],
            backgroundColor: '#2C4992', 
            categoryPercentage: 0.8,
            barPercentage: 0.8,
        },
      ],
    };
  
    const options = {
        responsive: true,
        borderRadius: 12,
        borderSkipped: false,
        // barThickness: 40,
        maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: 'top' as const,
          labels: {
            color: '#333',
          },
        },
        tooltip: {
          mode: 'index' as const,
          intersect: false,
          callbacks: {
            label: function (ctx: import('chart.js').TooltipItem<'bar'>) {
              return `${ctx.dataset.label}: ₦${ctx.formattedValue}`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: { color: '#555' },
          grid: { display: false },
        },
        y: {
          ticks: {
            color: '#555',
            maxTicksLimit: 5,
            callback: function (tickValue: string | number) {
              return `$${tickValue}`;
            },
          },
          grid: { color: '#eee' },
          border: {
            display: false
          },
        },
      },
    };
  
    return (
      <div className="w-full h-fit overflow-auto">
      <div className="min-w-[800px] w-full h-[240px]">
        <Bar data={data} options={options} />
      </div>
    </div>
    );
  };
  