import React, { Component } from 'react'
import './Music.css'
import Lineup from 'containers/Lineup'
import PageWrapper from 'components/PageWrapper'

export default class Music extends Component {
  render () {
    const {
      props: {
        match: {
          params: {artist, stage}
        }
      }
    } = this

    return (
      <PageWrapper>
        <div className='Music'>
          <Lineup {...{
            url_left_side: '/music/' + stage + '/',
            stage,
            artist
          }} />
        </div>
      </PageWrapper>
    )
  }
}
