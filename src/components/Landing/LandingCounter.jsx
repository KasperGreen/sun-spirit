import React, { Component } from 'react'
import Moment from 'react-moment'
import { LANG_RU } from 'constants/LANG'

export default class LandingCounter extends Component {
  render () {
    const {
        festival_start_date,
        festival_end_date,
        props: {lang}
      } = this,
      now_time = new Date().getTime()
    if (now_time > festival_end_date) return false
    return (
      <div className="Landing-counter">
        <div>
          {now_time < festival_start_date
           ? <div>{lang === LANG_RU && <span>через </span>}
              <Moment
                onChange={(val) => {
                  if (new Date().getTime() >= festival_start_date) this.forceUpdate()
                }}
                interval={1000}
                date={festival_start_date}
                fromNow={true}
                ago={lang === LANG_RU}
              /></div>
           : <div>в самом разгаре</div>
          }
        </div>
      </div>
    )
  }

  festival_end_date = new Date(2018, 5, 13, -1).getTime()
  festival_start_date = new Date(2018, 5, 9, 18).getTime()
}
