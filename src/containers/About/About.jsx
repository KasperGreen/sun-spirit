import React, { Component } from 'react'
import circle_one_image from './images/circle_one.png'
import circle_one2_image from './images/circle_one2.png'
import PageWrapper from 'components/PageWrapper'
import AppContext from 'context/AppContext'
import text from './data/about_fesival_lang'

export default class About extends Component {
  render () {
    return (
      <PageWrapper>
        <AppContext>
          {({lang}) => {
            return (
              <div className="section description" id="about">
                <div className="circle left-svg-circle">
                  <img src={circle_one2_image} alt="SUN SPIRIT" />
                </div>
                <div className="circle right-svg-circle">
                  <img src={circle_one_image} alt="SUN SPIRIT" />
                </div>
                <div className="container">
                  <div className="text">
                    {text.about_festival[lang]}
                  </div>
                </div>
              </div>
            )
          }}
        </AppContext>
      </PageWrapper>
    )
  }
}
