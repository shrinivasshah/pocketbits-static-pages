import React from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import TransperantCard from "../TransperantCard/TransperantCard";
import CheckboxHolder from "../CheckboxHolder/CheckboxHolder";
import FeeDetails from "../FeeDetails/FeeDetails";

function FeeHeader() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="strech"
        justifyContent="space-evenly"
        className={classes.root}
      >
        <Box textAlign="center" className={classes.upperBox}>
          <Typography variant="h2">
            <strong>
              Break Free From Fees with
              <br /> PocketBits!
            </strong>
          </Typography>
        </Box>
        <Box display="flex" alignItems="strech">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.cardBox}
          >
            <TransperantCard />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            className={classes.detailsBox}
          >
            <FeeDetails />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    color: "#fff",
  },
  upperBox: {
    height: "20vh",
  },
  lowerBox: {
    height: "70vh",
  },
  cardBox: {
    width: "50%",
  },
}));
export default FeeHeader;
