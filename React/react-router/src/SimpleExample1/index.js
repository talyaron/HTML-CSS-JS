import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Simple extends Component {
    render() {
        console.dir(this.props.match)
        if (this.props.match.url === '/test2') {
            console.log(this.props.match.params.id)
        }
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/test'>Test</Link></li>
                        <li><Link to='/toast'>Toast</Link></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
                    <hr />
                    <Route path="/test" component={Test} />
                    <Route path="/toast" component={Toast} />

                </div>
            </Router>
        )
    }
}
export default Simple;

class Test extends Component {

    render() {
        console.log(this.props);

        return (
            <h1>
                Test
      </h1>
        )
    }
}

class Toast extends Component {
    render() {
        return (
            <h2>
                Toast
      </h2>
        )
    }
};

