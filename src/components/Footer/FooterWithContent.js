import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import Waves from "../../assets/Waves.svg";
import React from "react";

function FooterWithContent() {
  const classes = useStyles();

  return (
    <Box
      id="contact-us"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}
    >
      <img src={Waves} alt="waves-bg" className={classes.rootImg} />
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          className={classes.root}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            className={classes.topBox}
          >
            <Typography variant="h5" className={classes.typographyAdjustment}>
              Explore the future of money
            </Typography>
            <Typography variant="h3" style={{ color: "#56C3A4" }}>
              10,4434{" "}
              <span style={{ fontSize: "15px", color: "white" }}>
                Signed up
              </span>
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            className={classes.bottomBox}
          >
            <div className={classes.column}>
              <Typography variant="h5">
                <strong>Company</strong>
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                About Us
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Blog
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Fee Structure
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Terms & Conditions
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Privacy Policy
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                AML & KYC
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.listItems}>
                We are Hiring
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Bug Bounty Program
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Low Latency API
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography variant="h5">
                <strong>Support</strong>
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Contact Us
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Chat With Us
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                FAQ's
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography variant="h6" className={classes.listItems}>
                Partnership Queries
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Coin Listing request
              </Typography>
              <Typography variant="h6" className={classes.listItems}>
                Media Assets
              </Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default FooterWithContent;

const useStyles = makeStyles((theme) => {
  return {
    rootImg: {
      //   [theme.breakpoints.up("lg")]: {
      //     transform: "translateY(-10%)",
      //   },

      //   [theme.breakpoints.up("sm")]: {
      //     transform: "translateY(-20%)",
      //   },
      [theme.breakpoints.down("sm")]: {
        transform: "translateY(-28%)",
      },
      [theme.breakpoints.up("md")]: {
        transform: "translateY(-20%)",
      },
      [theme.breakpoints.up("lg")]: {
        transform: "translateY(0%)",
      },
      [theme.breakpoints.width]: {},
      height: "100%",
      width: "130vw",
      position: "absolute",
      zIndex: "-99",
      left: "-18%",
      top: "0",
    },
    root: {
      color: "#fff",
      minHeight: "70vh",
      width: "100%",
    },
    topBox: {
      height: "15vh",
      minWidth: "20%",
    },
    bottomBox: {
      height: "50vh",
      alignSelf: "strech",
    },
    listItems: {
      fontWeight: 100,
      lineHeight: "50px",
    },
    column: {
      padding: "0 10px",
    },
  };
});
