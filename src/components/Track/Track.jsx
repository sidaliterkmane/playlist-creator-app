import React from 'react'
import ReactDOM from 'react-dom'
import './Track.scss'

import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';

const plusIcon = <AiFillPlusCircle size={'25px'}/>
const minusIcon = <AiFillMinusCircle size={'25px'}/>

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

  render() {
    
    return (
      <div className="Track">
        <img src={this.props.track.image}/>
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
