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

  render() {
    const schoolData = this.props.data;

    const columnDefs = _.map(_.keys(_.first(schoolData)), (key) => ({
      headerName: key,
      field: key,
    }));
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: "200px", width: "600px" }}
      >
        <AgGridReact columnDefs={columnDefs} rowData={schoolData}></AgGridReact>
      </div>
    );
  }
}

export default Grid;
