import React, { Component } from 'react'
import './Music.css'
import Lineup from 'containers/Lineup'
import PageWrapper from 'components/PageWrapper'
import circle_image from './images/circle_one2.png'
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
          <div className='Music-circle-wrapper'>
            <div className="circle right-svg-circle">
              <img src={circle_image} alt="SUN SPIRIT forms" />
            </div>
          </div>
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
