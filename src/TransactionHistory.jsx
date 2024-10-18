import React from 'react';

const TransactionHistory = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-history">
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="transaction-card bg-white p-4 rounded-md shadow-lg flex justify-between items-center mb-4"
            >
              <div>
                <p className="text-2xl font-bold">
                  ${Math.abs(transaction.amount)}
                </p>
                <p className="text-gray-500">{transaction.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`badge px-3 py-1 rounded-full text-sm font-semibold ${transaction.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                  {transaction.type}
                </span>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
