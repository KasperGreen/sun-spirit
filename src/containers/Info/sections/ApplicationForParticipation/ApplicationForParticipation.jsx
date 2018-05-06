import React, { Component } from 'react'
import './ApplicationForParticipation.css'
import { LANG_EN } from 'constants/LANG'

export default class ApplicationForParticipation extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='ApplicationForParticipation'>
        {lang === LANG_EN && 'Sorry, only Russian text.'}
        <div className="hrefs"><p><a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNxXJ3owjG0jvHXFONzT-qv7KUGY6ZN9MB9IOjcVDc3KWayg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >Арт - объект / инсталляция / выставка</a></p><p><a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe2yonkCHHzLAbJBnb1UAImqXAnuPPkT9XgJmjRl27EE26q3A/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >Волонтер / специалист</a></p><p><a
          href="https://docs.google.com/forms/d/e/1FAIpQLScOVdAStBMhKeDoriTU0CBUZgh0Or_HSA5LJtYZjYzEgeCr_A/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >Арт-маркет</a></p><p><a
          href="https://docs.google.com/forms/d/e/1FAIpQLSef844adF7CBHjrV33T8cBGfVbqm5nsbR4Mfydun6tufJr5vw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >Партнерам</a></p></div>
      </div>
    )
  }
}
