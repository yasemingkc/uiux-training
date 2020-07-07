import React from "react";
import _ from "lodash";

class SchoolStats extends React.Component {
  render() {
    let schoolData = this.props.statsSchoolData;
    console.log("schooldata - before casting numbers", _.first(schoolData));
    schoolData = _.map(schoolData, (school) => {
      return {
        ...school,
        "Critical Reading Mean": Number(school["Critical Reading Mean"]),
        "Mathematics Mean": Number(school["Mathematics Mean"]),
        "Number of Test Takers": Number(school["Number of Test Takers"]),
        "Writing Mean": Number(school["Writing Mean"]),
      };
    });
    console.log("schooldata - after casting to numbers", _.first(schoolData));

    console.log("schoolData - not ordered", schoolData);
    schoolData = _.sortBy(schoolData, "Mathematics Mean").reverse();

    console.log("schoolData - ordered  by math mean", schoolData);

    // 1. eliminate the schools that have zero math means using _.filter
    // 2. calculate the mean of the means the math score sum using _.sumBy and ".length" property of the remaining array
    // 3. print out the names of the top 3 schools by math score using _.slice method

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
