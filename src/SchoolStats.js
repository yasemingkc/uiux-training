import React from "react";
import _ from "lodash";

class SchoolStats extends React.Component {
  render() {
    let schoolData = this.props.statsSchoolData;
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

    // javascript == === != !==
    // ==, != -> truthy or falsy
    // ===, !== -> true or false -> PREFERRED
    // undefined, null, '', false, 0 --> falsy
    // null == 0 --> true

    // 2. calculate the mean of the means the math score sum using _.sumBy and ".length" property of the remaining array

    const meanOfMeanMathScores =
      _.sumBy(schoolData, "Mathematics Mean") / schoolData.length;

    // 3. print out the names of the top 3 schools by math score using _.slice method

    const top3MathSchools = _.map(
      _.slice(schoolData, 0, 3),
      (school) => school["School Name"]
    );

    const numOfSchools = schoolData.length;
    return (
      <div>
        <div>Number of Schools: {numOfSchools}</div>
        <div>Math Score Mean of Means: {meanOfMeanMathScores.toFixed(0)}</div>
        <div>Top 3 Schools: {top3MathSchools.join(", ")}</div>
      </div>
    );
  }
}

export default SchoolStats;
