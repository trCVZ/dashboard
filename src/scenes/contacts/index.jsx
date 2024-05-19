import { Box, Toolbar } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import { mockDataContacts } from "../../data/mockData.js";

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      headerClassName: "headerColumns",
    },
    { field: "registrarID", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "headerColumns",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      headerClassName: "headerColumns",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerClassName: "headerColumns",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "headerColumns",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      headerClassName: "headerColumns",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      headerClassName: "headerColumns",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipdCode",
      headerClassName: "headerColumns",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for future reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none !important",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .css-1essi2g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "none !important",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
