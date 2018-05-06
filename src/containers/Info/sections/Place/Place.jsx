import React, { Component } from 'react'
import './Place.css'
import image1 from './images/mesto1.jpg'
import image2 from './images/mesto2.jpg'
import image3 from './images/mesto3.jpg'

export default class Place extends Component {
  render () {
    return (
      <div className='Place'>
        <div className="block_item">
          <div className="cols">
            <div className="col_left50"><p>Фестиваль пройдет в районе живописных территорий Республики Крым.</p>
              <p>Бахчисарайский район, с. Холмовка Красномакского сельского поселения, ущелье «Черкез-Кермен».</p>
              <p>Это соседняя долина от долины древнего пещерного города «Эски-Кермен».</p></div>
            <div className="col_right50">
              <p>ГЕОЛОКАЦИЯ: 44.620921, 33.737229</p>
              <p><b>Ближайшие города:&nbsp;</b></p>
              <ul>
                <li>Севастополь, 33 км;</li>
                <li>Симферополь, 56км;</li>
                <li>Бахчисарай, 16км.</li>
              </ul>
            </div>
          </div>
          <div className="cols_image">
            <img src={image1} alt={'Фотография местности'} /><img src={image2} alt={'Фотография местности'} /><img alt={'Фотография местности'} src={image3} />
          </div>
        </div>
      </div>
    )
  }
}

