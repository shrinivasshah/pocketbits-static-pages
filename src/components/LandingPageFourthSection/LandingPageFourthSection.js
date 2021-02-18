import {
  Box,
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import LandingPageCardsHolder from "../LandingPageCardsHolder/LandingPageCardsHolder";
import LandingPageFeaturesHolder from "../LandingPageFeaturesHolder/LandingPageFeaturesHolder";
import wavesReversed from "../../assets/wavesReverseEdited.svg";
function LandingPageFourthSection() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      position="relative"
      color="#fff"
      height="150vh"
      minHeight="150vh"
      flexDirection="column"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <LandingPageFeaturesHolder />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="20vh"
        width="80%"
        margin="0 auto"
      >
        <Typography variant="h3" className={classes.title}>
          <strong>
            Bharat’s Most Atmanirbhar & Trusted Exchange since 2017
          </strong>
        </Typography>
      </Box>
      {small ? (
        <Container>
          <LandingPageCardsHolder />
        </Container>
      ) : (
        <LandingPageCardsHolder />
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingBottom: "40vh",
    position: "relative",
    color: "#fff",
    marginBottom: "20px",
    background: `url(${wavesReversed})`,
    backgroundSize: "110%",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "70vh",
    [theme.breakpoints.down("lg")]: {
      backgroundPositionY: "95vh",
      backgroundSize: "115%",
      // paddingBottom: "60vh",
      background: "none",
    },
  },
  title: {
    width: "100%",
    textAlign: "center",
  },

  // wavesReversed: {
  //   zIndex: -100,
  //   bottom: "-20vh",
  //   position: "absolute",
  //   width: "100%",
  // },
}));
export default LandingPageFourthSection;
