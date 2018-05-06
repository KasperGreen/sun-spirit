import React, { Component } from 'react'
import './InfoSections.css'
import PropTypes from 'prop-types'
import sections from './data/info_sections_lang'
import _ from 'lodash'

export default class InfoSections extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='InfoSections'>
        {_.map(sections, ({title, component}, key) => {
          return (
            <div key={key}>
              {title[lang]}
              {React.cloneElement(component, {lang})}
            </div>
          )
        })}
      </div>
    )
  }

  static propTypes = {
    lang: PropTypes.string.isRequired,
  }

}
