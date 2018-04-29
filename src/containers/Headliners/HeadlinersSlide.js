import React, { Component } from 'react'

export default class HeadlinersSlide extends Component {
  render () {
    const {
      props: {
        lang,
        slide: {
          image,
          title,
          description
        }
      }
    } = this
    return (
      <div className='Headliners-slide'>
        <div className="h1-cirle">
          <div className="h1-img" style={{backgroundImage: 'url(' + image + ')'}}></div>
        </div>
        <div className="h1-title">
          {title[lang]}
        </div>
        <div className="h1-text">
          {description[lang]}
        </div>
      </div>
    )
  }
}
