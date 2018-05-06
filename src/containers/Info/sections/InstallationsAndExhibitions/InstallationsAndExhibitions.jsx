import React, { Component } from 'react'
import './InstallationsAndExhibitions.css'
import instalation_image_1 from './images/install1.jpg'
import instalation_image_2 from './images/install2.jpg'
import instalation_image_3 from './images/install3.jpg'

export default class InstallationsAndExhibitions extends Component {
  render () {
    return (
      <div className='InstallationsAndExhibitions'>

        <div className="cols">
          <div className="col_left50"><p><b>Фестиваль – это место для творческого самовыражения!</b></p>
            <p>Sun spirit Festival - большая арт инсталляция, художественно проработанные элементы которой несут
              в себе свои уникальные образы, заложенные их идеологами.</p>
            <p>Здесь театрализованные шоу, концептуальные постановки,
              спонтанные и отточенные представления мастеров мистерий будут удивлять гостей то появляясь,
              то исчезая на просторах фестиваля, каждый раз преподнося новые образы и движения вниманию зрителя.</p>
          </div>
          <div className="col_right50">

            <p>Здесь создаются тематические арт-инсталляции и постройки командами-участниками фестиваля,
              а также будет открыт WORKSHOP по созданию совместной ключевой арт-инсталляции для всех желающих
              фестиваля - «ЕДИНЕНИЕ».</p>
            <p>Здесь художники демонстрируют свое творчество, творят в режиме реального времен,
              показывая публике живой процесс рождения картин.</p></div>
        </div>
        <div className="img_colinstal">
          <img src={instalation_image_1} alt={'Foto'} />
          <img src={instalation_image_2} alt={'Foto'} />
          <img src={instalation_image_3} alt={'Foto'} />
        </div>
      </div>
    )
  }
}
