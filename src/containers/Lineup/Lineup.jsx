import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import Player from 'components/Player/Player'
import LineupArtist from 'containers/Lineup/LineupArtist'
import * as stages_data from './data'

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7'

export default class Lineup extends Component {

  render () {
    const {
      props: {url_left_side, stage, artist: router_artist_url_path},
      getSoundCloudUrl,
    } = this

    return (
      <div className='Lineup'>
        <div className='Lineup-wrapper container'>
          <nav className='Lineup-list'>
            <ul>
              {stages_data[stage].map((artist, key) => {
                return (
                  <li
                    key={key}
                  >
                    <LineupArtist {...{...artist, url_left_side, active: artist.url_path === router_artist_url_path}} />
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className='Lineup-player'>
            <Player
              clientId={clientId}
              resolveUrl={getSoundCloudUrl()}
              onReady={() => console.log('track is loaded!')}
            />
          </div>
        </div>

      </div>
    )
  }

  getSoundCloudUrl = () => {
    const {
        props: {
          stage,
          artist: router_artist_url_path
        }
      } = this,
      artist = stages_data[stage].find(artist => artist.url_path === router_artist_url_path),
      sound_cloud_username = artist.sound_cloud_url.match(/soundcloud.com\/(.+?)\//)[1],
      url = 'https://soundcloud.com/' + sound_cloud_username + '/tracks'

    console.log(' → ', url, ' ← url | ')


    return url
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
