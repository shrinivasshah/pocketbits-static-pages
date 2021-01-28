import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import LandingPageHeaderTwo from "../LandingPageHeaderTwo/LandingPageHeaderTwo";
import headerBackground from "../../assets/headerBackground.png";
function LandingPageHeader() {
  const classes = useStyles();

  return (
    <Box
      height="100vh"
      width="100vw"
      color="#fff"
      marginTop="10vh"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
    >
      <img
        className={classes.headerBackground}
        src={headerBackground}
        alt="Header Background"
      />
      <Box width="80%" margin="0 auto" height="30vh" display="flex">
        <Grid container spacing={1}>
          <Grid item sm={12} lg={5}>
            <Box
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
            >
              <Typography variant="h2">
                <strong>Instant & Easy</strong>
              </Typography>
              <Typography variant="h6">
                Buy and Sell 100+ Crypto Currencies in INR
                <br />
                with <span className={classes.mainColor}>0% fees</span> and{" "}
                <span className={classes.mainColor}>Infnite</span> liquidity
              </Typography>
              <Button size="large" color="default" className={classes.button}>
                <AiFillPlayCircle className={classes.icon} />
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <LandingPageHeaderTwo />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainColor: {
    color: "#56C3A4",
  },
  headerBackground: {
    position: "absolute",
    width: "90vw",
    right: "0",
    top: "-10%",
    height: "80vh",
    zIndex: "-200",
  },
  mainGrid: {
    height: "100%",
  },
  gridLeft: {
    display: "flex",
    alignItems: "center",
  },
  gridRight: {
    height: "100%",
    width: "100%",
  },

  button: {
    background: "#56C3A4",
    textTransform: "capitalize",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "160px",
    height: "3.2rem",
  },
  icon: {
    fontSize: "2rem",
  },
  imageHolder: {
    position: "relative",
    height: "100%",
  },
  gridRightImage: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(20%)",
    height: "auto",
    maxWidth: "",
  },
}));

export default LandingPageHeader;
