import { Box } from "@material-ui/core";
import React from "react";
import FeeTable from "../FeeTable/FeeTable";

function FeeTableHolder() {
  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <FeeTable />
    </Box>
  );
}

export default FeeTableHolder;
