import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

// homework: create a scatterplot with xaxis = critical reading mean, y axis = math mean, each dot = 1 school & when you hover over, you get the school name.

const createOptions = (incomingSchoolData) => {
  let schoolData = _.slice(incomingSchoolData, 0, 5);
  return {
    title: {
      text: "5 Schools' Scores",
    },
    xAxis: {
      categories: _.map(schoolData, (school) => school["School Name"]),
    },
    series: [
      {
        type: "column",
        name: "Math Mean",
        data: _.map(schoolData, "Mathematics Mean"),
      },
      {
        type: "column",
        name: "Crit Mean",
        data: _.map(schoolData, "Critical Reading Mean"),
        color: "purple",
      },
    ],
  };
};

class Chart extends React.Component {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={createOptions(this.props.data)}
      />
    );
  }
}

export default Chart;
