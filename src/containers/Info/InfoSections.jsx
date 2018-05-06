import React, { Component } from 'react'
import './InfoSections.css'
import PropTypes from 'prop-types'
import sections from './data/info_sections_lang'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

export default class InfoSections extends Component {
  render () {
    const {
      props: {
        lang,
        active_section_key
      }
    } = this
    return (
      <div className='InfoSections'>
        <div className='InfoSections-inner'>
          <nav  className='InfoSections-nav'>
            <ul className='InfoSections-list'>
              {_.map(sections, ({title}, key) => {
                return (
                  <li key={key}>
                    <NavLink
                      activeClassName='InfoSections-nav-link-active'
                             className='InfoSections-nav-link' to={'/info/' + key}>{title[lang]}</NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          {active_section_key &&
          <main className='InfoSections-main'>
            {React.cloneElement(sections[active_section_key].component, {lang})}
          </main>
          }
        </div>
      </div>
    )
  }

  static propTypes = {
    lang: PropTypes.string.isRequired,
    active_section_key: PropTypes.string,
    url: PropTypes.string,
  }

}
