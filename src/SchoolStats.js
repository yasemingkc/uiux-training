import React from "react";
import _ from "lodash";

class SchoolStats extends React.Component {
  render() {
    let schoolData = this.props.statsSchoolData;
    /*
    Critical Reading Mean: "391"
DBN: "01M292"
Mathematics Mean: "425"
Number of Test Takers: "31"
School Name: "Henry Street School for International Studies"
Writing Mean: "385"
    */
    console.log("schooldata - before", schoolData);
    schoolData = _.map(schoolData, (school) => {
      return {
        ...school,
        "Critical Reading Mean": Number(school["Critical Reading Mean"]),
      };
    });
    console.log("schooldata - after", schoolData);

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
