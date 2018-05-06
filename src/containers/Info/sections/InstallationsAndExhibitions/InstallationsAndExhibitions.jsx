import React, { Component } from 'react'
import './InstallationsAndExhibitions.css'
import instalation_image_1 from './images/install1.jpg'
import instalation_image_2 from './images/install2.jpg'
import instalation_image_3 from './images/install3.jpg'
import text from './data/installations_and_exhibitions_lang'

export default class InstallationsAndExhibitions extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='InstallationsAndExhibitions'>

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
            <img src={instalation_image_1} alt={'Foto'} />

          </div>
          <div>
            <img src={instalation_image_2} alt={'Foto'} />
          </div>
          <div>
            <img src={instalation_image_3} alt={'Foto'} />
          </div>
        </div>
      </div>
    )
  }
}
