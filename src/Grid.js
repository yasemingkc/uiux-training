import React from "react";
import _ from "lodash";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

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

    const columnDefs = _.map(_.keys(_.first(schoolData)), (key) => ({
      headerName: key,
      field: key,
    }));
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
        />
      </div>
    );
  }
}

export default Grid;
