import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function TermsAndConditionsFirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        <b>Terms And Conditions</b>
      </Typography>

      <Box
        className={classes.mainBox}
        display="flex"
        minHeight="70vh"
        height="70vh"
        width="80vw"
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          width="90%"
          margin="0 auto"
          justifyContent="space-evenly"
        >
          <Typography variant="h3">
            <b>General Terms</b>
          </Typography>
          <Typography className={classes.bodyContent} variant="body1">
            “PocketBits” or “Company” refers to the holding company of
            Pocketbits being Defacto Technologies Pvt Ltd (‘Company’), a private
            limited company incorporated under the laws of India and having its
            registered office at PLOT NO. 65, SNO 807/1/3/20, DEEPALI NAGAR,,
            AGRA ROAD, Nashik, Maharashtra, India, 422009 its owners, directors,
            investors, employees or other related parties.
          </Typography>
          <Typography className={classes.bodyContent} variant="body1">
            Defacto Technologies Pvt Ltd (“Pocketbits”, “PocketBits.in”, “we” or
            “us”) makes products available for purchase through our website and
            mobile applications. Your purchase of any Pocketbits product is
            governed by our Terms, Conditions and Policies.
          </Typography>
          <Typography className={classes.bodyContent} variant="body1">
            These Terms are a legal agreement between you (“you,” or “your”) and
            Pocketbits. By purchasing Pocketbits products and/ or clicking to
            “Accept” these Terms where that option is made available to you, you
            agree to be bound by these Terms. If you do not agree to these
            Terms, kindly do not make any purchases from Pocketbits
          </Typography>
          <Typography className={classes.bodyContent} variant="body1">
            Pocketbits reserves the right to change, modify, add or remove all
            or part of these Terms at any time and in our sole discretion. If we
            make changes to these Terms, we will provide notice of such changes
            by posting such changes on our websites or mobile applications and
            updating the “Last Updated” date at the top of these Terms. We
            encourage you to review these Terms each time you make a purchase
            from Pocketbits to ensure you understand the terms and conditions
            that apply to such purchase. Your continued use of Pocketbits
            products indicates your acceptance of any changes to the Terms.
          </Typography>
          <Typography className={classes.bodyContent} variant="body1">
            Use of the Online Platform includes accessing, browsing, or
            registering to use the Online Platforms. Please read these Terms
            carefully before you start to use the Online Platforms.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    width: "100vw",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-evenly",
  },
  header: {
    textAlign: "center",
  },
  mainBox: {
    background: "#252933",
    boxShadow: "10px 20px 30px rgba(5, 15, 26, 0.5)",
    borderRadius: "15px",
  },
  bodyContent: {
    lineHeight: "50px",
  },
}));
export default TermsAndConditionsFirstSection;
