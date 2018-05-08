import React, { Component } from 'react'
import Moment from 'react-moment'
import { LANG_RU } from 'constants/LANG'
import './BuyTicketCounter.css'
import PropTypes from 'prop-types'
import text from './data/buy_ticket_lang'

export default class BuyTicketCounter extends Component {
  render () {
    const {
        getNearestTime,
        props: {lang, hideNotifier}
      } = this,
      now_time = new Date().getTime(),
      price_rising_date = getNearestTime()
    if (!price_rising_date || now_time > price_rising_date) return false
    return (
      <div className="BuyTicketCounter">
        <button
          className='BuyTicketCounter-hide'
          onClick={hideNotifier}
        >✘ {text.hide[lang]}
        </button>
        <div className='container'>
          {text.increase[lang]} <Moment
          onChange={(val) => {
            if (new Date().getTime() >= price_rising_date) this.forceUpdate()
          }}
          interval={1000}
          date={price_rising_date}
          fromNow={true}
          ago={lang === LANG_RU}
        />
        </div>
      </div>
    )
  }

  getNearestTime = () => {
    return this.price_rising_dates.sort((a, b) => {return a > b}).find((date) => {return date > new Date().getTime()})
  }

  price_rising_dates = [
    new Date(2018, 4, 8+1).getTime(),
    new Date(2018, 5, 8+1).getTime()
  ]
  static propTypes = {
    lang: PropTypes.string.isRequired,
    hideNotifier: PropTypes.func.isRequired,
  }
}
