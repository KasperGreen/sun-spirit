import React, { Component } from 'react'
import './LifeAndFood.css'
import pp1 from './images/pp1.jpg'
import mesto4 from './images/mesto4.jpg'
import pp2 from './images/pp2.jpg'
import text from './data/life_and_food_lang'

export default class LifeAndFood extends Component {

  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='LifeAndFood'>
        <div>{text.top[lang]}</div>
        <div className="cols">
          <div className="col_left50">
            {text.left[lang]}
          </div>
          <div className="col_right50">
            {text.right[lang]}
          </div>
        </div>
        <div className="InfoSections-flex_images">
          <div><img src={pp1} alt={'Foto'} /></div>
          <div><img src={mesto4} alt={'Foto'} /></div>
          <div><img src={pp2} alt={'Foto'} /></div>
        </div>
      </div>
    )
  }
}
