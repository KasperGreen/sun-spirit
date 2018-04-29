import React, { Component } from 'react'
import { NextButton, PlayButton, PrevButton, Progress, Timer, VolumeControl } from 'react-soundplayer/components'

export default class PlayerCover extends Component {
  render () {
    const {
        props: {
          track, currentTime, duration
        }
      } = this,
      {
        artwork_url, title = '',
        user: {username = ''} = {},
        waveform_url = ''
      } = track,
      art_image_url = (artwork_url || '').replace(/large/, 't500x500')

    return (
      <div className='Player-cover' style={{backgroundImage: `url(${art_image_url})`}}>
        <div className='Player-cover-inner'>
          <h2 className="Player-cover-artist">{username}</h2>
          <h1 className='Player-cover-title'>{title}</h1>
          <div className="flex flex-center">
            <PrevButton
              className="flex-none h3 button button-narrow button-transparent button-grow rounded"
              onPrevClick={this.prevIndex}
              {...this.props}
            />
            <PlayButton
              className="flex-none h2 button button-transparent button-grow rounded"
              {...this.props}
            />
            <NextButton
              ref={(element) => {this.next_button = element}}
              className="flex-none h3 button button-narrow button-transparent button-grow rounded"
              onNextClick={this.nextIndex}
              {...this.props}
            />
            <VolumeControl
              className='flex flex-center mr2'
              buttonClassName="flex-none h4 button button-transparent button-grow rounded"
              {...this.props}
            />
            <Progress
              className="Player-cover-progress"
              innerClassName="Player-cover-progress-inner"
              style={{backgroundImage: 'url(' + waveform_url + ')'}}
              value={(currentTime / duration) * 100 || 0}
              {...this.props}
            />
            <Timer className="Player-cover-timer" duration={duration || 0} currentTime={currentTime} {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}
