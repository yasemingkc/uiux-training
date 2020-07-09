import React from "react";
import "./App.css";
import WordComponent from "./WordComponent";
import SchoolStats from "./SchoolStats";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "initialstate",
      stateSchoolData: [],
    };
  }

  render() {
    //for tomorrow, create a subcomponent (like WordComponent) that displays the length of the array in this.state.schoolData
    console.log("abc");
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() => {
              fetch("/ping")
                .then((res) => res.json())
                .then((data) => this.setState({ word: data.word }));
            }}
          >
            Get Data
          </button>
          <WordComponent
            word={this.state.word}
            onClickText={() => {
              fetch("/pong")
                .then((res) => res.json())
                .then((data) => this.setState({ word: data.word }));
            }}
          />
          <button
            onClick={() => {
              fetch("/sat-scores")
                .then((res) => res.json())
                .then((data) => this.setState({ stateSchoolData: data }));
            }}
          >
            {" "}
            Fetch SAT Scores{" "}
          </button>
          <SchoolStats statsSchoolData={this.state.stateSchoolData} />
        </header>
      </div>
    );
  }
}

export default App;
