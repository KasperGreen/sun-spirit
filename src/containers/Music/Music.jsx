import React, { Component } from 'react'
import './Music.css'
import Lineup from 'containers/Lineup'
import PageWrapper from 'components/PageWrapper'
import circle_image from './images/circle_one2.png'
import classNames from 'classnames'
import ym from 'react-yandex-metrika'

export default class Music extends Component {

  state = {
    playing: false
  }

  render () {
    const {
      props: {
        match: {
          params: {artist, stage}
        }
      },
      state: {
        playing
      },
      setPlay
    } = this

    return (
      <PageWrapper>
        <div className='Music'>
          <div className='Music-circle-wrapper'>
            <div
              className={classNames(
                'circle right-svg-circle',
                {
                  'Music-circle-paused': !playing
                }
              )}
            >
              <img src={circle_image} alt="SUN SPIRIT forms" />
            </div>
          </div>
          <Lineup
            key={stage}
            {...{
              url_left_side: '/music/' + stage + '/',
              stage,
              artist,
              setPlay
            }} />
        </div>
      </PageWrapper>
    )
  }

  setPlay = (playing) => {

    this.setState(
      {
        ...this.state,
        playing
      }
    )
    if (playing) {
      ym('reachGoal', 'player_using')
    }
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    const {
      props: {
        match: {
          params: {stage}
        }
      }
    } = this
    if (!stage) window.scrollTo(0, 0)
  }

  componentWillMount () {
    const {
      props: {
        match: {
          params: {stage}
        }
      }
    } = this
    if (!stage) window.scrollTo(0, 0)
  }
}
