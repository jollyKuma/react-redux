import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">DASHBOARD</a></li>
          <li><a href="/heroes">HEROES</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu
