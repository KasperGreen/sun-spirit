import React, { Component } from 'react'
import './PageTitle.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class PageTitle extends Component {

  render () {
    const {
      props: {
        children,
        black
      }
    } = this
    return (
      <h1
        className={classNames(
          'PageTitle',
          {
            'PageTitle-black': black
          }
        )}
      >
        {children}
      </h1>
    )
  }

  static propTypes = {
    black: PropTypes.bool,
  }

}
