import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { useState } from 'react';
import './style.css';

function App() {
  const initTransactions = [
    {
      id: 'b0c2b76a-sddf-4440-8b62-6d434a1e61d1',
      expenseTitle: 'Living',
      expenseAmount: 100,
    },
    {
      id: 'b0c2b76a-778-5566-8b62-6d434a1e61d1',
      expenseTitle: 'Food',
      expenseAmount: -50,
    },
  ];

  // add transaction / delete transaction
  const [transactions, setTransactions] = useState(initTransactions);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(1000);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Balance totalAmount={totalAmount} />
        <IncomeExpenses income={income} expense={expense} />
        <TransactionList
          setTransactions={setTransactions}
          transactions={transactions}
          income={income}
          expense={expense}
          setIncome={setIncome}
          setExpense={setExpense}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
        />
        <AddTransaction
          setTransactions={setTransactions}
          setExpenseTitle={setExpenseTitle}
          setExpenseAmount={setExpenseAmount}
          setTotalAmount={setTotalAmount}
          transactions={transactions}
          expenseTitle={expenseTitle}
          expenseAmount={expenseAmount}
          totalAmount={totalAmount}
          income={income}
          expense={expense}
          setIncome={setIncome}
          setExpense={setExpense}
        />
      </div>
    </div>
  );
}

export default App;
