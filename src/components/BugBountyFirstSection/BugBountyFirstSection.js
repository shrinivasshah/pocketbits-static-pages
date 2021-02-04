import React from "react";
import butterflyLeft from "../../assets/butterflyLeft.svg";
import butterflyRight from "../../assets/butterflyRight.svg";
import headerImage from "../../assets/headerRight.svg";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function BugBountyFirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.butterflyLeft}
        src={butterflyLeft}
        alt="butterfly"
      />
      <img
        className={classes.butterflyLeft2}
        src={butterflyLeft}
        alt="butterfly"
      />
      <img
        className={classes.butterflyRight}
        src={butterflyRight}
        alt="butterfly"
      />
      <Box
        height="70%"
        width="80%"
        margin="0 auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          height="80%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          width="40%"
        >
          <Typography variant="h2">
            <b>Pocketbits Bug Bounty Program</b>
          </Typography>
          <Typography variant="body1">
            In the event of you spotting any security issue on our website, you
            will be eligible for a reward, provided you report it directly to
            us.
          </Typography>
          <Typography variant="body1">
            The Reward will be based on the severity and complexity of the issue
            (minimum of <b>₹1000</b> assured for legit issues)
          </Typography>
          <Typography variant="body1">
            You will need to send a description of the issue, along with details
            on how to rectify the problem, to:
            <br />
            <span className={classes.mainColor}>
              <b>Support@Pocketbits.in</b>
            </span>
          </Typography>
        </Box>
        <div className={classes.imageHolder}></div>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    position: "relative",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainColor: {
    color: "#56C3A4",
  },
  butterflyLeft: {
    zIndex: "-100",
    position: "absolute",
    bottom: "10",
    left: "0",
  },
  butterflyLeft2: {
    zIndex: "-100",
    position: "absolute",
    top: "30%",
    right: "0",
    width: "120px",
  },
  butterflyRight: {
    zIndex: "-100",
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  imageHolder: {
    flex: 1,
    height: "100%",
    background: `url(${headerImage}) no-repeat center`,
  },
}));

export default BugBountyFirstSection;
