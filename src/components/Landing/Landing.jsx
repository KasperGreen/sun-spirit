import React, { Component } from 'react'
import './Landing.css'
import LandingSVGMenu from 'components/Landing/LandingSVGMenu'
import LandingCounter from 'components/Landing/LandingCounter'
import AppContext from 'context/AppContext'
import text from './data/landing_lang'

export default class Landing extends Component {

  render () {
    return (
      <AppContext.Consumer>
        {({lang}) => {
          return (
            <div className="Landing section header">
              <div className="container">
                <LandingSVGMenu />
                <div className="dark-orange date-fest">
                  {text.where[lang]}
                </div>
                <div className="light-orange name-fest">
                  {text.what[lang]}
                </div>
                <LandingCounter {...{lang}} />
              </div>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
