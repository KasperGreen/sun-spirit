import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeadlinersSlide extends Component {
  render () {
    const {
      props: {
        lang,
        slide: {
          image,
          title,
          description,
          player_url
        }
      }
    } = this
    return (
      <div className='Headliners-slide'>
        <div className="h1-cirle">
          {player_url ?
           <Link
             to={player_url}
             className="h1-img Headliners-slide-player_link"
             style={{backgroundImage: 'url(' + image + ')'}}
           />
                      :
           <div
             className="h1-img"
             style={{backgroundImage: 'url(' + image + ')'}}
           />
          }
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
