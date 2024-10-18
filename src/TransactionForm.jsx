import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      type,
      category,
      amount,
      description,
    };
    addTransaction(newTransaction);
    setCategory('');
    setAmount('');
    setDescription('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <button
            type="button"
            className={`px-4 py-2 ${type === 'Income' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('Income')}
          >
            Income
          </button>
          <button
            type="button"
            className={`ml-4 px-4 py-2 ${type === 'Expense' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setType('Expense')}
          >
            Expense
          </button>
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>Select Category</option>
            {type === 'Income' ? (
              <>
                <option>Salary</option>
                <option>Business</option>
                <option>Stocks</option>
                <option>Rental Income</option>
              </>
            ) : (
              <>
                <option>Grocery</option>
                <option>Shopping</option>
                <option>Food</option>
                <option>Entertain</option>
              </>
            )}
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder='$$$'
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder='Enter Description'
          />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
