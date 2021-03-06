import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";

function AboutUsSecondSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        height="35vh"
        minHeight="35vh"
        width="80%"
        margin="0 auto"
        marginBottom="10vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="strech"
      >
        <Typography variant="h2" className={classes.topHeader}>
          <b>About the Company</b>
        </Typography>

        <Typography variant="h6" className={classes.ulListItem}>
          Serving users since 2017, PocketBits takes pride in being one of
          Bharat’s oldest active crypto-platforms.
        </Typography>

        <Typography variant="h6" className={classes.ulListItem}>
          At PocketBits, we provide a digital asset tradin platform built on
          ultra-modern services for both the amateur as well as professional
          digital asset traders.
        </Typography>

        <Typography variant="h6" className={classes.ulListItem}>
          We see crypto as the future to financial freedom and aim at becoming
          the corridor to a digital economy for our users
        </Typography>
      </Box>
      <Box
        display="flex"
        height="35vh"
        width="80%"
        margin="0 auto"
        marginTop={`${matches ? "20vh" : null}`}
        flexDirection="column"
        justifyContent="center"
        alignItems="strech"
      >
        <Typography variant="h2" className={classes.topHeader}>
          <b>Who we are?</b>
        </Typography>
        <Typography variant="h6" className={classes.ulListItem2}>
          The team behind PocketBits is the secret to our growth!
        </Typography>
        <Typography variant="h6" className={classes.ulListItem2}>
          We are a group of young and dynamic professionals from diverse fields
          that share a common vision; viz. “to embrace change.”
        </Typography>
        <Typography variant="h6" className={classes.ulListItem2}>
          We are amongst the early passengers that boarded the Crypto express
          and optimistically look forward to getting like minded individuals
          onboard this journey to a digital future.
        </Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    height: "70vh",
    minHeight: "70vh",
    width: "100vw",
    [theme.breakpoints.only("xl")]: {
      marginTop: "300px",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "20vh",
    },
  },
  topHeader: {
    paddingBottom: "20px",
  },
  ulListItem: {
    lineHeight: "50px",
    fontFamily: "'Poppins', sans-serif",
  },
  ulListItem2: {
    lineHeight: "50px",
    fontFamily: "'Poppins', sans-serif",
  },
}));

export default AboutUsSecondSection;
