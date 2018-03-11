import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Simple from './SimpleExample1';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/simple  ' component={Simple} />
          {/* <Route path='/simple/:expm' component={Simple} /> */}
          <Route path='/test2/:id' component={Simple} />
        </div>
      </Router>
    );
  }
}

export default App;



class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='/simple'>Simple - new page</a></li>
          <li><Link to='/simple'>Simple - sub-page</Link></li>
        </ul>
        <hr />
        <div>
          Home
          </div>
        <Route path='/simple' component={Simple} />
        <Route path='/test' component={Simple} />
      </div>
    )
  }
}


