import React, { Component } from 'react'
import './ArtMarket.css'
import art_market_1 from './images/artmarket1.jpg'
import art_market_2 from './images/artmarket2.jpg'

export default class ArtMarket extends Component {
  render () {
    return (
      <div className='ArtMarket'>

        <div className="cols"><p>Это уникальное пространство фестиваля, где дизайнеры, путешественники, ремесленники
          дают возможность гостям приобрести уникальные вещи собственного дизайнерского производства и уникальные
          декоративные артефакты с разных уголков планеты, которые не найти в обычных магазинах.
          Здесь творят и мастерят, делятся опытом умельцы народных промыслов.</p></div>
        <div className="cols_imageart">
          <img src={art_market_1} alt={'Foto'} />
          <img src={art_market_2} alt={'Foto'} />
        </div>

      </div>
    )
  }
}
