import React from 'react'
import ReactDOM from 'react-dom'
import './Track.scss'

class Track extends React.Component {
  render() {
    
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>// Track name</h3>
          <p>// Track artist and album</p>
        </div>
        <button className="Track-action">// Track actions</button>
      </div>
    )
  }
}

export default Track;
