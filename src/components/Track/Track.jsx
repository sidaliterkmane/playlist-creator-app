import React from 'react'
import ReactDOM from 'react-dom'
import './Track.scss'

import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillPauseCircle } from 'react-icons/ai';

const plusIcon = <AiFillPlusCircle size={'25px'}/>
const minusIcon = <AiFillMinusCircle size={'25px'}/>
const playIcon = <AiFillPlayCircle size={'30px'}/> 
const pauseIcon = <AiFillPauseCircle size={'30px'}/>

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      media: playIcon,
      isPlaying: false
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.changeMediaIcon = this.changeMediaIcon.bind(this);
  }

  changeMediaIcon() {
    if (this.state.media === playIcon) {
      this.setState({media: pauseIcon})
    } else {
      this.setState({media: playIcon})
    }
  }


  renderAction() {
      if (this.props.isRemoval) {
        return <button className='Track-action' onClick={this.removeTrack}> {minusIcon} </button>
      } else {
        return <button className='Track-action' onClick={this.addTrack}> {plusIcon} </button>
      }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  componentDidMount() {
    fetch('https://api.spotify.com/v1/me/player/play'
    ).then(res => res.json()
    ).then(json => {
      this.setState({
        isPlaying: true
      })
    })
  }

  render() {
    
    return (
      <div className="Track">
        <div className="track-image">
          <button className='media-action' onClick={this.changeMediaIcon}> {this.state.media} </button>
          <img src={this.props.track.image}/>
        </div>
        <div className="Track-information">
          <h3>{ this.props.track.name }</h3>
          <p>{ this.props.track.artist } | { this.props.track.album }</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track;
