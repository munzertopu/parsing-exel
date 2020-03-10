import React, { Component } from "react";
import "./App.css";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "ID", field: "ID", sortable: true, filter: true },
        { headerName: "Client", field: "Client", sortable: true, filter: true },
        {
          headerName: "Description",
          field: "Description",
          sortable: true,
          filter: true
        },
        { headerName: "Value", field: "Value", sortable: true, filter: true },
        {
          headerName: "Quantity",
          field: "Quantity",
          sortable: true,
          filter: true
        },
        {
          headerName: "Sold By ",
          field: "Sold By",
          sortable: true,
          filter: true
        },
        {
          headerName: "Country ",
          field: "Country",
          sortable: true,
          filter: true
        }
      ],

      rowData: null
      // rowData: [
      //   {
      //     make: "Toyota",
      //     model: "Celica",
      //     price: 35000
      //   },
      //   {
      //     make: "Ford",
      //     model: "Mondeo",
      //     price: 32000
      //   },
      //   {
      //     make: "Porsche",
      //     model: "Boxter",
      //     price: 72000
      //   }
      // ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:4500/")
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "600px", width: "1400px" }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
        ></AgGridReact>
      </div>
    );
  }
}

export default App;
