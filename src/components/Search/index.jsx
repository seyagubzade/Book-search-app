import React from "react";
import "./index.css";
import bgImag from "../../assets/images/search-bg.jpg"

const Search = ({searchValue, setSearchValue, searchBooks}) => {
    const handleSearch = (e) =>{
        e.preventDefault()
        searchBooks(searchValue)
    }
  return (
    <div>
      <div className="search-form">
        <div className="form-container">
          <h1 className="form-title">Search Your Book</h1>
          <div className="form-content">
            <form onSubmit={handleSearch}>
              <input
                placeholder="Find book.."
                className="form-input"
                value={searchValue}
                onChange={(e)=>{
                    setSearchValue(e.target.value)
                }}
              />
              <button type="submit">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="form-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
