import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export default class LineupNavListArtist extends Component {

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
        className={'LineupNavList-artist'}
        style={{backgroundImage: 'url(' + image + ')'}}
      >
        <NavLink
          to={url_left_side + url_path}
          activeStyle={{pointerEvents: 'none'}}
          className={classNames(
            'LineupNavList-artist-title',
            {
              'LineupNavList-artist-title-active': active
            }
          )}
        >
          {title}
        </NavLink>
        {active &&
        <div className='LineupNavList-artist-text'>
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
