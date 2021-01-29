import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import EmptyTransparentCard from "../EmptyTransparentCard/EmptyTransparentCard";

function LandingPageCardsHolder() {
  const classes = useStyles();
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
    >
      <EmptyTransparentCard>
        <Container maxWidth="sm">
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
        </Container>
      </EmptyTransparentCard>
      <EmptyTransparentCard>
        <Container maxWidth="sm">
          <Box
            width="100%"
            height="200px"
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
        </Container>
      </EmptyTransparentCard>
      <EmptyTransparentCard>
        <Container maxWidth="sm">
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
        </Container>
      </EmptyTransparentCard>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  accountability: {},
  audited: {
    paddingBottom: "20px",
  },
  reliability: {
    marginBottom: "25px",
  },
  reliabilitySubText: {
    lineHeight: "10px",
    marginBottom: "15px",
  },
}));

export default LandingPageCardsHolder;
