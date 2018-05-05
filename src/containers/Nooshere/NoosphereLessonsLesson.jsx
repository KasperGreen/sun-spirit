import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default class NoosphereLessonsLesson extends Component {
  render () {
    const {
      props: {
        image, text, title, url_path, active_url_path
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
            <title>{title} в Ноосфере фестиваля Sun Spirit</title>
          </Helmet>
          }
          <div className='NoosphereLessons-lesson-text'>
            {text}
          </div>
          <div className='NoosphereLessons-lesson-title'>
            {title}
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
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    active_url_path: PropTypes.string,
    url_path: PropTypes.string
  }

}
