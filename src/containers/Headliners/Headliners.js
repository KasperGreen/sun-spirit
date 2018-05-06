import React, { Component } from 'react'
import Swiper from 'components/Swiper'
import slides from './data/headliners_slides_lang'
import text from './data/headliners_lang'
import HeadlinersSlide from 'containers/Headliners/HeadlinersSlide'
import PageWrapper from 'components/PageWrapper'
import AppContext from 'context/AppContext'
import './Headliners.css'
import { Helmet } from 'react-helmet'
import PageTitle from 'components/PageTitle/PageTitle'

export default class Headliners extends Component {
  render () {
    return (
      <PageWrapper>
        <AppContext.Consumer>
          {({lang}) => {
            return (
              <div className="headliner Headliners" id="headliner">
                <Helmet>
                  <title>
                    {text.helmet_title[lang]}
                  </title>
                </Helmet>
                <div className='container'>
                  <PageTitle>
                    {text.page_title[lang]}
                  </PageTitle>
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
