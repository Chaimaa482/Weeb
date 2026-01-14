import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="max-w-5xl mx-auto shadow-2xl rounded-2xl p-5 bg-white/5">
      <nav className="flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          weeb
        </NavLink>

        <ul className="hidden md:flex items-center gap-8 text-ms">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-8 text-ms">
          <button className="cursor-pointer">
            Log In
          </button>
          <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-lg">
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
}
