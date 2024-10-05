import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-beige px-4 sm:px-10 py-4 flex items-center justify-between font-semibold relative z-20">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <button onClick={toggleMenu} className="text-2xl sm:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="pr-10 text-lg font-inknut ml-4 sm:ml-0 sm:hidden">
          <Link to="/home" className="font-serif">Book Store</Link>
        </div>
      </div>
      <div className="hidden sm:flex text-lg font-inknut">
        <Link to="/home" className="font-serif">Book Info</Link>
      </div>
      <div className={`fixed top-16 left-0 w-full sm:text-center py-4 sm:py-0 bg-orange sm:bg-beige p-4 flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:flex-1 sm:static sm:justify-center sm:space-x-6 ${isOpen ? 'block' : 'hidden'} sm:block z-30`}>
        <Link onClick={closeMenu} to="/home">Home</Link>
        <Link onClick={closeMenu} to="/books">Books</Link>
        <Link onClick={closeMenu} to='/contactUs'>Contact us</Link>
      </div>
      <div className="flex items-center space-x-4 sm:space-x-6">
        
        <Link to="/signup">
          <button className="bg-yellow text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-Brown ease-in duration-300">
            Sign Up
          </button>
        </Link>
        <Link to="/login" className="hidden sm:block">Log In</Link>
      </div>
    </nav>
  );
}

export default Header;
