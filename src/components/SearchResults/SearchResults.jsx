import React from 'react'
import ReactDOM from 'react-dom'
import './SearchResults.scss'

import SearchBar from '../SearchBar/SearchBar'

import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  render() {

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <div className="results">
          <TrackList
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false}
          />
        </div>
      </div>
    )
  }
}

export default SearchResults;
