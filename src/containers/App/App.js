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
import Atmosphere from 'containers/Atmosphere'
import ChangeLangSplashScreen from 'components/ChangeLangSplashScreen/ChangeLangSplashScreen'

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
            <ChangeLangSplashScreen {...{lang}}/>
            <Switch>
              <Route path={'/'} exact component={Main} />
              <Route path={'/about_festival'} exact component={About} />
              <Route path={'/headliners'} exact component={Headliners} />
              <Route path={'/atmomusic'} exact component={Atmosphere} />
            </Switch>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }

  setLang = (lang) => {
    this.setState(
      {
        ...this.state,
        lang
      })
  }
}

export default App
