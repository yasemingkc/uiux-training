import React from "react";
import _ from "lodash";

class SchoolStats extends React.Component {
  render() {
    const schoolData = this.props.statsSchoolData;
    const numOfSchools = schoolData.length;
    const mathScoreSum = 20;
    return (
      <div>
        <div>Number of Schools: {numOfSchools}</div>
        <div>Math Score Sum: {mathScoreSum}</div>
      </div>
    );
  }
}

export default SchoolStats;
