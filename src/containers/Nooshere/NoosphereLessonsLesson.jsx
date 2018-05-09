import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import noosphere_lang from './data/noosphere_lang'

export default class NoosphereLessonsLesson extends Component {
  render () {
    const {
      props: {
        image, text, title, url_path, active_url_path, lang
      },
      scrollToMe
    } = this

    return (
      <div ref={this.element}>
        <NavLink
          to={'/noosphere/' + url_path}
          className='NoosphereLessons-lesson'
          activeClassName='NoosphereLessons-lesson-active'
          style={{backgroundImage: 'url(' + image + ')'}}
          onClick={scrollToMe}
        >
          {active_url_path === url_path &&
          <Helmet>
            <title>{title[lang]} {noosphere_lang.in_noosphere[lang]}</title>
          </Helmet>
          }
          <div className='NoosphereLessons-lesson-text'>
            {text[lang]}
          </div>
          <div className='NoosphereLessons-lesson-title'>
            {title[lang]}
          </div>
        </NavLink>
      </div>
    )
  }

  element = React.createRef()

  scrollToMe = () => {
    const link = this.element.current

    setTimeout(() => {
      let {top} = link.getBoundingClientRect()
      window.scrollTo(0, window.scrollY + top - 100)
    }, 200)
  }

  componentDidMount () {
    const {
      props: {
        active_url_path, url_path
      }
    } = this

    if (active_url_path === url_path) {
      this.scrollToMe()
    }
  }

  static propTypes = {
    title: PropTypes.object,
    image: PropTypes.string,
    text: PropTypes.object,
    active_url_path: PropTypes.string,
    url_path: PropTypes.string
  }

}
