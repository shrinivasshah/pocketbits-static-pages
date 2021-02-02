import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import careersHeaderImage from "../../assets/careersHeaderImage.svg";
import React from "react";
import { ScrollLink } from "react-scroll";
import { BsChevronCompactDown } from "react-icons/bs";

function CareersFirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.mainHeader}>
        <Box className={classes.headerDetailsContainer}>
          <Typography variant="h2">
            <b>
              At PocketBits we believe in Team viz.
              <span className={classes.spanColor}>
                Together Everyone Achieves More
              </span>
              !
            </b>
          </Typography>
          <Typography variant="h6" className={classes.headerSubText}>
            “If I succeed my team wins, if my team succeeds the company wins and
            if the company succeeds then we’re all happy”.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.headerLeftButton}
          >
            Join Our Team
          </Button>
        </Box>

        <img
          className={classes.headerImage}
          src={careersHeaderImage}
          alt="we are hiring"
        />
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    height: "100vh",
    minHeight: "100vh",
    width: "100vw",
    marginBottom: "15vh",
  },
  mainHeader: {
    color: "#fff",
    position: "relative",
    height: "100%",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  headerDetailsContainer: {
    // marginTop: "20vh",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      marginTop: "20vh",
    },
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "50%",
    height: "70%",
    [theme.breakpoints.only("xl")]: {
      height: "50%",
    },
  },
  spanColor: {
    color: theme.palette.primary.main,
  },
  headerSubText: {
    fontWeight: 100,
  },
  headerLeftButton: {
    borderRadius: "20px",
    color: "#fff",
  },
  // headerImageContainer: {
  //   flex: "1",
  // },
  headerImage: {
    marginTop: "30px",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
    },
    height: "auto",
    maxWidth: "100%",
  },
  downArrow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      transform: "translate(-50%,0%)",
    },
    bottom: "2%",
    left: "50%",
  },
  "@keyframes goDown": {
    "0%": {
      opacity: 0.5,
      transform: "translateY(0.0em)",
      // color: "#fff",
      color: theme.palette.primary.main,
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0.0em)",
      color: "#fff",
    },
  },
  goDown: {
    color: "#fff",
    fontSize: "3em",
    animation: "$goDown 1.9s ease-in-out",
    animationIterationCount: "infinite",
  },
}));

export default CareersFirstSection;
