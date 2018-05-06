import React, { Component } from 'react'
import './CinemaAndTheatre.css'
import cinema1 from './images/kinoiteatr1.jpg'
import cinema2 from './images/kinoiteatr2.jpg'
import cinema3 from './images/kinoiteatr3.jpg'
import text from './data/cinema_and_theatre_lang'

export default class CinemaAndTheatre extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='CinemaAndTheatre'>

        <div className="cols">
          {text.top[lang]}
        </div>
        <div className="InfoSections-flex_images">
          <div><img src={cinema1} alt={'Foto'} /></div>
          <div><img src={cinema2} alt={'Foto'} /></div>
          <div><img src={cinema3} alt={'Foto'} /></div>
        </div>

      </div>
    )
  }
}
