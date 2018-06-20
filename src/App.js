import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nodes from './components/Nodes/Nodes';
import './App.css';

import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  state = {
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Nodes />
        <Wrapper>

        </Wrapper>
      </div>
    );
  };
};

export default App;