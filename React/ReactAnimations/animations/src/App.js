import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CSSTransitionGroup} from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    };
    this.handleAdd = this
      .handleAdd
      .bind(this);
  }

  handleAdd() {
    const newItems = this
      .state
      .items
      .concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this
      .state
      .items
      .slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this
      .state
      .items
      .map((item, i) => (
        <div className='card' key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
