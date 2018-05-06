import React, { Component } from 'react'
import AppContext from 'context/AppContext'
import logo_grey from 'images/logo_grey.svg'
import icon_fb from 'images/Icon_FB.svg'
import icon_vk from 'images/Icon_VK.svg'
import text from './data/page_footer_lang'
import './PageFooter.css'

export default class PageFooter extends Component {
  render () {
    const {
      props: {
        footer_style
      }
    } = this
    return (
      <AppContext.Consumer>
        {({lang}) => {
          return (
            <footer className="section footer PageFooter" style={footer_style}>
              <div className="container">
                <div className="footer-container">
                  <div className="logo">
                    <a href="/"><img src={logo_grey} alt={'logo'} className="logomini" /></a>
                  </div>
                  <div className="col-left">
                    © 2017 Sun Spirit Group <br />
                    {text.organization_name[lang]}<br />
                    {text.psrn[lang]} 1179204004165<br />
                    {text.inn[lang]} 9203542238<br />
                  </div>
                  <div className="col-right">
                    {text.city[lang]} <br />
                    {text.street[lang]} <br />
                    {text.phone[lang]}: <a href="tel:89858042503">8 985
                    804-25-03</a><br />
                    E-mail: <a href="mailto:info@sunspiritgroup.ru">info@sunspiritgroup.ru</a>
                  </div>
                  <div className="social">
                    <a href="https://ru-ru.facebook.com/sunspiritfest/" rel="noreferrer noopener" target="_blank">
                      <img src={icon_fb} alt="мы в facebook" />
                    </a>
                    <a href="https://vk.com/board133216135" rel="noreferrer noopener" target="_blank">
                      <img src={icon_vk} alt="мы в vk" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
