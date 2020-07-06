import React from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import WordComponent from './WordComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'initialstate',
      schoolData: []
    }
  }

  render() {
    console.log(this.state);
    //for tomorrow, create a subcomponent (like WordComponent) that displays the length of the array in this.state.schoolData
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
          <button onClick={() => {
            fetch('/sat-scores')
            .then((res) => res.json())
            .then((data) => this.setState({schoolData: data}))
          }}> Fetch SAT Scores </button>
        </header>
  
      </div>
    );
  }
}

export default App;
