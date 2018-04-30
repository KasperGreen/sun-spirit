import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export default class LineupArtist extends Component {

  render () {
    const {
      props: {
        active,
        image,
        text,
        title,
        url_left_side,
        url_path
      }
    } = this
    return (
      <div
        className={'Lineup-list-artist'}
        style={{backgroundImage: 'url(https://www.sunspiritgroup.ru' + image + ')'}}
      >
        <NavLink
          to={url_left_side + url_path}
          activeStyle={{pointerEvents: 'none'}}
          className={classNames(
            'Lineup-list-artist-title',
            {
              'Lineup-list-artist-title-active': active
            }
          )}
        >
          {title}
        </NavLink>
        {active &&
        <div className='Lineup-list-artist-text'>
          {text}
        </div>
        }
      </div>
    )
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
