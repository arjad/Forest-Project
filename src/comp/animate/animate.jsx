import React, { Component } from 'react';
import Jun from '../img/jungle.jpg';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Flip from 'react-reveal/Flip';

import './animate.css';

class Animate extends Component {
  render() {
    return (
      <div className="Animate">
        <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            <img src={Jun} className="App-logo" alt="logo" />
          </header>
        </Zoom>


      </div>
    );
  }
}

export default Animate;