import React, { Component } from 'react';
import Button from './Button';

export default class AddPost extends Component {
  render() {
    return <div>
      <p>Reddit Clone</p>
      <input
        onChange={(event) => this.setState({title: event.target.value})}
      />
      <Button onClick={() => this.props.onAdd(this.state)}>Add</Button>
    </div>;
  }
}
