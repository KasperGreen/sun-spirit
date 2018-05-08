import React, { Component } from 'react'
import './LineupStageInfo.css'
import stages from './data/stages_lang'

export default class LineupStageInfo extends Component {
  render () {
    const {
      props: {
        stage,
        lang
      }
    } = this
    return (
      <div className='LineupStageInfo' style={{backgroundImage: 'url(' + stages[stage].right_image_url + ')'}}>
        <div className='LineupStageInfo-inner'>
          {stages[stage].description[lang]}
        </div>
      </div>
    )
  }
}
