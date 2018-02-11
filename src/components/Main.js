import React, { Component } from 'react';
import NavBar from './Navbar';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default Main;