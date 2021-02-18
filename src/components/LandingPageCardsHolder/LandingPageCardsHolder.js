import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EmptyTransparentCard from "../EmptyTransparentCard/EmptyTransparentCard";
import reverseWave from "../../assets/wavesReversed.svg";

function LandingPageCardsHolder() {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      position="relative"
      width="100%"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
    >
      <EmptyTransparentCard>
        {/* <Container maxWidth="sm">
          <Box
            width="100%"
            height="200px"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="space-evenly"
          >
            <Typography variant="h5">
              <strong>Security</strong>
            </Typography>
            <Typography variant="body1">Hack-free operations</Typography>
          </Box>
        </Container> */}
        <Box width="100%" height="100px" textAlign="center">
          <div className={classes.innerTitle}>
            <Container maxWidth="md">
              <Typography variant="h5">
                <strong>Security</strong>
              </Typography>
            </Container>
          </div>
        </Box>
        <Box width="100%" height="150px">
          <div className={classes.innerText}>
            <Container maxWidth="md">
              <Typography variant="body1">Hack-free operations</Typography>
            </Container>
            <Container maxWidth="md">
              <Typography variant="body1">99% cold stoarge</Typography>
            </Container>
          </div>
        </Box>
      </EmptyTransparentCard>
      <EmptyTransparentCard>
        {/* <Container maxWidth="sm">
          <Box
            width="100%"
            minHeight="200px"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="space-evenly"
          >
            <Box marginBottom="20px">
              <Typography variant="h5" className={classes.accountability}>
                <strong>Accountability</strong>
              </Typography>
              <Typography variant="body1" className={classes.audited}>
                Accounts audited by
              </Typography>
              <Typography>Independant professsionls.</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h6">
              <strong>KYC & AML Complaint</strong>
            </Typography>
            <Typography variant="body1">
              <strong>(Bank Standards)</strong>
            </Typography>
          </Box>
        </Container> */}
        <Box width="100%" height="100px" textAlign="center">
          <div className={classes.innerTitle}>
            <Container maxWidth="md">
              <Typography variant="h5">
                <strong>Accountability</strong>
              </Typography>
            </Container>
          </div>
        </Box>
        <Box width="100%" height="200px">
          <div className={classes.innerText}>
            <Container maxWidth="md">
              <Typography variant="body1">
                Accounts audited by
                <br />
                Independant professsionls.
              </Typography>
            </Container>
            {/* <Container maxWidth="md">
              <Typography variant="body1">
                Independant professsionls.
              </Typography>
            </Container> */}
            <Container maxWidth="md">
              <Typography variant="body1">
                <strong>KYC & AML Complaint</strong>
              </Typography>
              <Typography variant="body1">
                <strong>(Bank Standards)</strong>
              </Typography>
            </Container>
          </div>
        </Box>
      </EmptyTransparentCard>
      <EmptyTransparentCard>
        {/* <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            height="400px"
          >
            <Typography variant="h5" className={classes.reliability}>
              <strong>Reliability</strong>
            </Typography>

            <Typography className={classes.reliabilitySubText}>
              Serving 129000 +
              <br />
              Happy Users
            </Typography>
            <Typography className={classes.reliabilitySubTextTwo}>
              Resillent Infrastructure
              <br />
              with minimal downtime
            </Typography>
          </Box>
        </Container> */}
        <Box width="100%" height="100px" textAlign="center">
          <div className={classes.innerTitle}>
            <Container maxWidth="md">
              <Typography variant="h5">
                <strong>Reliability</strong>
              </Typography>
            </Container>
          </div>
        </Box>
        <Box width="100%" height="150px">
          <div className={classes.innerText}>
            <Container maxWidth="md">
              <Typography variant="body1">
                Serving 129000 +
                <br />
                Happy Users
              </Typography>
            </Container>
            <Container maxWidth="md">
              <Typography variant="body1">
                Resillent Infrastructure
                <br />
                with minimal downtime
              </Typography>
            </Container>
          </div>
        </Box>
      </EmptyTransparentCard>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  // root: {
  //   overflowX: "hidden",
  // },
  innerTitle: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  innerText: {
    textAlign:'center',
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  wavesReversed: {
    position: "absolute",
    width: "130vw",
    left: "-20vw",
    bottom: "-50vh",
  },
  accountability: {},
  audited: {
    padding: "20px 0",
  },
  reliability: {
    marginBottom: "25px",
  },
  reliabilitySubText: {
    lineHeight: "25px",
    marginBottom: "15px",
  },
}));

export default LandingPageCardsHolder;
