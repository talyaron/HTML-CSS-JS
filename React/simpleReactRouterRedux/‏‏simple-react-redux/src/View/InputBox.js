import React, {Component} from 'react';
import './InputBox.css';
import {connect} from "react-redux";
import {addText} from '../model/actions/index';

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

        this
            .props
            .addTextPropsTest(e.target.value)

    }

    componentDidMount() {

        //get data from DB
        var passFunction = (textFromDB) => {
            this
                .props
                .addTextPropsTest(textFromDB);
        }

        window
            .DB
            .ref('tests/count')
            .on('value', function (data) {

                passFunction(data.val())
            })
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

const mapDispatchToProps = (dispatch) => {
    return {
        addTextPropsTest: text => dispatch(addText(text))
    };
};

export default connect(null, mapDispatchToProps)(InputBox);