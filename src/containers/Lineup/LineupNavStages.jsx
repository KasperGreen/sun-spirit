import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import stages from './data/stages_lang'
import _ from 'lodash'
import classNames from 'classnames'
import './LineupNavStages.css'

export default class LineupNavStages extends Component {

  render () {
    const {
      props: {
        lang, active_stage_name
      }
    } = this

    return (
      <nav className='LineupNavStages'>
        <ul className='LineupNavStages-inner'>
          {_.map(
            stages,
            ({title, image_url}, key) => {
              return (
                <li
                  style={{
                    backgroundImage: 'url('+image_url+')'
                  }}
                  key={key} className={classNames(
                  {
                    'LineupNavStages-li-active': key === active_stage_name
                  }
                )}
                >
                  <NavLink
                    activeClassName={'LineupNavStages-link-active'}
                    to={'/music/' + key}
                    className='LineupNavStages-link'
                  >
                    {title[lang]}
                  </NavLink>
                </li>
              )
            })}
        </ul>
      </nav>
    )
  }

  static propTypes = {
    lang: PropTypes.string.isRequired,
    active_stage_name: PropTypes.string,
  }

}
