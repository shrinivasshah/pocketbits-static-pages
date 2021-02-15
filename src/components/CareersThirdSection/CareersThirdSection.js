import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React from "react";
import mission from "../../assets/goal.svg";
import vision from "../../assets/aim.svg";
function CareersThirdSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
        flexWrap={`${matches ? "wrap" : null}`}
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
      <Typography variant="h2" className={classes.headerText2}>
        <b>Our Vision</b>
      </Typography>
      <Box
        height="35vh"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap={`${matches ? "wrap" : null}`}
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
    height: "100vh",
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      height: "200vh",
      minHeight: "200vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300vh",
      minHeight: "300vh",
    },

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
  headerText2: {
    textAlign: "center",
    marginTop: "90px",
  },
  img: {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
  },
  fontweight: {
    fontWeight: 200,
  },
}));

export default CareersThirdSection;
