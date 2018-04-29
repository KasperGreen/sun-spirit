import React, { Component } from 'react'
import './Player.css'
import { Timer } from 'react-soundplayer/components'
import classNames from 'classnames'
import _ from 'lodash'
import PlayerCover from 'components/Player/PlayerCover'
import { withSoundCloudAudio } from 'react-soundplayer/addons'

@withSoundCloudAudio
export default class Player extends Component {

  state = {
    activeIndex: 0
  }

  render () {
    const {
        props: {playlist},
        state: {activeIndex}
      } = this,
      track = _.get(playlist, 'tracks[' + activeIndex + ']', {})

    return (
      <div className='Player'>
        <PlayerCover {...{...this.props, track, activeIndex}} />
        {this.renderTrackList()}
      </div>)
  }

  nextIndex = () => {
    const {playlist} = this.props
    let {activeIndex} = this.state

    if (activeIndex >= playlist.tracks.length - 1) {
      return
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: ++activeIndex})
    }
  }
  prevIndex = () => {
    let {activeIndex} = this.state

    if (activeIndex <= 0) {
      return
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: --activeIndex})
    }
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    const {
      props: {
        playlist,
        playing,
        currentTime,
        duration
      },
      state: {
        activeIndex
      }
    } = this
    if (currentTime === duration && !playing && prevProps.playing) {
      this.playTrackAtIndex(
        activeIndex === playlist.tracks.length - 1
        ? 0
        : activeIndex + 1
      )
    }
  }

  playTrackAtIndex (playlistIndex) {
    const {soundCloudAudio} = this.props

    this.setState({activeIndex: playlistIndex})

    soundCloudAudio.play({playlistIndex})
  }

  renderTrackList () {
    const {playlist} = this.props

    if (!playlist) {
      return <div className="p2 center">Loading...</div>
    }

    const tracks = playlist.tracks.map((track, i) => {
      return (
        <button
          key={track.id}
          className={classNames('flex flex-center full-width left-align button button-transparent', {
            'is-active': this.props.soundCloudAudio._playlistIndex === i
          })}
          onClick={this.playTrackAtIndex.bind(this, i)}
        >
          <span className="flex-auto semibold">{track.title}</span>
          <span className="h6 regular">{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      )
    })

    return (
      <div>{tracks}</div>
    )
  }

}
