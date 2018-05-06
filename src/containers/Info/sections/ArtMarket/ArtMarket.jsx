import React, { Component } from 'react'
import './ArtMarket.css'
import art_market_1 from './images/artmarket1.jpg'
import art_market_2 from './images/artmarket2.jpg'
import text from './data/art_market_lang'
export default class ArtMarket extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='ArtMarket'>

        <div className="cols">
          {text.top[lang]}
        </div>
        <div className="InfoSections-flex_images">
          <div><img src={art_market_1} alt={'Foto'} /></div>
          <div><img src={art_market_2} alt={'Foto'} /></div>
        </div>

      </div>
    )
  }
}
