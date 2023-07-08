import Transaction from '../Transaction';

const TransactionList = ({
  transactions,
  setTransactions,
  income,
  expense,
  setIncome,
  setExpense,
  totalAmount,
  setTotalAmount,
}) => {
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <Transaction
            transactions={transactions}
            transaction={transaction}
            setTransactions={setTransactions}
            income={income}
            expense={expense}
            setIncome={setIncome}
            setExpense={setExpense}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
