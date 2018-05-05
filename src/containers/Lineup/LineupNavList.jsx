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
    let text = ''
    lineup_list[stage].forEach((item) => {
      const filename = item.image.replace(/^.*\//, '')
      text += 'import ' + filename.replace(/\..*$/, '').replace('-', '').replace(/^\d+/, '')  + ' from \'../images/artists/' + filename  + '\'\n'
    })
    console.log(' → ', text, ' ← text | ')


    return (
      <nav className='LineupNavList'>
        <ul>
          {lineup_list[stage].map((artist, key) => {
            return (
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
