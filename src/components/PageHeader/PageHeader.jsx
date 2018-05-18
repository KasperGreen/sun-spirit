import React, { Component } from 'react'
import logo_image from './images/ssg_logo.svg'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'
import PageHeaderSubmenu from 'components/PageHeader/PageHeaderSubmenu'
import classNames from 'classnames'
import AppContext from 'context/AppContext'
import text from './data/page_header_lang'
import { LANG_EN, LANG_RU } from 'constants/LANG'
import BuyTicketCounter from 'components/BuyTicketCounter/BuyTicketCounter'
import ym from 'react-yandex-metrika'

export default class PageHeader extends Component {
  state = {
    menu_opened: false,
    show_price_rising_notifier: false
  }

  render () {
    const {
      state: {
        menu_opened,
        show_price_rising_notifier
      },
      menuToggle,
      menuClose,
      hideNotifier,
      showNotifier
    } = this
    return (
      <AppContext.Consumer>
        {({lang, setLang}) => {
          return (
            <header className="PageHeader">
              <div className="container">
                <div className='PageHeader-inner'>
                  <div className="PageHeader-logo">
                    <NavLink exact to="/">
                      <img src={logo_image} alt={'Лого SunSpirit'} />
                    </NavLink>
                  </div>
                  <nav className={classNames('PageHeader-list', {'PageHeader-list-opened': menu_opened})}>
                    <ul>
                      {text.menu_links.map(({to, title, submenu}, key) => {
                        return (
                          <li key={key} className='PageHeader-menu-item'>
                            {submenu
                             ? <PageHeaderSubmenu {...{links: submenu, lang, title, to, menuClose}} />
                             : <NavLink
                               className='PageHeader-menu-item-link'
                               {...{to, onClick: menuClose}}>
                               {title[lang]}
                             </NavLink>
                            }
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                  <div className="PageHeader-buy_button-wrapper">
                    <button
                      onClick={showNotifier}
                      data-tc-lang={lang}
                      data-tc-event="5a490b1e519f7b001fcadde4"
                      data-tc-token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSJ9.eyJwIjoiNTliYTVjMTFkMzUyODYwMDFjZjEyMjg0In0.TLXTeZmoOO_SyChB_gGCPAZASyyYjeM8dHY6dph1TW0"
                    >{text.buy_ticket_button[lang]}
                    </button>
                  </div>
                  <div className='PageHeader-change_lang_button-wrapper'>
                    <button
                      title={lang === LANG_RU ? 'Change language to english' : 'Изменить язык на русский'}
                      className={
                        classNames(
                          'PageHeader-change_lang_button',
                          {
                            'PageHeader-change_lang_button-en': lang === LANG_RU,
                            'PageHeader-change_lang_button-ru': lang === LANG_EN
                          }
                        )
                      }
                      onClick={() => {
                        menuClose()
                        setLang(lang === LANG_EN ? LANG_RU : LANG_EN)
                      }}
                    >{lang === LANG_RU ? 'English' : 'Русский'}</button>
                  </div>
                  <div className='PageHeader-mobile_nav-icon' id="mobile_nav_icon" onClick={menuToggle} />
                </div>
              </div>
              {show_price_rising_notifier &&
              <BuyTicketCounter {...{hideNotifier, lang}} />
              }
            </header>
          )
        }}
      </AppContext.Consumer>
    )
  }

  hideNotifier = () => {
    this.setState(
      {
        ...this.state,
        show_price_rising_notifier: false
      }
    )
  }
  menuClose = () => {
    this.setState({menu_opened: false})
  }
  menuOpen = () => {
    this.setState({menu_opened: true})
  }
  menuToggle = () => {
    const {
      state: {
        menu_opened
      }
    } = this

    this.setState({menu_opened: !menu_opened})
  }
  showNotifier = () => {
    ym('reachGoal', 'buy_ticket_button')
    this.setState(
      {
        ...this.state,
        show_price_rising_notifier: true
      }
    )
  }
}
