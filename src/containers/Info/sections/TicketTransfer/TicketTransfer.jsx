import React, { Component } from 'react'
import './TicketTransfer.css'
import text from './data/ticket_transfer_lang'

export default class TicketTransfer extends Component {
  render () {
    const {
      props: {
        lang
      }
    } = this
    return (
      <div className='TicketTransfer'>
        {text.how[lang]}
      </div>
    )
  }
}
