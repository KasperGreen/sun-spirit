import React, { Component } from 'react'
import './Additionally.css'
import text from './data/additionally_lang'

export default class Additionally extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='Additionally'>
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
