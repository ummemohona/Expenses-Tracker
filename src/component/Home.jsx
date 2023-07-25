import Nav from './Nav';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const home = () => {
    const { state } = useContext(AppContext);
    const { expenses, income } = state;

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

    // Calculate total income
    const totalIncome = income.reduce((total, incomeItem) => total + incomeItem.amount, 0);
    return (
        <div>
            <Nav />
            <div style={{ paddingTop: '84px' }}>

                <div className='flex justify-center'>
                    <div className="w-80 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 m-2 rounded relative" role="alert">
                        <strong className="font-bold">Total Income </strong>
                        <span className="block sm:inline">{totalIncome} $</span>
                    </div>
                    <div className="w-80 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 m-2 rounded relative" role="alert">
                        <strong className="font-bold">Total Expenses: </strong>
                        <span className="block sm:inline">{totalExpenses}$</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default home;