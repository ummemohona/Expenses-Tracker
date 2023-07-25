import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({ expense, handleDeleteExpense }) => {
  const { id, name, cost } = expense;

  const onDeleteExpense = () => {
    handleDeleteExpense(id);
  };

  return (
    <li className="w-1/2 flex justify-between p-1 m-1 bg-slate-50 rounded">
      <span className="pr-40">{name}</span>
      <div className="flex justify-center">
        <span className="bg-blue-600 m-1 pr-2 pl-2 rounded text-white">
          {cost}$
        </span>
        <TiDelete size="1.5em" className="m-1" onClick={onDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
