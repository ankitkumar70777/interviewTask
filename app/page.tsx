"use client";

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { employees } from "./data";
import { themeQuartz } from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const page = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([...employees]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First Name", filter: true, floatingFilter: true },
    { field: "lastName", headerName: "Last Name" },
    { field: "email", headerName: "Email", filter: true, floatingFilter: true },
    { field: "department", headerName: "Department" },
    { field: "position", headerName: "Position", filter: true, floatingFilter: true },
    { field: "salary", headerName: "Salary" },
    { field: "hireDate", headerName: "Hire Date" },
    { field: "age", headerName: "Age" },
    { field: "location", headerName: "Location", filter: true },
    { field: "performanceRating", headerName: "Performance Rating" },
    { field: "projectsCompleted", headerName: "Projects Completed" },
    {
      field: "isActive",
      headerName: "isActive",
      cellRenderer: "agCheckboxCellRenderer",
      editable: true,
    },
    { field: "skills", headerName: "skills", filter: true },
    { field: "manager", headerName: "manager" },
  ]);

  const pagination = true;
  const paginationPageSize = 20;
  const paginationPageSizeSelector = [20, 50, 100];

  const myTheme = themeQuartz.withParams({
    /* Low spacing = very compact */
    spacing: 5,
    /* Changes the colour of the grid text */
    foregroundColor: "rgb(120, 60, 0)", // dark orange-brown for text
    /* Changes the colour of the grid background */
    backgroundColor: "rgb(255, 250, 240)", // very light orange-beige
    /* Changes the header colour of the top row */
    headerBackgroundColor: "rgb(255, 200, 120)", // warm orange header
    /* Changes the hover colour of the row*/
    rowHoverColor: "rgb(255, 220, 180)", // soft orange hover
  });

  return (
      <div className="h-full w-full ">
          <div className="my-5"><h1 className="text-center text-2xl font-semibold text-[#9A3F3F]">Employee Portal</h1></div>
      <div style={{ height: "80vh", width: "100%" }}>
        <AgGridReact
          theme={myTheme}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
};

export default page;
