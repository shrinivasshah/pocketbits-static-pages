import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import mission from "../../assets/goal.svg";
import vision from "../../assets/aim.svg";
function CareersThirdSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.headerText}>
        <b>Our Mission</b>
      </Typography>
      <Box
        height="35vh"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <img src={mission} alt="mission" className={classes.img} />
        <Box
          width="60%"
          display="flex"
          alignItems="strech"
          flexDirection="column"
          justifyContent="space-around"
          height="100%"
        >
          <Typography variant="h6" className={classes.fontweight}>
            PocketBits was primarily set up as a simplified gateway to access
            the then complicated world of Cryptocurrencies. Since then we have
            developed into a full fledged successful crypto exchange.
          </Typography>
          <Typography variant="h6" className={classes.fontweight}>
            <b>Our mission at PocketBits is to</b> “Create a cryptocurrency
            ecosystem and provide our users with a smooth and efficient platform
            in order to help them achieve financial freedom.”
          </Typography>
        </Box>
      </Box>
      <Typography variant="h2" className={classes.headerText}>
        <b>Our Vision</b>
      </Typography>
      <Box
        height="35vh"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box width="60%">
          <Typography variant="h6" className={classes.fontweight}>
            “ To facilitate the path for rapid adoption of cryptocurrency and by
            doing so; become the go-to digital asset trading platform while
            simultaneously maintaining the repo of providing unprecedented
            support and innovative trading tools for all our esteemed users”.
          </Typography>
        </Box>
        <img src={vision} alt="mission" className={classes.img} />
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    width: "80%",
    margin: "15vh auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "streach",
    justifyContent: "space-around",
  },
  headerText: {
    textAlign: "center",
  },
  img: {
    flex: 1,
  },
  fontweight: {
    fontWeight: 200,
  },
}));

export default CareersThirdSection;
