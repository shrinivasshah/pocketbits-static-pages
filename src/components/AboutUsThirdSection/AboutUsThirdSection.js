import { Box, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import avatar from "../../assets/avatar.svg";
import React from "react";

function AboutUsThirdSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  console.log(matches);
  return (
    <div className={classes.mainContainer}>
      {/* <Typography variant="h2" className={classes.mainHeader}>
        <b>The Team</b>
      </Typography> */}
      <Box
        position="relative"
        display="flex"
        flexWrap="wrap"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        width={`${!matches ? "80%" : "100%"}`}
        margin="0 auto"
        color="#fff"
      >
        <img
          className={`${classes.avatar} ${classes.avatar1}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar2}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar3}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar4}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar5}`}
          src={avatar}
          alt="avatar"
        />
      </Box>
      <Box
        position="relative"
        display="flex"
        flexWrap="wrap"
        height="60%"
        alignItems="center"
        justifyContent="space-between"
        width={`${!matches ? "80%" : "100%"}`}
        margin="0 auto"
        marginTop={`${!matches ? "-200px" : "0"}`}
        color="#fff"
      >
        <img
          className={`${classes.avatar} ${classes.avatar21}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar22}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar23}`}
          src={avatar}
          alt="avatar"
        />

        <img
          className={`${classes.avatar} ${classes.avatar24}`}
          src={avatar}
          alt="avatar"
        />
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.only("xl")]: {
      marginTop: "-25vh",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: "30vh",
    },
    height: "100vh",
    width: "100vw",
    minHeight: "100vh",
  },
  avatar: {
    height: "auto",
    width: "300px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
  },
  avatar1: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "0",
      top: "45%",
    },
    position: "static",
  },
  avatar2: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "25%",
      bottom: "0",
      transform: "translateX(-25%)",
    },
    position: "static",
  },
  avatar3: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "50%",
      top: "30%",
      transform: "translateX(-50%)",
    },
    position: "static",
  },
  avatar4: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: "25%",
      bottom: "0",
      transform: "translateX(25%)",
    },
    position: "static",
  },
  avatar5: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: "0",
      top: "45%",
    },
    position: "static",
  },
  avatar21: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "0",
      top: "30%",
    },
    position: "static",
  },
  avatar22: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "50%",
      bottom: "0",
      transform: "translateX(-50%)",
    },
    position: "static",
  },
  avatar23: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "50%",
      top: "0",
      transform: "translateX(-50%)",
    },
    position: "static",
  },
  avatar24: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: "0",
      top: "30%",
    },
    position: "static",
  },
}));

export default AboutUsThirdSection;
