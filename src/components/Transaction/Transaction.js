const Transaction = ({
  transactions,
  transaction,
  setTransactions,
  income,
  expense,
  setIncome,
  setExpense,
  totalAmount,
  setTotalAmount,
}) => {
  return (
    <li className='minus'>
      {transaction.expenseTitle}
      <span>{transaction.expenseAmount}</span>
      <button
        className='delete-btn'
        onClick={() => {
          // filter out new array excepting current transaction list
          const filter = transactions.filter(
            (element) => element.id !== transaction.id
          );
          setTransactions(filter);

          // set total Income and Expense amount, and set Total amount based on transaction.expenseAmount
          if (transaction.expenseAmount > 0) {
            setIncome(
              parseFloat(income) - parseFloat(transaction.expenseAmount)
            );
            setTotalAmount(
              parseFloat(totalAmount) - parseFloat(transaction.expenseAmount)
            );
          } else {
            setExpense(
              parseFloat(expense) - parseFloat(transaction.expenseAmount)
            );
            setTotalAmount(
              parseFloat(totalAmount) - parseFloat(transaction.expenseAmount)
            );
          }
        }}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
