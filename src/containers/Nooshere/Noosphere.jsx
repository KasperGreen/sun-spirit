import React, { Component } from 'react'
import './Noosphere.css'
import PageWrapper from 'components/PageWrapper'
import AppContext from 'context/AppContext'
import { Helmet } from 'react-helmet'
import left_circles from './images/fest2018_request_round_1.svg'
import right_circles from './images/fest2018_request_round_2.svg'
import text from './data/noosphere_lang'
import NoosphereLessons from 'containers/Nooshere/NoosphereLessons'
import PageTitle from 'components/PageTitle/PageTitle'

export default class Noosphere extends Component {
  render () {
    const {
      props: {
        match: {
          params: {lesson}
        }
      }
    } = this
    return (

      <PageWrapper>
        <AppContext.Consumer>
          {({lang}) => {
            return (
              <div className='Noosphere'>
                <Helmet>
                  <title>{text.title_helmet[lang]}</title>
                </Helmet>
                <div className="Noosphere-bg_circles left-svg">
                  <img src={left_circles} alt="SUN SPIRIT forms" />
                </div>
                <div className="Noosphere-bg_circles right-svg">
                  <img src={right_circles} alt="SUN SPIRIT forms" />
                </div>
                <div className='Noosphere-inner container'>
                  <PageTitle>
                    {text.title[lang]}
                  </PageTitle>
                  <NoosphereLessons {...{active_url_path: lesson}} />
                </div>
              </div>
            )
          }}
        </AppContext.Consumer>
      </PageWrapper>

    )
  }

  componentWillMount () {
    const {
      props: {
        match: {
          params: {lesson}
        }
      }
    } = this
    if (!lesson) {
      window.scrollTo(0, 0)
    }
  }
}
