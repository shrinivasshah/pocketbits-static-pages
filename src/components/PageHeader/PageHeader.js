import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsChevronCompactDown } from "react-icons/bs";
import headerImg from "../../assets/headerImg.png";
function PageHeader() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <header className={classes.header}>
        <div className={classes.partition1}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            className={classes.rowBox}
          >
            <Typography variant="h4">
              Welcome to <strong>Pocketbits</strong>
            </Typography>
            <Typography variant="h2">
              <strong>We’d love to hear from you</strong>
            </Typography>
            We take our commitment to our users seriously. If you need our help
            with your user account, have questions about how the platform works
            or are experiencing any technical difficulties please do not
            hesitate to contact us.
            <Typography variant="p"></Typography>
          </Box>
        </div>
        <div className={classes.partition2}>
          <img src={headerImg} alt="header" className={classes.headerImg} />
        </div>
        <div className={classes.downArrow}>
          <Typography variant="p">Get in Touch</Typography>
          <ScrollLink to="contact-us" smooth spy>
            <BsChevronCompactDown className={classes.goDown} />
          </ScrollLink>
        </div>
      </header>
    </Container>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      // [theme.breakpoints.up("lg")]: {
      //   marginTop: "-0px",
      // },
      [theme.breakpoints.down("md")]: {
        marginTop: "70px",
      },
    },
    header: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      position: "relative",
      // textAlign: "space-around",
      // alignItems: "center",
      color: "#fff",
      // // eslint-disable-next-line no-dupe-keys
      // textAlign: "left",
    },
    h3: {
      fontWight: 900,
    },
    rowBox: {
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
      },

      height: "25%",
      textAlign: "center",
    },
    partition1: {
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    partition2: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
      textAlign: "center",
      position: "relative",
    },
    headerImg: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
      },
      left: "10%",
      display: "block",
      width: "100%",
      height: "auto",
    },
    downArrow: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      [theme.breakpoints.down("md")]: {
        transform: "translate(-50%,0%)",
      },
      bottom: "2%",
      left: "50%",
    },
    "@keyframes goDown": {
      "0%": {
        opacity: 0.5,
        transform: "translateY(0.0em)",
        // color: "#fff",
        color: theme.palette.primary.main,
      },
      // "10%": {
      //   opacity: 0.1,
      //   transform: "translateY(.1em)",
      //   color: theme.palette.primary.main,
      // },
      // "20%": {
      //   opacity: 0.2,
      //   transform: "translateY(.2em)",
      //   // color: "#fff",
      // },
      // "30%": {
      //   opacity: 0.3,
      //   transform: "translateY(.3em)",
      //   // color: theme.palette.primary.main,
      // },

      // "40%": {
      //   opacity: 0.4,
      //   transform: "translateY(.4em)",
      //   color: "#fff",
      // },
      // "50%": {
      //   opacity: 0.5,
      //   transform: "translateY(.5em)",
      //   // color: theme.palette.primary.main,
      // },
      // "60%": {
      //   opacity: 0.6,
      //   transform: "translateY(.4em)",
      //   // color: "#fff",
      // },
      // "70%": {
      //   opacity: 0.7,
      //   transform: "translateY(.3em)",
      //   color: theme.palette.primary.main,
      // },
      // "80%": {
      //   opacity: 0.8,
      //   transform: "translateY(.2em)",
      //   // color: "#fff",
      // },
      // "90%": {
      //   opacity: 0.9,
      //   transform: "translateY(.1em)",
      //   // color: theme.palette.primary.main,
      // },
      "100%": {
        opacity: 1,
        transform: "translateY(0.0em)",
        color: "#fff",
      },
    },
    goDown: {
      fontSize: "3em",
      animation: "$goDown 1.9s ease-in-out",
      animationIterationCount: "infinite",
    },
  };
});

export default PageHeader;
