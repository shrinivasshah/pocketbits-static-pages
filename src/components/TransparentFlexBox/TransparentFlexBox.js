import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import candleBackground from "../../assets/04.svg";
function TransparentFlexBox() {
  const classes = useStyles();
  return (
    <Box width="100vw" className={classes.background}>
      <div className={classes.root}>
        <Typography variant="h2" className={classes.headerText}>
          Start trading now
        </Typography>
        <Box
          display="flex"
          position="relative"
          alignItems="center"
          className={classes.emailBox}
        >
          <Button size="large" type="primary" className={classes.submitButton}>
            <AiFillPlayCircle className={classes.logo} />
            Sign up
          </Button>
          <input
            type="email"
            className={classes.emailBoxInputBox}
            placeholder="Email ID"
          />
        </Box>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${candleBackground})`,
    backgroundPositionY: "-10vh",
  },
  root: {
    color: "#fff",
    width: "70%",
    margin: "0 auto",
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    textAlign: "center",
  },
  headerText: {
    fontWeight: "500",
    marginBottom: "20px",
    textAlign: "center",
  },
  emailBox: {
    minWidth: "50%",
    height: "70px",
    borderRadius: "24px",
    overflow: "hidden",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(77, 79, 84, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    backdropFilter: "blur(40px)",
  },
  submitButton: {
    background: "#56C3A4",
    height: "90%",
    position: "absolute",
    right: "1%",
    borderRadius: "24px",
    border: "none",
    color: "#fff",
    textTransform: "capitalize",
  },
  logo: {
    fontSize: "25px",
    paddingRight: "10px",
  },
  emailBoxInputBox: {
    color: "#fff",
    width: "90%",
    margin: "0 auto",
    height: "100%",
    fontSize: "20px",
    border: "none",
    borderRadius: "24px",
    background: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default TransparentFlexBox;
