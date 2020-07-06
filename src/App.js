import React from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import WordComponent from './WordComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'initialstate'
    }
  }

  render() {
    console.log(_.lowerCase('ABC'));
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => {
            fetch('/ping')
            .then((res) => res.json())
            .then((data) => this.setState({word: data.word}))
          }}>Get Data</button>
          <WordComponent
            word={this.state.word}
            onClickText={() => {
              fetch('/pong')
              .then((res) => res.json())
              .then((data) => this.setState({word: data.word}))
            }}
          />
        </header>
  
      </div>
    );
  }
}

export default App;
