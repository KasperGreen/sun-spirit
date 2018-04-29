import React, { Component } from 'react'
import './Atmosphere.css'
import Lineup from 'components/Lineup'
import artists from './data/atmosphere_lineup'
import PageWrapper from 'components/PageWrapper'

export default class Atmosphere extends Component {
  render () {
    return (
      <PageWrapper>
        <div className='Atmosphere'>
          <Lineup {...{artists}} />
        </div>
      </PageWrapper>
    )
  }
}
