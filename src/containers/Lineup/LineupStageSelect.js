import React, { Component } from 'react'
import './LineupStageSelect.css'
import atmosphere_image from './images/atmosphere.jpg'
import biosphere_image from './images/biosphere.jpg'
import silent_image from './images/silent.jpg'
import { info } from './data'
import { Link } from 'react-router-dom'

export default class LineupStageSelect extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='LineupStageSelect'>
        <div className='container'>
          <div className='LineupStageSelect-wrapper'>
            <Link
              to='/music/atmosphere'
              className='LineupStageSelect-stage'
              style={{backgroundImage: 'url(' + atmosphere_image + ')'}}
            >
              <div className='LineupStageSelect-stage-inner'>
                {info.atmosphere[lang]}
              </div>
            </Link>
            <Link
              to='/music/biosphere'
              className='LineupStageSelect-stage'
              style={{backgroundImage: 'url(' + biosphere_image + ')'}}
            >
              <div className='LineupStageSelect-stage-inner'>
                {info.biosphere[lang]}
              </div>
            </Link>
            <Link
              to='/music/silent'
              className='LineupStageSelect-stage'
              style={{backgroundImage: 'url(' + silent_image + ')'}}
            >
              <div className='LineupStageSelect-stage-inner'>
                {info.silent[lang]}
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
