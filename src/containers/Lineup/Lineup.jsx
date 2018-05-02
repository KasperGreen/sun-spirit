import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import Player from 'components/Player/Player'
import LineupArtist from 'containers/Lineup/LineupArtist'
import * as stages_data from './data'
import LineupNotRepresentedOnSoundCloud from 'containers/Lineup/LineupNotRepresentedOnSoundCloud'
import LineupStageInfo from 'containers/Lineup/LineupStageInfo'
import AppContext from 'context/AppContext'

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7'

export default class Lineup extends Component {

  render () {
    const {
        props: {url_left_side, stage, artist: router_artist_url_path},
        getSoundCloudUrl,
      } = this,
      sound_cloud_url = getSoundCloudUrl()

    return (
      <AppContext>
        {({lang}) => {
          return (
            <div className='Lineup'>
              <div>
                {stage
                 ? <div className='Lineup-wrapper container'>
                   <nav className='Lineup-list'>
                     <ul>
                       {stages_data[stage].map((artist, key) => {
                         return (
                           <li
                             key={key}
                           >
                             <LineupArtist {...{
                               ...artist,
                               url_left_side,
                               active: artist.url_path === router_artist_url_path
                             }} />
                           </li>
                         )
                       })}
                     </ul>
                   </nav>
                   <div className='Lineup-player'>
                     <div className='Lineup-player-wrapper'>
                       {router_artist_url_path
                        ?
                        sound_cloud_url
                        ?
                        <Player
                          key={router_artist_url_path}
                          clientId={clientId}
                          resolveUrl={sound_cloud_url}
                          onReady={() => console.log('track is loaded!')}
                        />
                        : <LineupNotRepresentedOnSoundCloud />
                        : <LineupStageInfo>
                          {stages_data.info[stage][lang]}
                        </LineupStageInfo>
                       }
                     </div>
                   </div>
                 </div>
                 : <div>Не выбрана сцена</div>
                }
              </div>
            </div>
          )
        }}
      </AppContext>
    )
  }

  getSoundCloudUrl = () => {
    const {
        props: {
          stage,
          artist: router_artist_url_path
        }
      } = this,
      artist = stages_data[stage].find(artist => artist.url_path === router_artist_url_path)

    if (!artist) return false

    if (!artist.sound_cloud_url) return false

    const match = artist.sound_cloud_url.match(/soundcloud.com\/(.+?)(\/|$)/)

    if (typeof match[1] === 'undefined') return false

    const sound_cloud_username = match[1]

    const url = 'https://soundcloud.com/' + sound_cloud_username + '/tracks'

    return url
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
