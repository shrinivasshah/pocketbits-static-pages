import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import LandingPageFeature from "../LandingPageFeature/LandingPageFeature";
import tradingFeeVector from "../../assets/tradingFeeVector.svg";
import fast from "../../assets/fast.svg";
import lightning from "../../assets/lightning.svg";
import reliablility from "../../assets/01.svg";
function AboutUsFifthSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.boxGradient}>
        <div className={classes.featuresHolder}>
          <Typography variant="h2">
            <b>Why Our Current Users Love Us</b>
          </Typography>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            textAlign="center"
            flexWrap="wrap"
          >
            <LandingPageFeature
              title="Simple Hassle Free and Zero Fee Crypto Trading"
              image={tradingFeeVector}
              aboutUs
            />
            <LandingPageFeature
              title="Round the clock superhuman support"
              image={fast}
              aboutUs
            />
            <LandingPageFeature
              title="Competitive rates with lightning fast trade execution."
              image={lightning}
              aboutUs
            />
            <LandingPageFeature
              title="Reliability, Accountability and Transparency at our core"
              image={reliablility}
              aboutUs
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
  },
  boxGradient: {
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "strech",
    justifyContent: "space-evenly",
  },
  featuresHolder: {
    width: "100%",
    color: "#fff",
    margin: "0 auto",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
  },
}));

export default AboutUsFifthSection;
