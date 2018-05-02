import React, { Component } from 'react'
import './LineupStageInfo.css'

export default class LineupStageInfo extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <div className='LineupStageInfo'>
        {children}
      </div>
    )
  }
}
