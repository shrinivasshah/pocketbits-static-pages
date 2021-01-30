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

function LandingPageFourthSection() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
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
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   overflow: "hidden",
  // },
}));
export default LandingPageFourthSection;
