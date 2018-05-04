import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import AppContext from 'context/AppContext'
import LineupStageSelect from 'containers/Lineup/LineupStageSelect'
import LineupNavStages from 'containers/Lineup/LineupNavStages'
import LineupNavList from 'containers/Lineup/LineupNavList'
import LineupPlayer from 'containers/Lineup/LineupPlayer'

export default class Lineup extends Component {

  render () {
    const {
        props: {url_left_side, stage, artist: router_artist_url_path},
      } = this

    return (
      <AppContext>
        {({lang}) => {
          return (
            <div className='Lineup'>
              <div>
                {stage
                 ?
                 <div className='Lineup-wrapper container'>
                   <LineupNavStages {...{lang}} active_stage_name={stage} />
                   <LineupNavList key={stage} {...{stage, url_left_side}} active_artist_name={router_artist_url_path} />
                   <LineupPlayer key={router_artist_url_path} {...{lang, router_artist_url_path, stage}} />
                 </div>
                 : <LineupStageSelect {...{lang}} />
                }
              </div>
            </div>
          )
        }}
      </AppContext>
    )
  }

  static propTypes = {
    artists: PropTypes.array,
  }

}
