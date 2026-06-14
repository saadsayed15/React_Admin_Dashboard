// eslint-disable-next-line no-unused-vars
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",

      // @ts-ignore
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: "40%",
              height: "32px",

              mx: "auto",

              borderRadius: "4px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff", fontSize: "18px" }}
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff", fontSize: "18px" }} />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff", fontSize: "18px" }} />
            )}

            <Typography
              sx={{
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          sx={{
            "& .MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
