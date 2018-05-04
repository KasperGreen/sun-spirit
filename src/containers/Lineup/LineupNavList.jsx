import React, { Component } from 'react'
import './LineupNavList.css'
import PropTypes from 'prop-types'
import LineupNavListArtist from 'containers/Lineup/LineupNavListArtist'
import * as stages_data from './data'

export default class LineupNavList extends Component {
  componentDidMount () {
    window.scrollTo(0,0)
  }

  render () {
    const {
      props: {url_left_side, stage, active_artist_name},
    } = this

    return (
      <nav className='LineupNavList'>
        <ul>
          {stages_data[stage].map((artist, key) => {
            return (
              <li
                key={key}
              >
                <LineupNavListArtist {...{
                  ...artist,
                  url_left_side,
                  active: artist.url_path === active_artist_name
                }} />
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }


  static propTypes = {
    active_artist_name: PropTypes.string,
    stage: PropTypes.string.isRequired,
    url_left_side: PropTypes.string.isRequired,
  }

}
