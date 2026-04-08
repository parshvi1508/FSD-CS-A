import { NavLink } from 'react-router-dom';

const base =
  'px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 hover:text-white';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-lg">Test App</span>
        <div className="space-x-2">
          <NavLink
            to="/student"
            className={({ isActive }) =>
              `${base} ${isActive ? 'bg-gray-900 text-white' : ''}`
            }
          >
            Student
          </NavLink>
          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              `${base} ${isActive ? 'bg-gray-900 text-white' : ''}`
            }
          >
            Teacher
          </NavLink>
        </div>
      </div>
    </nav>
  );
}