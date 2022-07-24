import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

import logo from '../assets/logo.png'

import Spotify from '../util/Spotify';
import SpotifyLogo from '../assets/spotify.png';
import github from '../assets/github.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({ searchResults: searchResults })
    });
  }

  render() {

    return (
      <div className='body-container'>
        <div className="body">
          <nav>
            <div className="logo">
              <img src={logo} />
              <h1>Spoti<span className="highlight">list</span></h1>
            </div>
            <div className="made-for">
              <p>made for</p>
              <img src={SpotifyLogo}/>
            </div>
          </nav>

          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults
                searchResults={this.state.searchResults}
                onAdd={this.addTrack}
              />
              <Playlist
                playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
              />
            </div>
          </div>

          <footer>
            <div className="footer-content">
              <p>Spotilist 2022 - Developed by <a href="https://sidaliterkmane.com" target='_blank'>Sid Ali Terkmane</a></p>
              <a href="https://github.com/sidaliterkmane/playlist-creator-app"><img src={github} className="git"/></a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default App;
