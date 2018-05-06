import React, { Component } from 'react'
import './InfoCenter.css'
import text from './data/info_center_lang'
export default class InfoCenter extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='InfoCenter'>
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
