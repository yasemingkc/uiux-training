import React from "react";
import _ from "lodash";
import { AgGridReact } from "ag-grid-react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

//homework:
// create a highcharts bar chart with the scores for each school vertically below each other, CR, Math, WR
// https://www.highcharts.com/demo/bar-basic

const CustomRenderer = (cell) => {
  const schoolname = _.get(cell, ["data", "School Name"]);
  return <div>{schoolname.substring(0, 2)}</div>;
};

const BarChartRenderer = (cell) => {
  const cr = _.get(cell, ["data", "Critical Reading Mean"]);
  const math = _.get(cell, ["data", "Mathematics Mean"]);
  const wr = _.get(cell, ["data", "Writing Mean"]);
  const hcOptions = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "bar",
      height: 50,
      width: 100,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: ["CR", "WR", "Math"],
      labels: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
    },
    yAxis: {
      min: 0,
      max: 800,
      labels: {
        enabled: false,
      },
      title: {
        text: undefined,
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "",
        data: [cr, wr, math],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={hcOptions} />;
};

class Grid extends React.Component {
  // homework:
  // 1. make background white (instead of gray)
  // 2. remove "get data" & ping/pong handlers from the server
  // 3. put the "Fetch SAT Scores" button to the top of the page
  // 4. Put the statistics under the button
  // 5. Using ag-grid documentation, make the grid fill the rest of the page under it. (hint: the "gridApi" and "sizeColumnsToFit()" documentation in ag-grid )
  // 6. make the grid columns sortable

  // css homework:
  // create a sidebar right under the "top-bar" div, with fixed width of 200px

  componentDidUpdate() {
    this.gridApi && this.gridApi.sizeColumnsToFit();
  }

  render() {
    const schoolData = this.props.data;

    const schoolNameFormatter = (params) => _.lowerCase(params.value);
    let columnDefs = _.map(_.keys(_.first(schoolData)), (key) => ({
      headerName: key,
      field: key,
      valueFormatter: key === "School Name" ? schoolNameFormatter : undefined,
    }));
    columnDefs = [
      ...columnDefs,
      {
        headerName: "Viz",
        cellRenderer: "BarChartRenderer",
      },
    ];
    // alternative
    // columnDefs = _.flatten([columnDefs, {}])
    // [].push({})
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: "100vh", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={schoolData}
          onGridReady={(grid) => {
            this.gridApi = grid.api;
          }}
          frameworkComponents={{ BarChartRenderer: BarChartRenderer }}
        />
      </div>
    );
  }
}

export default Grid;
