import React, {Component} from 'react';
import "./Footer.css";
import {connect} from "react-redux";

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>
                    my footer:{this.props.text[this.props.text.length - 1]}
                </p>
            </footer>
        )
    }
}

const mapStateToProps = state => {
    return {text: state.text}
}

export default connect(mapStateToProps)(Footer);