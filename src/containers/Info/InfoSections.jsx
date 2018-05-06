import React, { Component } from 'react'
import './InfoSections.css'
import PropTypes from 'prop-types'
import sections from './data/info_sections_lang'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'

export default class InfoSections extends Component {
  render () {
    const {
      props: {
        lang,
        active_section_key
      },
      scrollToContainer
    } = this
    return (
      <div className='InfoSections' ref={this.element}>
        <div className='InfoSections-inner'>
          {active_section_key &&
          <h3 className='InfoSections-title'>
            {sections[active_section_key].title[lang]}
            <Helmet>
              <title>{sections[active_section_key].title[lang]}</title>
            </Helmet>
          </h3>
          }
          <nav className='InfoSections-nav'>
            <ul
              className={classNames(
                'InfoSections-list',
                {
                  'InfoSections-list-without_main': !active_section_key
                }
              )}
            >
              {_.map(sections, ({title}, key) => {
                return (
                  <li
                    key={key} className={classNames(
                    'InfoSections-nav-li',
                    {
                      'InfoSections-nav-li-active': key === active_section_key
                    }
                  )}
                  >
                    <NavLink
                      onClick={scrollToContainer}
                      activeClassName='InfoSections-nav-link-active'
                      className='InfoSections-nav-link' to={'/info/' + key}
                    >{title[lang]}</NavLink>
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

  element = React.createRef()
  scrollToContainer = () => {
    const link = this.element.current

    setTimeout(() => {
      let {top} = link.getBoundingClientRect()
      window.scrollTo(0, window.scrollY + top - 100)
    }, 200)
  }
  static propTypes = {
    lang: PropTypes.string.isRequired,
    active_section_key: PropTypes.string,
    url: PropTypes.string,
  }

}
