import React, { useState } from 'react';
import BalanceCard from './BalanceCard';
import TransactionForm from './TransactionForm';
import TransactionHistory from './TransactionHistory';
import FinancialSummary from './FinancialSummary';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [lastTransactionType, setLastTransactionType] = useState('');

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);

    setLastTransactionType(transaction.type);
  };

  const deleteTransaction = (id) => {
    const deletedTransaction = transactions.find(t => t.id === id);
    if (deletedTransaction) {

      if (deletedTransaction.type === lastTransactionType) {
        setLastTransactionType('');
      }
    }
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'Income')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const totalExpense = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <BalanceCard balance={balance} income={totalIncome} expense={totalExpense} />
        </div>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction} lastTransactionType={lastTransactionType} />
        <FinancialSummary transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
