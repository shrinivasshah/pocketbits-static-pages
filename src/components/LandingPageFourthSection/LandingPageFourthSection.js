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
      paddingBottom="15vh"
      position="relative"
      color="#fff"
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
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "40vh",
    position: "relative",
    color: "#fff",
    minHeight: "150vh",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    background: `url(${wavesReversed})`,
    backgroundSize: "110%",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "70vh",
    [theme.breakpoints.down("lg")]: {
      backgroundPositionY: "95vh",
      backgroundSize: "115%",
      paddingBottom: "60vh",
    },
    justifyContent: "space-evenly",
  },
  // wavesReversed: {
  //   zIndex: -100,
  //   bottom: "-20vh",
  //   position: "absolute",
  //   width: "100%",
  // },
}));
export default LandingPageFourthSection;
