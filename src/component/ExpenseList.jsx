import { useContext } from 'react';
import { AppContext } from './AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ handleDeleteExpense }) => { 
  const { state } = useContext(AppContext);
  const { expenses } = state;

  return (
    <ul className="w-full grid justify-items-center">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
