import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import headerImage from "../../assets/contactUsHeaderImage.svg";
import React from "react";

function AboutUsFirstSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="30vh"
      >
        <Typography className={classes.header} variant="h2">
          <b>Welcome to PocketBits!</b>
        </Typography>
        <Typography className={classes.headerSubtext} variant="body1">
          “Building for the next{" "}
          <span className={classes.mainColor}>
            <b>Billion Crypto users</b>
          </span>
          ,<b>One Block at a Time!</b>”
        </Typography>
      </Box>
      <div className={classes.imageHolder}></div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    height: "100vh",
    minHeight: "100vh",
    width: "100vw",
  },
  header: {
    paddingBottom: "20px",
  },
  headerSubtext: {
    fontWeight: "200",
  },
  mainColor: {
    color: "#56C3A4",
  },

  imageHolder: {
    width: "100%",
    height: "80%",
    background: `url(${headerImage}) no-repeat center`,
    objectFit: "contain",
  },
}));

export default AboutUsFirstSection;

// <div className={classes.root}>
//   <Box
//     display="flex"
//     flexDirection="column"
//     height="20vh"
//     marginTop="-15vh"
//     justifyItems="space-Between"
//     alignItems="center"
//     textAlign="center"
//   >
//     <Typography className={classes.header} variant="h2">
//       <b>Welcome to PocketBits!</b>
//     </Typography>
//     <Typography className={classes.headerSubtext} variant="body1">
//       “Building for the next{" "}
//       <span className={classes.mainColor}>
//         <b>Billion Crypto users</b>
//       </span>
//       ,<b>One Block at a Time!</b>”
//     </Typography>
//   </Box>

//   <div className={classes.imageHolder}>
//     <img
//       className={classes.headerImage}
//       src={headerImage}
//       alt="top header"
//     />
//   </div>
// </div>
