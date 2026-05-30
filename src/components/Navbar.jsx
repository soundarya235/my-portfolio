import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 px-10 py-5 bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-widest">MyPortfolio</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} smooth={true} duration={500} className="cursor-pointer hover:text-blue-400 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-6 text-center pb-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block py-2 cursor-pointer hover:text-blue-400">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}