import React, { Component } from 'react';
import { createNode } from './api';

class NodeForm extends Component {
  state = {
    nodeName: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    createNode(this.state.nodeName);
    this.setState({ nodeName: '' })
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.nodeName}
            onChange={(evt) => this.setState({
              nodeName: evt.target.value,
            })}
            placeholder="Node name"
            className="Form-nodeInput"
            required
          />
          <button
            type="submit"
            className="Form-nodeInput"
          >Create</button>
        </form>
      </div>
    );
  }
}

export default NodeForm;