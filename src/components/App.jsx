import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: '', artist: '', album: '', id: ''}
      ]
    }
  }

  render() {

    return (
      <div className='body-container'>
        <div className="body">
          <h1>Spoti<span className="highlight">list</span></h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults />
              <Playlist />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
