import React, { Component } from 'react'
import './ChangeLangSplashScreen.css'
import classNames from 'classnames'
import { LANG_EN, LANG_RU } from 'constants/LANG'

export default class ChangeLangSplashScreen extends Component {
  state = {
    is_show: false
  }

  render () {
    const {
      props: {
        lang
      },
      state: {is_show}
    } = this
    if (!is_show) return false
    return (
      <div
        className={classNames(
          'ChangeLangSplashScreen',
          {
            'ChangeLangSplashScreen-show': is_show,
            'ChangeLangSplashScreen-en': lang === LANG_EN,
            'ChangeLangSplashScreen-ru': lang === LANG_RU,
          }
        )}
      >
      </div>
    )
  }

  timeout = false

  _showScreen () {

    clearTimeout(this.timeout)
    this.setState(
      {
        ...this.state,
        is_show: true
      }
    )

    this.timeout = setTimeout(() => {
      this.setState(
        {
          ...this.state,
          is_show: false
        }
      )
    }, 420)

    return this
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    if (prevProps.lang !== this.props.lang) {
      this._showScreen()
    }
  }

}
