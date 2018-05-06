import React, { Component } from 'react'
import MainLanding from 'components/Landing'
import PageWrapper from 'components/PageWrapper'

export default class Main extends Component {

  render () {
    return (
      <PageWrapper footer_style={{background: 'linear-gradient(rgb(64, 45, 65), rgb(62, 29, 64))', boxShadow: 'none'}}>
        <MainLanding />
      </PageWrapper>
    )
  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }
}
