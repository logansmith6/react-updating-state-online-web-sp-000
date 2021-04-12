// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState(previousState => {
        return {
          toggled: !previousState.toggled
        }
      })
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ClickityClick;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';

ReactDOM.render(<ClickityClick />, document.getElementById('root'));
