import React from "react";
import _ from "lodash";
import "./SchoolStats.css";

class SchoolStats extends React.Component {
  render() {
    let schoolData = this.props.statsSchoolData;
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

    // lodash uniq, uniqBy, clone, cloneDeep
    // console.log(_.uniq([1, 2, 2, 3]));
    // console.log(_.uniqBy([{ word: "dsg" }, { word: "dsg" }], "word"));
    let sampleArray1 = [{ word: "dsg" }];
    let sampleArray2 = _.clone(sampleArray1);
    sampleArray2[0].word = "newWord";
    // console.log({ sampleArray1, sampleArray2 });
    // notice -> sampleArray2 manipulation affected sampleArray1
    let array1 = [{ word: "dsg" }];
    let array2 = _.cloneDeep(array1);
    array2[0].word = "newWord";
    // console.log({ array1, array2 });

    const numOfSchools = schoolData.length;
    return (
      <div className="schoolstats">
        <div className="row">
          <div className="description">Number of Schools</div>
          <div className="answer">{numOfSchools}</div>
        </div>
        <div className="row">
          <div className="description">Math Score Mean of Means</div>
          <div className="answer">{meanOfMeanMathScores.toFixed(0)}</div>
        </div>
        <div className="row">
          <div className="description">Top 3 Schools</div>
          <div className="answer">{top3MathSchools.join(", ")}</div>
        </div>
      </div>
    );
  }
}

export default SchoolStats;
