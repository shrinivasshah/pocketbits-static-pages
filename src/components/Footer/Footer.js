import React from "react";
import Waves from "../../assets/Waves.svg";
import { Container, makeStyles, Typography } from "@material-ui/core";
function Footer() {
  const classes = useStyles();
  return (
    <div id="contact-us" className={classes.footer}>
      <div className={classes.waveHolder}>
        <Container className={classes.mainContainer}>
          <div className={classes.leftTop}>
            <Typography variant="h5" className={classes.typographyAdjustment}>
              Explore the future of money
            </Typography>
            <Typography variant="h3" style={{ color: "#56C3A4" }}>
              10,4434{" "}
              <span style={{ fontSize: "15px", color: "white" }}>
                Signed up
              </span>
            </Typography>
          </div>
          <div className={classes.secondFlex}>
            <div className={classes.commonColumn}>
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
            <div className={classes.secondColumn}>
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
            <div>
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
            <div className={classes.secondColumn}>
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
          </div>
        </Container>
        <img src={Waves} alt="waves" className={classes.waves} />
      </div>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#fff",
    height: "90vh",
  },
  waveHolder: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100% !important",
    position: "relative",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "-70px",
    },
    marginTop: "80px",
    height: "100%",
    // [theme.breakpoints.down("md")]: {
    //   width: "80%",
    // },
    maxWidth: "none",
    width: "85% !important",
  },
  waves: {
    zIndex: -99,
    position: "absolute",
    height: "auto",
    display: "block",
    width: "130%",
    [theme.breakpoints.up("lg")]: {
      left: "-350px",
    },

    [theme.breakpoints.down("sm")]: {
      left: "-100px",
    },
    left: "-160px",
    // transform: "translateX(-300px)",
  },
  leftTop: {
    [theme.breakpoints.down("sm")]: {
      //   textAlign: "center",
      justifyContent: "center",
    },
    // position:'absolute',
    [theme.breakpoints.up("xs")]: {
      marginTop: "-80px",
    },
    // marginTop: "80px",
    height: "50%",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "50px",
  },
  typographyAdjustment: {
    marginBottom: "20px",
  },
  secondFlex: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
  },
  commonColumn: {
    // display: "flex",
    // flexDirection: "column",
    // height: "300px",
    // justifyContent: "space-evenly",
  },
  listItems: {
    fontWeight: 100,
    lineHeight: "50px",
  },
  secondColumn: {
    marginTop: "25px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    // height: "140px",
  },
}));
