import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialSummary = ({ transactions }) => {

  const incomeTransactions = transactions.filter((t) => t.type === 'Income');
  const expenseTransactions = transactions.filter((t) => t.type === 'Expense');


  const incomeCategories = [...new Set(incomeTransactions.map((t) => t.category))];
  const incomeData = incomeCategories.map((category) =>
    incomeTransactions.filter((t) => t.category === category).reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
  );


  const expenseCategories = [...new Set(expenseTransactions.map((t) => t.category))];
  const expenseData = expenseCategories.map((category) =>
    expenseTransactions.filter((t) => t.category === category).reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
  );

  const incomeChartData = {
    labels: incomeCategories,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: ['#4CAF50', '#2196F3', '#FFEB3B', '#FF5722'], 
        hoverBackgroundColor: ['#66BB6A', '#42A5F5', '#FFEB3B', '#FF7043'],
      },
    ],
  };

  const expenseChartData = {
    labels: expenseCategories,
    datasets: [
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: ['#F44336', '#FFC107', '#00BCD4', '#8BC34A'], 
        hoverBackgroundColor: ['#EF5350', '#FFCA28', '#26C6DA', '#9CCC65'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Financial Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold">Income Distribution</h3>
          <Pie data={incomeChartData} />
        </div>
        <div>
          <h3 className="text-lg font-bold">Expense Distribution</h3>
          <Pie data={expenseChartData} />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
