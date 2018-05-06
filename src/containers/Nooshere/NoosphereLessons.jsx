import React, { Component } from 'react'
import './NoosphereLessons.css'
import lessons from './data/lessons_list_lang'
import NoosphereLessonsLesson from 'containers/Nooshere/NoosphereLessonsLesson'

export default class NoosphereLessons extends Component {

  render () {
    const {
      props: {
        active_url_path
      }
    } = this
    return (
      <nav className='NoosphereLessons'>
        <ul className='NoosphereLessons-ul'>
          {lessons.map((lesson, key) => {
            return (
              <li
                key={key}
              >
                <NoosphereLessonsLesson {...{...lesson, active_url_path}} />
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}