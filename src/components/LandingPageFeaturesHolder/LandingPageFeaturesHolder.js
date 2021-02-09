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
      paddingBottom: "100vh",
    },
  },
}));

export default LandingPageFeaturesHolder;
