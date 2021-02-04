import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import mission from "../../assets/goal.svg";
import check from "../../assets/check.svg";
import user from "../../assets/user.svg";
import React from "react";

function AboutUsFourthSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.headerText} variant="h2">
        <b>Why PocketBits</b>
      </Typography>
      <Box
        height="30vh"
        width="90%"
        margin="0 auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography className={classes.text} variant="body1">
          Recognizing the importance to financial freedom right from the start,
          PocketBits has always been on the forefront of Crypto development in
          India.
        </Typography>
        <img className={classes.image} src={mission} alt="mission" />
      </Box>
      <Box
        height="30vh"
        width="90%"
        margin="0 auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <img className={classes.image} src={check} alt="mission" />
        <Typography className={classes.text} variant="body1">
          We offer the best in class services backed by our experience and have
          been known to build a transparent ecosystem around us.
        </Typography>
      </Box>
      <Box
        height="30vh"
        width="90%"
        margin="0 auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography className={classes.text} variant="body1">
          Recognizing the importance to financial freedom right from the start,
          PocketBits has always been on the forefront of Crypto development in
          India.
        </Typography>
        <img className={classes.image} src={user} alt="mission" />
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#fff",

    marginTop: "40vh",

    height: "100vh",
    minHeight: "100vh",
    width: "100vw",
  },
  headerText: {
    textAlign: "center",
    paddingBottom: "30px",
  },
  text: {
    width: "40%",
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "auto",
    },
  },
}));

export default AboutUsFourthSection;
