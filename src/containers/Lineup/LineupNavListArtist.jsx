import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import music_lang from './data/music_lang'

export default class LineupNavListArtist extends Component {

  render () {
    const {
      props: {
        active,
        image,
        text,
        title,
        url_left_side,
        url_path,
        sound_cloud_url,
        lang
      }
    } = this
    return (
      <div
        className={'LineupNavList-artist'}
        style={{backgroundImage: 'url(' + image + ')'}}
      >
        <NavLink
          to={url_left_side + url_path}
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
          <div className='LineupNavList-artist-text-inner'>
            {text}
          </div>

          {sound_cloud_url &&
          <div className='LineupNavList-artist-sound_cloud'>
            <a
              className='LineupNavList-artist-sound_cloud-link'
              href={sound_cloud_url}
              target='_blank'
              rel="noopener noreferrer"
            >
              {music_lang.page_on[lang]} SoundCloud.com
            </a>
          </div>
          }
        </div>
        }
      </div>
    )
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
