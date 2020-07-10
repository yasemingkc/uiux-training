import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// homework: create a scatterplot with xaxis = critical reading mean, y axis = math mean, each dot = 1 school & when you hover over, you get the school name.

const options = {
  title: {
    text: "My chart",
  },
  // "xAxis": {} (title )
  // "yAxis": {}
  series: [
    // "type" -> line, scatter -> not connect the dots, because we want a scatterplot
    // "marker" in the scatterplot set the dots to look like dots vs triangles etc
    {
      data: [1, 2, 3],
      // data: [{ x: 123, y: 123}]
    },
  ],
};

class Chart extends React.Component {
  render() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default Chart;
