import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class PageHeaderSubmenu extends Component {
  state = {
    opened: false
  }

  render () {
    const {
      props: {
        links,
        title,
        menuClose,
        lang
      },
      state: {
        opened
      },
      toggleOpen
    } = this
    return (
      <div>
        <div onClick={toggleOpen}>{title[lang]}</div>
        <ul
          className={
            classNames('PageHeader-submenu',
                       {'PageHeader-submenu-opened': opened}
            )}
        >
          {links.map(({to, title}, key) => {
            return (
              <li key={key} className='PageHeader-submenu-item'>
                <NavLink {...{to, onClick: menuClose}}>
                  {title[lang]}
                </NavLink>
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({opened: !this.state.opened})
  }

  static defaultProps = {
    links: [],
  }

  static propTypes = {
    links: PropTypes.array,
    title: PropTypes.object
  }

}
