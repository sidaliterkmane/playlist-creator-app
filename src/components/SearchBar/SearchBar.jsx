import React from 'react'
import ReactDOM from 'react-dom'
import './SearchBar.scss'

class SearchBar extends React.Component {
  render() {
    
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">Search</button>
      </div>
    )
  }
}

export default SearchBar;
