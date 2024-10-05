import React, {useRef} from 'react';
import {FaSearch} from "react-icons/fa";
import { useGlobalContext } from '../context.jsx';  // Import the context hook
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const {setSearchTerm} = useGlobalContext();  // Get the setSearchTerm function from context
  const searchText = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();

    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world");  // Default search term if the input is empty
    } else {
      setSearchTerm(tempSearchTerm);  // Set the entered search term in the context
    }
    navigate("/books");
  };

  return (
    <div className="search-form py-4">
      <div className="container mx-auto">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex justify-center items-center">
              <input
                type="text"
                ref={searchText}  // Reference to the input
                className="form-control w-full sm:w-96 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                placeholder="Book name"
              />
              <button
                type="submit"
                className="flex justify-center items-center bg-yellow text-white p-3 rounded-r-lg hover:bg-purple-700 transition duration-300"
                onClick={handleSubmit}
              >
                <FaSearch size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
