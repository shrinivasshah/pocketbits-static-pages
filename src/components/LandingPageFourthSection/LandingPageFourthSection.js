import {
  Box,
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import reverseWave from "../../assets/wavesReversed.svg";
import LandingPageCardsHolder from "../LandingPageCardsHolder/LandingPageCardsHolder";
import LandingPageFeaturesHolder from "../LandingPageFeaturesHolder/LandingPageFeaturesHolder";

function LandingPageFourthSection() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      position="relative"
      color="#fff"
      minHeight="120vh"
      flexDirection="column"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <img className={classes.wavesReversed} src={reverseWave} alt="" />
      <LandingPageFeaturesHolder />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="10vh"
        width="80%"
      >
        <Typography variant="h3">
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
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  wavesReversed: {
    position: "absolute",
    width: "130vw",
    left: "-20vw",
    bottom: "-40vh",
  },
}));
export default LandingPageFourthSection;
