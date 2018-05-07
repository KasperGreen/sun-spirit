import React, { Component } from 'react'
import './Lineup.css'
import PropTypes from 'prop-types'
import AppContext from 'context/AppContext'
import LineupStageSelect from 'containers/Lineup/LineupStageSelect'
import LineupNavStages from 'containers/Lineup/LineupNavStages'
import LineupNavList from 'containers/Lineup/LineupNavList'
import LineupPlayer from 'containers/Lineup/LineupPlayer'
import { Helmet } from 'react-helmet'
import music_lang from './data/music_lang'
import stages from './data/stages_lang'

export default class Lineup extends Component {

  render () {
    const {
      props: {url_left_side, stage, artist: router_artist_url_path, setPlay},
    } = this
    return (
      <AppContext>
        {({lang}) => {
          const title = stage ? stages[stage].title[lang]

                              : music_lang.title[lang]
          return (
            <div className='Lineup'>
              <Helmet>
                {title && <title>{title}</title>}
              </Helmet>
              <div>
                {stage
                 ?
                 <div className='Lineup-wrapper container'>
                   <LineupNavStages {...{lang}} active_stage_name={stage} />
                   <LineupNavList key={stage} {...{stage, lang, url_left_side}} active_artist_name={router_artist_url_path} />
                   <LineupPlayer key={router_artist_url_path} {...{lang, router_artist_url_path, stage, setPlay}} />
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
