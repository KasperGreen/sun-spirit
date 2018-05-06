import React, { Component } from 'react'
import './KinderGarden.css'
import text from './data/kinder_garden_lang'

export default class KinderGarden extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='KinderGarden'>
        <div className="cols">
          <div className="col_left50">
            {text.left[lang]}
          </div>
          <div className="col_right50">
            {text.right[lang]}
            </div>
        </div>
      </div>
    )
  }
}
