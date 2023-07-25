
import { NavLink } from 'react-router-dom';

const Nav = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'INCOME', link: '/Income' },
    { name: 'EXPENSES', link: '/Expenses' },
  ];

  return (
    <div className="shadow-md w-full top-0 left-0 fixed">
      <div className="md:flex items-center justify-between md:px-10 px-7 bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2"><ion-icon name="receipt-outline"></ion-icon></span>
          ExpenseEase
        </div>
        <ul className="md:flex md: items-center">
          {Links.map((L) => (
            <li key={L.name} className="md:ml-8 text-xl">
              <NavLink
                to={L.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {L.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
