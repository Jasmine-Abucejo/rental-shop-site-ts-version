import {NavLink} from "react-router";


const Navbar = () => {

  return (
    <div className="min-w-100 min-h-7 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
            <div className="text-xl font-bold">My App</div>
            <div className="flex space-x-4">
               <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }>About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }>Contact
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Navbar;