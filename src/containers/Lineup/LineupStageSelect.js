import React, { Component } from 'react'
import './LineupStageSelect.css'
import stages from './data/stages_lang'
import { Link } from 'react-router-dom'
import _ from 'lodash'

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
            {_.map(stages, ({image_url, description}, key) => {
              return (
                <Link
                  key={key}
                  to={'/music/' + key}
                  className='LineupStageSelect-stage'
                  style={{backgroundImage: 'url(' + image_url + ')'}}
                >
                  <div className='LineupStageSelect-stage-inner'>
                    {description[lang]}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
