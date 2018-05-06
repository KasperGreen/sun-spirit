import React, { Component } from 'react'
import './CinemaAndTheatre.css'
import cinema1 from './images/kinoiteatr1.jpg'
import cinema2 from './images/kinoiteatr2.jpg'
import cinema3 from './images/kinoiteatr3.jpg'

export default class CinemaAndTheatre extends Component {
  render () {
    return (
      <div className='CinemaAndTheatre'>

        <div className="cols"><p>Кинотеатр – уникальное пространство интеллектуального и неформатного, местами
          специфического, но не лишенного смысла, кино. В рамках кинотеатра режиссеры и сценаристы покажут Вам свои
          работы и пригласят к обсуждению идей и смыслов, заложенных в каждой из них, будут проведены курсы по
          актерскому мастерству. </p></div>
        <div className="cols_imagekino">
          <img src={cinema1} alt={'Foto'} />
          <img src={cinema2} alt={'Foto'} />
          <img src={cinema3} alt={'Foto'} />
        </div>

      </div>
    )
  }
}
