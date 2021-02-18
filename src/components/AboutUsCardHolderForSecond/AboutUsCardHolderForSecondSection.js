import { makeStyles } from "@material-ui/styles";
import React from "react";
import CareersSecondSection from "../CareersSecondSection/CareersSecondSection";
import wavesReversed from "../../assets/wavesReversed.svg";
function AboutUsCardHolderForSecondSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <img
        className={classes.wavesReversed}
        src={wavesReversed}
        alt="main wave"
      /> */}
      <CareersSecondSection aboutUs />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "25vh",
    },
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "110vh",
    minHeight: "110vh",
  },
  // wavesReversed: {
  //   position: "absolute",
  //   left: "-10%",
  //   top: "22%",
  //   transform: "scale(0,40%)",
  // },
}));

export default AboutUsCardHolderForSecondSection;
