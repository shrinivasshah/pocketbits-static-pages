import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EmptyTransparentCard from "../EmptyTransparentCard/EmptyTransparentCard";
import LandingPageFeaturesHolder from "../LandingPageFeaturesHolder/LandingPageFeaturesHolder";

function LandingPageFourthSection() {
  return (
    <Box
      color="#fff"
      minHeight="120vh"
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
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <EmptyTransparentCard>
          <Container>
            <Box
              width="100%"
              height="200px"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-evenly"
            >
              <Typography variant="h6">
                <strong>Security</strong>
              </Typography>
              <Typography variant="body1">Hack-free operations</Typography>
            </Box>
          </Container>
        </EmptyTransparentCard>
        <EmptyTransparentCard>
          <Container>
            <Box
              width="100%"
              height="200px"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-evenly"
            >
              <Box>
                <Typography variant="h6">
                  <strong>Accountability</strong>
                </Typography>
                <Typography variant="body1">Accounts audited by</Typography>
                <Typography>Independant professsionls.</Typography>
              </Box>
            </Box>
          </Container>
        </EmptyTransparentCard>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({}));
export default LandingPageFourthSection;
