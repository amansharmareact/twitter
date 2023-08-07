import React from 'react'
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div className="search-input-container">
    <input
      type="text"
      placeholder="Search Twitter"
      className="search-input"
    />
    <span className="search-icon">
    <i className="fa-solid fa-magnifying-glass"></i>
    </span>
  </div>
  )
}

export default SearchBox
