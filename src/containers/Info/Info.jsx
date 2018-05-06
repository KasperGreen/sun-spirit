import React, { Component } from 'react'
import './Info.css'
import AppContext from 'context/AppContext'
import PageWrapper from 'components/PageWrapper'
import circle_one_image from './images/circle_one.png'
import circle_one2_image from './images/circle_one2.png'
import text from './data/info_lang'
import { Helmet } from 'react-helmet'
import PageTitle from 'components/PageTitle/PageTitle'
import InfoSections from 'containers/Info/InfoSections'

export default class Info extends Component {
  render () {
    return (
      <AppContext>
        {({lang}) => {
          return (
            <PageWrapper>
              <Helmet>
                <title>{text.title[lang]}</title>
              </Helmet>
              <div className='Info'>
                <div className="circle left-svg-circle">
                  <img src={circle_one2_image} alt="SUN SPIRIT" />
                </div>
                <div className="circle right-svg-circle">
                  <img src={circle_one_image} alt="SUN SPIRIT" />
                </div>
                <div className='container'>
                  <PageTitle>
                    {text.title[lang]}
                  </PageTitle>
                  <InfoSections {...{lang}} />
                </div>
              </div>
            </PageWrapper>
          )
        }}
      </AppContext>
    )
  }
}
