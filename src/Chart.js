import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

// homework: create a scatterplot with xaxis = critical reading mean, y axis = math mean, each dot = 1 school & when you hover over, you get the school name.

const createColumnChartOptions = (incomingSchoolData) => {
  let schoolData = _.slice(incomingSchoolData, 0, 5);
  return {
    credits: {
      enabled: false,
    },
    title: {
      text: "5 Schools' Scores",
    },
    xAxis: {
      categories: _.map(schoolData, "School Name"),
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

const createScatterPlotOptions = (incomingSchoolData) => {
  let series = _.map(incomingSchoolData, (school) => {
    return {
      name: _.get(school, "School Name", ""),
      color: "black",
      marker: {
        symbol: "circle",
        radius: 3,
      },
      data: [
        {
          x: _.get(school, "Critical Reading Mean"),
          y: _.get(school, "Mathematics Mean"),
        },
      ],
    };
  });

  return {
    credits: {
      enabled: false,
    },
    title: {
      text: "NYC Schools Math vs CR Scores",
    },
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      scatter: {
        tooltip: {
          headerFormat: "<b>{series.name}</b><br>",
          pointFormat: "CR: {point.x}, Math: {point.y}",
        },
      },
    },
    xAxis: {
      title: {
        text: "Critical reading mean",
      },
    },
    yAxis: {
      title: {
        text: "Math mean",
      },
    },
    series,
  };
};

class Chart extends React.Component {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={createScatterPlotOptions(this.props.data)}
      />
    );
  }
}

export default Chart;
