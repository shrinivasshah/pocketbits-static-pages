import React from "react";

import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import TransperantCard from "../TransperantCard/TransperantCard";
import FeeDetails from "../FeeDetails/FeeDetails";

function FeeHeader() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="strech"
      justifyContent="space-around"
      className={classes.root}
    >
      <Typography variant="h3" className={classes.header}>
        <strong>Break Free From Fees with PocketBits!</strong>
      </Typography>

      <Grid container>
        <Grid item xl={6} md={6} sm={12} justify="center">
          <Box display="flex" alignItems="center" justifyContent="center">
            <TransperantCard list />
          </Box>
        </Grid>
        <Grid item xl={6} md={6} sm={12}>
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            className={classes.detailsBox}
          >
            <FeeDetails />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {},
    minHeight: "100vh",
    color: "#fff",
  },
  upperBox: {
    height: "20vh",
  },
  lowerBox: {
    height: "70vh",
  },
  detailsBox: {
    height: "100%",

    width: "70%",
    margin: "0 auto",
    // [theme.breakpoints.down("sm")]: {
    //   paddingLeft: "12%",
    //   width: "90%",
    // },
  },
  header: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20%",
    },
  },
}));
export default FeeHeader;
