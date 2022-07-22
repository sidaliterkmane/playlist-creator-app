import React from 'react'
import ReactDOM from 'react-dom'
import './Playlist.scss'

class Playlist extends React.Component {
  render() {
    
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <button className="Playlist-save">Save to Spotify</button>
      </div>
    )
  }
}

export default Playlist;
