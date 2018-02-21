import React, {Component} from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Header: {this.props.title}</h1>
            </header>
        )
    }
}

export default Header;