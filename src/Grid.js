import React from "react";
import _ from "lodash";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

class Grid extends React.Component {
  render() {
    const schoolData = this.props.data;

    const columnDefs = _.map(_.keys(_.first(schoolData)), (key) => ({
      headerName: key,
      field: key,
    }));
    console.log(columnDefs);
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
