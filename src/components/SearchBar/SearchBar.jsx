import React from 'react'
import ReactDOM from 'react-dom'
import './SearchBar.scss'

class SearchBar extends React.Component {
  render() {
    
    return (
      <div className="SearchBar">
        <input placeholder="Enter a song, album, artist" />
        <button className="SearchButton">Search</button>
      </div>
    )
  }
}

export default SearchBar;
