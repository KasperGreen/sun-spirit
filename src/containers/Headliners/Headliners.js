import React, { Component } from 'react'
import Swiper from 'components/Swiper'
import slides from './data/headliners_slides_lang'
import text from './data/headliners_lang'
import HeadlinersSlide from 'containers/Headliners/HeadlinersSlide'
import PageWrapper from 'components/PageWrapper'
import AppContext from 'context/AppContext'
import './Headliners.css'

export default class Headliners extends Component {
  render () {
    return (
      <PageWrapper>
        <AppContext.Consumer>
          {({lang}) => {
            return (
              <div className="headliner Headliners" id="headliner">
                <div className='container'>
                  <div className="section-name">{text.page_title[lang]}</div>
                  <Swiper
                    slides={slides.map((slide, key) => {
                      return (<HeadlinersSlide key={key} {...{slide, lang}} />)
                    })}
                  />
                </div>
              </div>
            )
          }}
        </AppContext.Consumer>
      </PageWrapper>
    )
  }
}
