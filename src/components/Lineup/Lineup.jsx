import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import Player from 'components/Player/Player'

const clientId = 'ca1f6b04464964bb9ed82eaa129f5cc7'
const resolveUrl = 'https://soundcloud.com/martin-nonstatic/tracks'

export default class Lineup extends Component {
  render () {
    const {
      props: {
        artists
      }
    } = this
    return (
      <div className='Lineup'>
        <Player
          clientId={clientId}
          resolveUrl={resolveUrl}
          onReady={() => console.log('track is loaded!')}
        />
        {artists.map(({title, text}, key) => {
          return (
            <div key={key}>
              {title}
              <div>
                {text}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
