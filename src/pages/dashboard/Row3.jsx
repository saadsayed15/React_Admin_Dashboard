import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../piechart/Pie";
import React from "react";
import Bar from "../barchart/Bar";
import Geo from "../geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexDirection: "row",
        flexWrap: "wrap",
        mt: 1.4,
      }}
    >
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            color: theme.palette.secondary.main,
            fontWeight: 600,
          }}
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            color: theme.palette.secondary.main,
            fontWeight: 600,
          }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashbord={true} />
      </Paper>
    </Box>
  );
};

export default Row3;
