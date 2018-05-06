import React, { Component } from 'react'
import './PageTitle.css'

export default class PageTitle extends Component {
  render () {
    const {
      props: {
        children
      }
    } = this
    return (
      <h1 className='PageTitle'>
        {children}
      </h1>
    )
  }
}
