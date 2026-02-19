import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "relative px-6 py-2 bg-[var(--bg-card)] rounded-full transition-all duration-300"
      : "relative nav-hover transition-all duration-300";

  return (
    <header className="relative px-8 z-50">
      <nav className="flex items-center justify-between h-16 max-w-6xl mx-auto">
        <div className="font-bold text-xl text-[var(--text-primary)]">
          <NavLink to="/">Raam Prathap R V</NavLink>
        </div>

        <ul className="hidden md:flex gap-8 text-[var(--text-primary)] font-medium">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={linkClass}>
              Resume
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            (isActive
              ? "bg-[var(--button-primary-bg)] text-[var(--text-primary)]"
              : "bg-transparent text-[var(--text-primary)] hover:bg-[var(--button-primary-bg)] hover:text-[var(--button-primary-text-hover)]") +
            " hidden md:flex px-6 py-2 rounded-full font-bold border-2 border-[var(--border-primary)] transition duration-500"
          }
        >
          Contact Me
        </NavLink>

        <button
          className="md:hidden text-[var(--text-primary)] text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </nav>

      {open && (
        <ul className="absolute right-8 top-16 bg-[var(--bg-card)]/90 backdrop-blur-lg rounded-lg shadow-lg w-64 flex flex-col z-[100] animate-fade-in">
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
                  (isActive
                    ? "text-[var(--accent-blue)]"
                    : "text-[var(--text-primary)]") + " block px-6 py-3"
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
