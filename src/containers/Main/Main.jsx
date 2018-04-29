import React, { Component } from 'react'
import MainLanding from 'components/Landing'
import PageWrapper from 'components/PageWrapper'

export default class Main extends Component {

  render () {
    return (
      <PageWrapper footer_style={{background: '#402D41'}}>
        <MainLanding />
      </PageWrapper>
    )
  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }
}
