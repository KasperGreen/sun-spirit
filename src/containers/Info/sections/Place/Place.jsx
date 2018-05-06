import React, { Component } from 'react'
import './Place.css'
import image1 from './images/mesto1.jpg'
import image2 from './images/mesto2.jpg'
import image3 from './images/mesto3.jpg'
import text from './data/place_lang'
export default class Place extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='Place'>
        <div className="block_item">
          <div className="cols">
            <div className="col_left50">
              {text.left[lang]}
            </div>
            <div className="col_right50">
              {text.right[lang]}
            </div>
          </div>
          <div className="InfoSections-flex_images">
            <div>
              <img src={image1} alt={'Фотография местности'} />
            </div>
            <div>
              <img src={image2} alt={'Фотография местности'} />
            </div>
            <div>
              <img alt={'Фотография местности'} src={image3} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

