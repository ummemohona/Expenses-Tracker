import { useState } from 'react';
import Nav from './Nav';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';

const Income = () => {
  const [income, setIncome] = useState([]);

  const handleAddIncome = (name, amount) => {
    const newIncome = {
      id: Math.random().toString(),
      name,
      amount: parseInt(amount),
    };
    setIncome([...income, newIncome]);
  };

  const handleDeleteIncome = (id) => {
    setIncome(income.filter((income) => income.id !== id));
  };

  return (
    <div>
      <Nav />
      <div style={{ paddingTop: '84px' }}>
        <h1 className='w-full grid justify-items-center mt-1 font-bold text-2xl cursor-pointer items-center font-[Poppins] text-gray-800'>
          Add Income
        </h1>
        <AddExpenseForm handleAddExpense={handleAddIncome} />
        <ExpenseList expenses={income} handleDeleteExpense={handleDeleteIncome} />
      </div>
    </div>
  );
};

export default Income;
