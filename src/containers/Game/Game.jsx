import React, { Component } from 'react'
import './Game.css'
import PageWrapper from 'components/PageWrapper'

export default class Game extends Component {
  render () {
    return (
      <PageWrapper>
        <div className='Game'>
          <div className='Game-text'>
            <p>
              Я хочу сыграть с тобой в игру!
            </p>
            <p>
              Подробнее будет здесь.
            </p>
            <p>
              Запомни!
            </p>
            <p>
              Специально для тебя
              <br/>промокод "<strong>GAME</strong>"
            </p>
          </div>
        </div>
      </PageWrapper>
  )
  }
  }
