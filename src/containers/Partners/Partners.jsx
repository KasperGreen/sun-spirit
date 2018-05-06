import React, { Component } from 'react'
import './Partners.css'
import partners_images from './data/partners_images'
import text from './data/partners_lang'
import Swiper from 'components/Swiper'
import PageTitle from 'components/PageTitle/PageTitle'
import AppContext from 'context/AppContext'

export default class Partners extends Component {

  render () {
    return (
      <AppContext>
        {({lang}) => {
          return (
            <div className='Partners'>
              <PageTitle>{text.title[lang]}</PageTitle>
              <div className='container'>
                <Swiper
                  slides={partners_images.map((image_url, key) => {
                    return (
                      <div
                        key={key}
                        className='Partners-image-wrapper'
                        style={{backgroundImage: 'url(' + image_url + ')'}}
                      />
                    )
                  })}
                />
              </div>
            </div>)
        }}
      </AppContext>
    )
  }
}
