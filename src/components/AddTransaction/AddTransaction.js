import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddTransaction = ({
  setTransactions,
  setExpenseTitle,
  setExpenseAmount,
  transactions,
  expenseTitle,
  expenseAmount,
  totalAmount,
  setTotalAmount,
  income,
  expense,
  setIncome,
  setExpense,
}) => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label>Transaction Name</label>
          <input
            type='text'
            value={expenseTitle}
            placeholder='Enter text...'
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Transaction Amount</label>
          <input
            type='text'
            value={expenseAmount}
            placeholder='Enter amount...'
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault();
            // add new transaction to transactions array
            setTransactions([
              ...transactions,
              { id: uuid(), expenseTitle, expenseAmount },
            ]);
            // set total Income or Expense based on expenseAmount
            {
              expenseAmount > 0
                ? setIncome(parseFloat(income) + parseFloat(expenseAmount))
                : setExpense(parseFloat(expense) + parseFloat(expenseAmount));
            }
            // reset input after add transaction
            setExpenseTitle('');
            setExpenseAmount(0);
            // renew Total Amount
            setTotalAmount(parseFloat(totalAmount) + parseFloat(expenseAmount));
          }}
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
