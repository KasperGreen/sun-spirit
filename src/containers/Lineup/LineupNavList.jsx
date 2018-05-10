import React, { Component } from 'react'
import './LineupNavList.css'
import PropTypes from 'prop-types'
import LineupNavListArtist from 'containers/Lineup/LineupNavListArtist'
import * as lineup_list from './data/lineup_list'
import classNames from 'classnames'
import { Helmet } from 'react-helmet'
import stages from './data/stages_lang'

export default class LineupNavList extends Component {
  render () {
    const {
      props: {url_left_side, stage, active_artist_name, lang},
    } = this

    return (
      <nav className='LineupNavList'>
        <ul>
          {lineup_list[stage].map((artist, key) => {
            return (
              [
                <li
                  key={key}
                  className={classNames(
                    'LineupNavList-li',
                    {
                      'LineupNavList-li-active': artist.url_path === active_artist_name
                    }
                  )}
                >
                  {artist.url_path === active_artist_name &&
                  <Helmet>
                    <title>{artist.title} — {stages[stage].title[lang]}</title>
                  </Helmet>
                  }
                  <LineupNavListArtist
                    key={stage + '_' + artist.url_path}
                    {...{
                      ...artist,
                      url_left_side,
                      active: artist.url_path === active_artist_name,
                      lang
                    }} />
                </li>,
                ...[
                  artist.url_path === active_artist_name
                  && <li className='LineupNavList-li LineupNavList-li-active-mark' key={artist.url_path+'_active'}>
                    <div className='LineupNavList-li-active-mark-inner'>
                      {artist.title}
                    </div>
                  </li>
                ]
              ]
            )
          })}
        </ul>
      </nav>
    )
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  static propTypes = {
    active_artist_name: PropTypes.string,
    stage: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    url_left_side: PropTypes.string.isRequired,
  }

}
