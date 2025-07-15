import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "relative px-6 py-2 bg-yellow-100 rounded-full transition-all duration-300"
      : "relative nav-hover transition-all duration-300";

  return (
    <header className="relative px-8 z-10">
      <nav className="flex items-center justify-between h-16 max-w-6xl mx-auto">
        <div className="font-bold text-xl text-gray-800">
          <NavLink to="/Portfolio">
            Raam Prathap R V
          </NavLink>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          <li><NavLink to="/Portfolio" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/resume" className={linkClass}>Resume</NavLink></li>
        </ul>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            (isActive
              ? "bg-black text-gray-100"
              : "bg-transparent text-gray-800 hover:bg-black hover:text-gray-100") +
            " hidden md:flex px-6 py-2 rounded-full font-bold border-2 border-black transition duration-500"
          }
        >
          Contact Me
        </NavLink>

        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </nav>

      {open && (
        <ul className="absolute right-8 top-16 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg w-64 flex flex-col z-50 animate-fade-in">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/resume", label: "Resume" },
            { to: "/contact", label: "Contact Me" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  (isActive ? "text-yellow-500" : "text-gray-800") +
                  " block px-6 py-3"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}