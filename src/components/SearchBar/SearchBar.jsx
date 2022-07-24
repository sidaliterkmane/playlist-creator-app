import React from 'react'
import ReactDOM from 'react-dom'
import './SearchBar.scss'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }


  search() {
    this.props.onSearch(this.state.searchTerm)
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value})
  }
  
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a song, album, artist" onChange={this.handleTermChange}/>
        <button className="SearchButton" onClick={this.search}>Search</button>
      </div>
    )
  }
}

export default SearchBar;
