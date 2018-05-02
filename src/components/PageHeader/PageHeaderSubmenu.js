import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class PageHeaderSubmenu extends Component {
  state = {
    opened: false
  }

  subMenuClose = () => {
    this.setState({opened: false})
  }

  onClick = (e) => {
    const {
      props: {
        menuClose
      },
      subMenuClose
    } = this
    menuClose()
    subMenuClose()
    e.target.blur()
  }

  render () {
    const {
      props: {
        links,
        title,
        lang
      },
      state: {
        opened
      },
      toggleOpen,
      onClick
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
                <NavLink {...{to, onClick}}>
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
