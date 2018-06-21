/*eslint-disable no-undef*/
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Nodes from './components/Nodes/Nodes';
import socketIOClient from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: "https:/172.124.75.144:8081",

      color: 'white'
    };
  }

  // Emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color)
  }

  // Function
  setColor = (color) => {
    this.setState({ color })
  }
  
  render() {
    
    const socket = socketIOClient(this.state.endpoint);

    socket.on('change color', (color) => {
      document.body.style.backgroundColor = color
    });

    return (
      <div className="App">
        <Header />
        
        <Wrapper>
          <Nodes />
          <div style={{ textAlign: "center" }}>
            <button onClick={() => this.send() }>Change Color</button>
            <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
            <button id="red" onClick={() => this.setColor('red')}>Red</button>
          </div>
        </Wrapper>
      </div>
    );
  };
};

export default App;
/*eslint-disable no-undef*/