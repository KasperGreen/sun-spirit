import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
import PageFooter from 'components/PageFooter'

export default class PageWrapper extends Component {
  render () {
    const {
      props: {
        children,
        footer_style
      }
    } = this
    return (
      <div>
        <PageHeader />
        <div>
          {children}
        </div>
        <PageFooter {...{footer_style}} />
      </div>
    )
  }
}
