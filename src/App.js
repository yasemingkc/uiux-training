import React from "react";
import _ from "lodash";
import "./App.css";
import SchoolStats from "./SchoolStats";
import Grid from "./Grid";
import Chart from "./Chart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "initialstate",
      stateSchoolData: [],
    };
  }

  render() {
    let schoolData = this.state.stateSchoolData;
    schoolData = _.map(schoolData, (school) => {
      return {
        ...school,
        "Critical Reading Mean": Number(school["Critical Reading Mean"]),
        "Mathematics Mean": Number(school["Mathematics Mean"]),
        "Number of Test Takers": Number(school["Number of Test Takers"]),
        "Writing Mean": Number(school["Writing Mean"]),
      };
    });
    schoolData = _.sortBy(schoolData, "Mathematics Mean").reverse();

    // 1. eliminate the schools that have zero math means using _.filter (result: down from 460 to 386)
    schoolData = _.filter(
      schoolData,
      (school) => school["Mathematics Mean"] !== 0
    );

    // schoolData = _.map(schoolData, (school) =>
    //   _.omit(school, "Number of Test Takers")
    // );

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
            <div className="statistics">
              <SchoolStats statsSchoolData={schoolData} />
            </div>
            <div className="chart">
              <Chart />
            </div>
            <div className="grid">
              <Grid data={schoolData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
