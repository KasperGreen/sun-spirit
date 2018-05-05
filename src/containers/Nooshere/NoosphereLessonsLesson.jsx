import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class NoosphereLessonsLesson extends Component {
  render () {
    const {
      props: {
        image, text, title, url_path
      }
    } = this
    return (
      <NavLink
        to={'/noosphere/' + url_path}
        className='NoosphereLessons-lesson'
        activeClassName='NoosphereLessons-lesson-active'
        style={{backgroundImage: 'url(' + image + ')'}}
        onClick={(e) => {
          const link = e.target
          setTimeout(() => {
            let {top} = link.getBoundingClientRect()
            window.scrollTo(0, window.scrollY + top - 100)
          }, 200)
        }}
      >
        <div className='NoosphereLessons-lesson-text'>
          {text}
        </div>
        <div className='NoosphereLessons-lesson-title'>
          {title}
        </div>
      </NavLink>
    )
  }

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    url_path: PropTypes.string
  }

}
