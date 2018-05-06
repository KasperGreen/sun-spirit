import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from 'containers/Main'
import 'css/bootstrap.min.css'
import 'css/style-2018.css'
import 'css/style-740-2018.css'
import 'css/style-320-2018.css'
import 'moment/locale/ru'
import Moment from 'react-moment'
import About from 'containers/About'
import { LANG_RU } from 'constants/LANG'
import AppContext from 'context/AppContext'
import Headliners from 'containers/Headliners'
import Music from 'containers/Music'
import ChangeLangSplashScreen from 'components/ChangeLangSplashScreen/ChangeLangSplashScreen'
import { DETECTED_KEYBOARD_USER_CLASS_NAME } from 'constants/APP'
import './App.css'
import _ from 'lodash'
import AppUpdateNotifier from 'containers/App/AppUpdateNotifier'
import Noosphere from 'containers/Nooshere/Noosphere'
import Info from 'containers/Info/Info'
Moment.globalLocale = 'ru'

class App extends Component {

  state = {
    lang: LANG_RU
  }

  render () {
    const {
      state: {
        lang
      },
      setLang
    } = this
    Moment.globalLocale = lang
    return (
      <AppContext.Provider value={{lang, setLang}}>
        <Router>
          <div className="App">
            <ChangeLangSplashScreen {...{lang}} />
            <Switch>
              <Route path={'/'} exact component={Main} />
              <Route path={'/about_festival'} exact component={About} />
              <Route path={'/headliners'} exact component={Headliners} />
              <Route path={'/info/:section?'} component={Info} />
              <Route path={'/noosphere/:lesson?'} component={Noosphere} />
              <Route path={'/music/:stage?/:artist?'} component={Music} />
            </Switch>
            <AppUpdateNotifier />
          </div>
        </Router>
      </AppContext.Provider>
    )
  }

  keyboardUserEvent = e => {
    const keyCode = e.keyCode || e.which

    if (keyCode === 9) {
      if (typeof window !== 'undefined') {
        if (!_.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)) {
          window[DETECTED_KEYBOARD_USER_CLASS_NAME] = true
          const htmlRoot = document.getElementsByTagName('html')[0]
          htmlRoot.classList.add(DETECTED_KEYBOARD_USER_CLASS_NAME)
        }
      }
    }
  }
  mouseUserEvent = e => {
    const is_enter_press_click = e.clientX === 0 && e.clientY === 0
    if (
      !is_enter_press_click &&
      _.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)
    ) {
      window[DETECTED_KEYBOARD_USER_CLASS_NAME] = false
      document
        .getElementsByTagName('html')[0]
        .classList.remove(DETECTED_KEYBOARD_USER_CLASS_NAME)
    }
  }
  setLang = (lang) => {
    this.setState(
      {
        ...this.state,
        lang
      })
  }

  componentDidMount () {
    document.addEventListener('click', this.mouseUserEvent)
    document.addEventListener('keydown', this.keyboardUserEvent)

  }
}

export default App
