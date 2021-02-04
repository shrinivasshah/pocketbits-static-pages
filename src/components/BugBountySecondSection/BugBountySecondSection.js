import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function BugBountySecondSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        marginBottom="5%"
        minHeight="50vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography variant="h2">
          <b>All Bounty Hunters Are expected to</b>
        </Typography>
        <ul className={classes.unorderdList}>
          <li>
            <Typography variant="h6">
              Report their finding by writing to us directly at
              support@pocketbits.in without making any information public. We
              will confirm receipt of submission.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Keep the information about any vulnerability you've discovered
              confidential between PocketBits & yourself until we have resolved
              the problem.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Please make every effort to avoid privacy violations, degradation
              of user experience, disruption to production systems, and
              destruction of data during security testing.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Disclosure of the vulnerability to public, social media or a third
              party will result in suspension from PocketBits's Bug Bounty.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Perform research only within the following limited scope. If you
              follow these guidelines when reporting an issue to us, we commit
              to:
            </Typography>
          </li>
          <li style={{ listStyle: "none" }}>
            <ul>
              <li className={classes.subList}>
                Working with you to understand and resolve the issue quickly
              </li>
              <li className={classes.subList}>
                Not pursue or support any legal action related to your research
              </li>
              <li className={classes.subList}>
                Suitably reward you for your efforts
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="h6">
              Based on the criticality level we might take 2 days to 2 weeks to
              fix the vulnerability.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        marginBottom="5%"
        minHeight="50vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography variant="h2">
          <b>Qualifying Bug Vulnerabilities</b>
        </Typography>
        <ul className={classes.unorderdList}>
          <li>
            <Typography variant="h6">Balanace Manipulation</Typography>
          </li>
          <li>
            <Typography variant="h6">
              Gaining access to any of our servers
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Leakage of personal Information of individual or other users.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Payments Manipulation</Typography>
          </li>
          <li>
            <Typography variant="h6">User Account Take over</Typography>
          </li>
          <li>
            <Typography variant="h6">Cross-site scripting</Typography>
          </li>
        </ul>
      </Box>
      <Box
        marginBottom="5%"
        minHeight="50vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography variant="h2">
          <b>Non-Qualifying Bug Vulnerabilities</b>
        </Typography>
        <ul className={classes.unorderdList}>
          <li>
            <Typography variant="h6">
              Shared links leaked through the system clipboard.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Social engineering attempts on our staff including phishing emails
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Any URIs leaked because a malicious app has permission to view
              URIs opened
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Absence of certificate pinning</Typography>
          </li>
          <li>
            <Typography variant="h6">
              Absence of Root/Jail-broken Detection
            </Typography>
          </li>
          <li>
            <Typography variant="h6">Absence of code obfuscation</Typography>
          </li>
          <li>
            <Typography variant="h6">
              Open-Redirects. 99% of open redirects have low security impact.
              For the rare cases where the impact is higher, e.g., stealing
              oauth tokens, we do still want to hear about them.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Reports that state that software is out of date/vulnerable without
              a 'Proof of Concept'.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        marginBottom="5%"
        minHeight="50vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography variant="h2">
          <b>Rules</b>
        </Typography>
        <ul className={classes.unorderdList}>
          <li>
            <Typography variant="h6">
              Please make sure to use your own account for testing or research
              purposes.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Do not attempt to gain access to another user’s account or
              confidential information.{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Please do not test for spam, social engineering or denial of
              service issues.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Please do not test for spam, social engineering or denial of
              service issues.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Keep in mind that your testing must not violate any law, or
              disrupt or compromise any data that is not your own{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              Multiple vulnerabilities caused by one underlying issue will be
              awarded one bounty.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        marginBottom="10%"
        minHeight="10vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography variant="h2" className={classes.paddingBottom}>
          <b>Rewards</b>
        </Typography>
        <Typography variant="h6" className={classes.fontWeight}>
          Open-Redirects. 99% of open redirects have low security impact. For
          the rare cases where the impact is higher, e.g., stealing oauth
          tokens, we do still want to hear about them.
        </Typography>
      </Box>
      <Box
        marginBottom="15%"
        minHeight="10vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography variant="h2" className={classes.paddingBottom}>
          <b>Reporting Format</b>
        </Typography>
        <Typography variant="h6" className={classes.fontWeight}>
          If you believe you've found security vulnerability in one of our
          products or platforms, please send it to us by emailing at
          <br />
          <span className={classes.mainColor}>
            <b>support@pocketbits.in</b>
          </span>
        </Typography>
        <Typography>
          Please include the following details in your report:
        </Typography>
        <ul className={classes.unorderdList}>
          <li>
            <Typography variant="h6">
              Description of the location and potential impact of the
              vulnerability{" "}
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              A detailed description of the steps required to reproduce and
              repair the vulnerability – POC scripts, screenshots, and
              compressed screen captures will all be helpful to us
            </Typography>
          </li>
        </ul>
      </Box>
      <Box
        marginBottom="10%"
        minHeight="10vh"
        display="flex"
        width="80%"
        margin="0 auto"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Typography variant="h2" className={classes.paddingBottom}>
          <b>Public Disclosure</b>
        </Typography>
        <ul>
          <li>
            <Typography variant="h6">
              Confidentiality is of utmost importance to us at PocketBits and we
              will keep all information related to any disclosure, confidential.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              In order to protect customer privacy, PocketBits does request that
              you not post or share information about a potential and unverified
              bug / vulnerability on any public platform.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              In case of any unverified public disclosures, PocketBits reserves
              the right to initiate legal proceedings against individuals.
            </Typography>
          </li>
        </ul>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainColor: {
    color: theme.palette.primary.main,
  },
  unorderdList: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  subList: {
    lineHeight: "40px",
  },
  paddingBottom: {
    paddingBottom: "30px",
  },
  fontWeight: {
    fontWeight: 300,
  },
}));

export default BugBountySecondSection;
