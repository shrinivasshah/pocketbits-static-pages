import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import fast from "../../assets/fast.svg";
import inrDeposit from "../../assets/inrDeposit.svg";
import tradingFeesVector from "../../assets/tradingFeeVector.svg";
import SingleItem from "../LandingPageFeature/LandingPageFeature";

function LandingPageFeaturesHolder() {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      color="#fff"
      display="flex"
      alignItems="center"
      height="30vh"
      minHeight="30vh"
      flexWrap="wrap"
      width="100vw"
      justifyContent="space-evenly"
    >
      <SingleItem
        image={fast}
        text="Round The Clock Superfast KYC Verification"
      />
      <SingleItem
        image={inrDeposit}
        text="Real-Time INR Deposits & Withdrawals*"
      />
      <SingleItem
        image={tradingFeesVector}
        text="Zero wait trade executions without queue"
      />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "20vh",
    },
    ["@media (max-width:690px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginBottom: "70vh",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "100vh",
    },
  },
}));

export default LandingPageFeaturesHolder;
