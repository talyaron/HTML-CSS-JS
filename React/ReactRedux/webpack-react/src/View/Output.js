import React, {Component} from 'react';
import './Output.css';

class Output extends Component {

    render() {
        return (
            <div className='output'>
                <h2>
                    {this.props.textOutput}
                </h2>
            </div>
        )
    }
}

export default Output;