import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import headerImage from "../../assets/contactUsHeaderImage.svg";
import React from "react";

function AboutUsFirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="20vh"
        marginTop="-15vh"
        justifyItems="space-Between"
        alignItems="center"
        textAlign="center"
      >
        <Typography className={classes.header} variant="h2">
          <b>Welcome to PocketBits!</b>
        </Typography>
        <Typography className={classes.headerSubtext} variant="body1">
          “Building for the next{" "}
          <span className={classes.mainColor}>
            <b>Billion Crypto users</b>
          </span>
          , <b>One Block at a Time!</b>”
        </Typography>
      </Box>

      <div className={classes.imageHolder}>
        <img
          className={classes.headerImage}
          src={headerImage}
          alt="top header"
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "90vh",
    width: "100vw",
  },
  headerSubtext: {
    fontWeight: "200",
  },
  mainColor: {
    color: "#56C3A4",
  },

  imageHolder: {
    marginTop: "-700px",
    width: "100%",
    height: "50vh",
    textAlign: "center",
  },
  headerImage: {
    height: "auto",
    width: "80vw",
  },
}));

export default AboutUsFirstSection;
