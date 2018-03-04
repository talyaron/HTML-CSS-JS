import React, {Component} from 'react';
import Header from './View/Header';
import InputBox from './View/InputBox';
import Output from './View/Output';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'My Title'
    }

    this.updateTextState = this
      .updateTextState
      .bind(this);
  }

  updateTextState(e) {
    this.setState({text: e});
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.text}/>
        <main>
          < InputBox textPropsFunction={this.updateTextState}/>
          <Output textOutput={this.state.text}/>
        </main>
      </div>
    );
  }
}

export default App;
