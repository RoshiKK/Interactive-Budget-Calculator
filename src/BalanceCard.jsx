import React from 'react';

const BalanceCard = ({ balance, income, expense }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-gray-600 text-xl mb-2">Available Balance</h2>
      <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>${balance.toFixed(2)}</p>
      <div className="flex justify-between mt-4">
        <div className="bg-green-100 p-4 rounded-md">
          <p className="text-green-600 text-lg">${income.toFixed(2)}</p>
          <p>Income</p>
        </div>
        <div className="bg-red-100 p-4 rounded-md">
          <p className="text-red-600 text-lg">${expense.toFixed(2)}</p>
          <p>Expense</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
