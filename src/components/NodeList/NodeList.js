import React, { Component } from 'react';
import { subscribeToNodes } from '../.././api';

class NodeList extends Component {
  constructor(props) {
    super(props);

    subscribeToNodes((drawing) => {
      this.setState(prevState => ({
        // nodes: prevState.nodes.concat([node]),
      }));
    });
  }
  state = {
    nodes: [],
  };

  render() {
    const nodes = this.state.nodes.map(node => (
      <li
        className="NodeList-item"
        key={node.id}
      >
        {node.name}
      </li>
    ))
    return (
      <ul
        className="NodeList"
      >
        {nodes}
      </ul>
    );
  }
}

export default NodeList;