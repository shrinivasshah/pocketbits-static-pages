import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import tradingFees from "../../assets/tradingFeeVector.svg";
import inrDeposit from "../../assets/inrDeposit.svg";
import cryptoWithrawl from "../../assets/cryptoWithdrawl.svg";
import cryptoDeposit from "../../assets/cryptoDeposit.svg";
import inrWithdrawl from "../../assets/inrWithdrawlFee.svg";
import zeroPercent from "../../assets/zeroPercent.svg";
function FeaturesComponent() {
  const classes = styles();
  return (
    <Box
      className={classes.root}
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box
        height="30%"
        width="100%"
        textAlign="center"
        alignItems="flex-end"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Typography variant="h2" display="block" className={classes.MainText}>
          <strong>Bharat's Zero Fee Hero Trading Platform</strong>
        </Typography>
      </Box>
      <Box
        height="80vh"
        marginTop="5rem"
        position="relative"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyItems="center"
      >
        <img
          className={classes.zeroPercent}
          src={zeroPercent}
          alt="ntzero perce"
        />
        <img src={tradingFees} alt="trading fees" className={classes.topLeft} />
        <img src={inrDeposit} alt="inr deposit" className={classes.topRight} />
        <img
          src={cryptoWithrawl}
          alt="crypto withdrawl"
          className={classes.middleLeft}
        />
        <img
          src={cryptoDeposit}
          alt="crypto deposit"
          className={classes.middleRight}
        />
        <img
          src={inrWithdrawl}
          alt="inr withdrawl"
          className={classes.bottom}
        />
      </Box>
    </Box>
  );
}

const styles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      marginTop: "10%",
    },
    minHeight: "100vh",

    width: "100%",
    position: "relative",
    // "&:before": {
    //   content: "",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   background:
    //     " linear-gradient(180.69deg, rgba(23, 26, 35, 0.5) 0.62%, rgba(75, 80, 94, 0.405) 52.33%, rgba(36, 38, 43, 0.5) 99.44%)",
    //   borderRadius: "0 0 50% 50%/0 0 100% 100%",
    //   transform: "scaleX(1.5)",
    // },
  },
  zeroPercent: {
    position: "absolute",
    left: "50%",
    top: "25%",
    width: "20rem",
    transform: "translateX(-40%)",
    [theme.breakpoints.down("md")]: {
      position: "static",
      //   marginRight: "20px",
      display: "block",

      width: "80%",
      margin: "0 auto",
      //   textAlign: "center",
      transform: "translateX(0%)",
    },
  },
  topLeft: {
    position: "absolute",
    height: "auto",
    width: "17rem",
    top: "0",
    left: "30%",
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 4rem",
    },
  },
  topRight: {
    position: "absolute",
    height: "auto",
    width: "17rem",
    top: "0",
    right: "30%",
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 4rem",
    },
  },
  middleLeft: {
    position: "absolute",
    height: "auto",
    width: "17rem",
    top: "40%",
    left: "25%",
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 4rem",
    },
  },
  middleRight: {
    position: "absolute",
    height: "auto",
    width: "17rem",
    top: "40%",
    right: "25%",
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 4rem",
    },
  },
  bottom: {
    position: "absolute",
    height: "auto",
    width: "17rem",
    left: "50%",
    bottom: "0%",
    transform: "translateX(-45%)",
    [theme.breakpoints.down("md")]: {
      position: "static",
      margin: "0 4rem",
      transform: "translateX(0%)",
    },
  },
}));

export default FeaturesComponent;
