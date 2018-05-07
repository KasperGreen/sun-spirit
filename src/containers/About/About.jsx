import React, { Component } from 'react'
import circle_one_image from './images/circle_one.png'
import circle_one2_image from './images/circle_one2.png'
import PageWrapper from 'components/PageWrapper'
import AppContext from 'context/AppContext'
import text from './data/about_fesival_lang'
import { Helmet } from 'react-helmet'
import './About.css'
import PageTitle from 'components/PageTitle/PageTitle'

export default class About extends Component {
  render () {
    return (
      <PageWrapper>
        <AppContext>
          {({lang}) => {
            return (
              <section className='About'>
                <Helmet>
                  <title>{text.title[lang]}</title>
                </Helmet>
                <PageTitle black>{text.title[lang]}</PageTitle>
                <div className="circle left-svg-circle">
                  <img src={circle_one2_image} alt="SUN SPIRIT" />
                </div>
                <div className="circle right-svg-circle">
                  <img src={circle_one_image} alt="SUN SPIRIT" />
                </div>
                <div className="container">
                  <div className='About-text'>
                    <article className="About-text-inner">
                      {text.about_festival[lang]}
                    </article>
                  </div>
                </div>
              </section>
            )
          }}
        </AppContext>
      </PageWrapper>
    )
  }
}
