import React, { Component } from 'react'
import './LineupNotRepresentedOnSoundCloud.css'
import sound_cloud_logo_url from './images/sound_cloud_logo.svg'

export default class LineupNotRepresentedOnSoundCloud extends Component {
  render () {
    return (
      <div className='LineupNotRepresentedOnSoundCloud'>
        Исполнитель не представлен на SoundCloud
        <div>
          <a href='https://soundcloud.com'>
            <img
              src={sound_cloud_logo_url}
              alt={'SoundCloud Logo'}
            />
          </a>
        </div>
      </div>
    )
  }
}
