import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class SideBar extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical style={{marginTop:"5em"}} >
        <Menu.Item
          as={NavLink} to="/list/employers"
          name='inbox'
          active={activeItem === 'inbox'}
          onClick={this.handleItemClick}
        >
          Employers
        </Menu.Item>

        <Menu.Item
        as={NavLink} to="/list/jobseekers" 
          name='spam'
          active={activeItem === 'spam'}
          onClick={this.handleItemClick}
        >
          JobSeekers
        </Menu.Item>

        <Menu.Item
          name='updates'
          active={activeItem === 'updates'}
          onClick={this.handleItemClick}
        >
          JobAdverts
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>
    )
  }
}
