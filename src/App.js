import React from "react";
import "./App.css";
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
    return (
      <div className="App">
        <div className="top-bar">
          <div className="title">DSG Sandbox App</div>
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
        </div>
        <div className="sidebar-and-page">
          <div className="sidebar" />
          <div className="page">
            <div className="statistics">Some statistics</div>
            <div className="grid" />
          </div>
        </div>
      </div>
    );
  }
}

/*

<header className="App-header">
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
*/

export default App;
