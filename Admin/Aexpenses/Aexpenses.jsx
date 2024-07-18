import React, { useState } from 'react';
import './Aexpenses.css';
import { FaEdit, FaTrash, FaWallet, FaCalendar, FaCalendarAlt, FaCalendarWeek, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Aexpenses = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, userId: 'U001', type: 'Travel', amount: 5000, description: 'Business trip', status: 'Pending', bill: '/path/to/bill1.pdf', date: new Date(), startDate: new Date('2024-01-01') },
    { id: 2, userId: 'U002', type: 'Food', amount: 3000, description: 'Team lunch meeting', status: 'Pending', bill: '/path/to/bill2.pdf', date: new Date(), startDate: new Date('2024-02-01') },
    { id: 3, userId: 'U003', type: 'Supplies', amount: 2000, description: 'Office supplies', status: 'Pending', bill: '/path/to/bill3.pdf', date: new Date(), startDate: new Date('2024-03-01') },
    { id: 4, userId: 'U004', type: 'Miscellaneous', amount: 1500, description: 'Miscellaneous expense', status: 'Pending', bill: '/path/to/bill4.pdf', date: new Date(), startDate: new Date('2024-04-01') },
    { id: 5, userId: 'U005', type: 'Travel', amount: 6000, description: 'Client meeting', status: 'Pending', bill: '/path/to/bill5.pdf', date: new Date('2024-07-08'), startDate: new Date('2024-05-01') },
    { id: 6, userId: 'U006', type: 'Food', amount: 3500, description: 'Team dinner', status: 'Pending', bill: '/path/to/bill6.pdf', date: new Date('2024-07-01'), startDate: new Date('2024-06-01') },
    { id: 7, userId: 'U007', type: 'Supplies', amount: 1800, description: 'Stationery purchase', status: 'Pending', bill: '/path/to/bill7.pdf', date: new Date('2024-06-30'), startDate: new Date('2024-07-01') },
    { id: 8, userId: 'U008', type: 'Miscellaneous', amount: 1200, description: 'Event tickets', status: 'Pending', bill: '/path/to/bill8.pdf', date: new Date('2023-07-08'), startDate: new Date('2023-08-01') },
  ]);
  const [type, setType] = useState('Travel');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Pending');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filterOption, setFilterOption] = useState('All');
  const [startDate, setStartDate] = useState('');

  const addTransaction = () => {
    if (isEditing) {
      const updatedTransactions = [...transactions];
      updatedTransactions[currentIndex] = { 
        id: currentIndex + 1, 
        userId: `U00${currentIndex + 1}`, 
        type, 
        amount, 
        description, 
        bill: URL.createObjectURL(file), 
        status, 
        date: new Date(),
        startDate: new Date(startDate) 
      };
      setTransactions(updatedTransactions);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTransactions([...transactions, { 
        id: transactions.length + 1, 
        userId: `U00${transactions.length + 1}`, 
        type, 
        amount, 
        description, 
        bill: URL.createObjectURL(file), 
        status, 
        date: new Date(),
        startDate: new Date(startDate) 
      }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setType('Travel');
    setAmount('');
    setDescription('');
    setFile(null);
    setStatus('Pending');
    setStartDate('');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const editTransaction = (index) => {
    const transaction = transactions[index];
    setType(transaction.type);
    setAmount(transaction.amount);
    setDescription(transaction.description);
    setFile(transaction.file);
    setStatus(transaction.status);
    setStartDate(transaction.startDate.toISOString().substr(0, 10));
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const approveTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].status = 'Approved';
    setTransactions(updatedTransactions);
  };

  const rejectTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions[index].status = 'Rejected';
    setTransactions(updatedTransactions);
  };

  const filterTransactions = () => {
    switch (filterOption) {
      case 'Today':
        return transactions.filter(transaction => isToday(transaction.date));
      case 'This Week':
        return transactions.filter(transaction => isThisWeek(transaction.date));
      case 'This Month':
        return transactions.filter(transaction => isThisMonth(transaction.date));
      case 'This Year':
        return transactions.filter(transaction => isThisYear(transaction.date));
      default:
        return transactions;
    }
  };

  const isToday = (someDate) => {
    const today = new Date();
    return someDate.getDate() === today.getDate() &&
           someDate.getMonth() === today.getMonth() &&
           someDate.getFullYear() === today.getFullYear();
  };

  const isThisWeek = (someDate) => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    return someDate >= firstDayOfWeek && someDate <= lastDayOfWeek;
  };

  const isThisMonth = (someDate) => {
    const today = new Date();
    return someDate.getMonth() === today.getMonth() && someDate.getFullYear() === today.getFullYear();
  };

  const isThisYear = (someDate) => {
    const today = new Date();
    return someDate.getFullYear() === today.getFullYear();
  };

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.type !== 'Income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const yearlyExpenses = totalExpenses;
  const monthlyExpenses = totalExpenses / 12;
  const weeklyExpenses = totalExpenses / 52;

  const balance = totalIncome - totalExpenses;

  return (
    <div className="expense-container">
      <div className="header1">
        <h1>Hiee Admin</h1>
        <p>Welcome back to your Expenses</p>
      </div>
      <div className="summary">
        <div className="summary-card total-expenses">
          <h2>Total Expenses <span className="icon-wrapper"><FaWallet /></span></h2>
          <p>Rs {totalExpenses}</p>
        </div>
        <div className="summary-card yearly-expenses">
          <h2>Yearly Expenses <span className="icon-wrapper"><FaCalendar /></span></h2>
          <p>Rs {yearlyExpenses}</p>
        </div>
        <div className="summary-card monthly-expenses">
          <h2>Monthly Expenses <span className="icon-wrapper"><FaCalendarAlt /></span></h2>
          <p>Rs {monthlyExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-card weekly-expenses">
          <h2>Weekly Expenses <span className="icon-wrapper"><FaCalendarWeek /></span></h2>
          <p>Rs {weeklyExpenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-header">
          <h2>Expense Requests</h2>
          <div className="filter-button">
            <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
        </div>
        <div className="expense-requests">
          {filterTransactions().length === 0 ? (
            <p>No requests found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>Bill</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterTransactions().map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td>{transaction.userId}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.startDate.toLocaleDateString()}</td>
                    <td><a href={transaction.bill} target="_blank" rel="noopener noreferrer">View Bill</a></td>
                    <td>{transaction.status}</td>
                    <td>
                      {transaction.status === 'Pending' && (
                        <>
                          <button onClick={() => approveTransaction(index)}>
                            <FaCheckCircle className="approve-icon" style={{ color: 'green', fontSize: '1.5em' }} />
                          </button>
                          <button onClick={() => rejectTransaction(index)}>
                            <FaTimesCircle className="reject-icon" style={{ color: 'red', fontSize: '1.5em' }} />
                          </button>
                        </>
                      )}
                      {transaction.status === 'Approved' && (
                        <FaCheckCircle className="approve-icon" style={{ color: 'green', fontSize: '1.5em' }} />
                      )}
                      {transaction.status === 'Rejected' && (
                        <FaTimesCircle className="reject-icon" style={{ color: 'red', fontSize: '1.5em' }} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aexpenses;
