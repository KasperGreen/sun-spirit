import React, { Component } from 'react'
import './LineupPlayer.css'
import PropTypes from 'prop-types'
import Player from 'components/Player/Player'
import * as stages_data from './data/lineup_list'
import LineupNotRepresentedOnSoundCloud from 'containers/Lineup/LineupNotRepresentedOnSoundCloud'
import LineupStageInfo from 'containers/Lineup/LineupStageInfo'

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7'

export default class LineupPlayer extends Component {

  render () {
    const {
        props: {
          lang,
          router_artist_url_path,
          stage,
          setPlay
        },
        getSoundCloudUrl
      } = this,
      sound_cloud_url = getSoundCloudUrl()

    return (
      <div className='LineupPlayer'>
        <div className='LineupPlayer-wrapper'>
          {router_artist_url_path
           ?
           sound_cloud_url
           ?
           <Player
             key={router_artist_url_path}
             clientId={clientId}
             resolveUrl={sound_cloud_url}
             {...{setPlay}}
           />
           : <LineupNotRepresentedOnSoundCloud />
           : <LineupStageInfo {...{stage, lang}} />
          }
        </div>
      </div>
    )
  }

  getSoundCloudUrl = () => {
    const {
      props: {
        stage,
        router_artist_url_path
      }
    } = this
    if (!stage) return false
    const artist = stages_data[stage].find(artist => artist.url_path === router_artist_url_path)

    if (!artist) return false

    if (!artist.sound_cloud_url) return false

    const match = artist.sound_cloud_url.match(/soundcloud.com\/(.+?)(\/|$)/)

    if (!match) return false

    if (typeof match[1] === 'undefined') return false

    const sound_cloud_username = match[1]

    const url = 'https://soundcloud.com/' + sound_cloud_username + '/tracks'

    return url
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  static propTypes = {
    lang: PropTypes.string,
    router_artist_url_path: PropTypes.string,
    stage: PropTypes.string
  }

}
