import React, {Component} from 'react';
import './InputBox.css';

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };

        this.handleKeyup = this
            .handleKeyup
            .bind(this);
    }

    handleKeyup(e) {

        this
            .props
            .textPropsFunction(e.target.value);

        this.setState({text: e.target.value})

    }

    render() {
        return (
            <div className='inputBlock'>
                < input type='text' placeholder='write somthing' onKeyUp={this.handleKeyup}/>
                < input type='button' value='OK'/>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default InputBox;