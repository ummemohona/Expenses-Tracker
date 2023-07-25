import { useState } from 'react';
import Nav from './Nav';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (name, cost) => {
    const newExpense = {
      id: Math.random().toString(),
      name,
      cost: parseInt(cost),
    };
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <Nav />
      <div style={{ paddingTop: '84px' }}>
        <h1 className='w-full grid justify-items-center mt-1 font-bold text-2xl cursor-pointer items-center font-[Poppins] text-gray-800'>
          Add Expenses
        </h1>
        <AddExpenseForm handleAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
      </div>
    </div>
  );
};

export default Expenses;
