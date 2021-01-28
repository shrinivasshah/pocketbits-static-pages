import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import TransperantCard from "../TransperantCard/TransperantCard";
import list from "../cardListData";
import { AiFillPlayCircle } from "react-icons/ai";
import FeeDetails from "../FeeDetails/FeeDetails";
import reverseWave from "../../assets/reverseWave.svg";
function ThirdDivision() {
  const classes = useStyles();
  return (
    <Box
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space evenly"
      minHeight="100vh"
      width="100vw"
      position="relative"
      overflow="hidden"
    >
      <img
        className={classes.reverseWave}
        src={reverseWave}
        alt="waves background"
      />
      <Box
        display="flex"
        width="100%"
        justifyContent="space-evenly"
        height="70%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="100%"
          justifyContent="space-between"
        >
          <Typography variant="h3">
            <strong>Break Free from Fees!</strong>
          </Typography>
          <TransperantCard list={list} />
          <Typography className={classes.bottomText} variant="h4">
            <strong>Get started in minutes</strong>
          </Typography>
        </Box>
        <Box
          width="30%"
          display="flex"
          flexDirection="column"
          alignItems="strech"
          justifyContent="space-evenly"
        >
          <Typography variant="h4" className={classes.rightHeader}>
            Unlimited Buys and Sells for Less than you're paying now
          </Typography>
          <FeeDetails hideZeroFee />
        </Box>
        <Box
          display="flex"
          width="400px"
          height="200px"
          flexDirection="column"
          alignItems="strech"
          justifyContent="space-evenly"
          position="absolute"
          bottom="10%"
          right="15%"
        >
          <Typography variant="overline" className={classes.emailLabel}>
            The future of money is just an Email away!
          </Typography>
          <Box
            display="flex"
            position="relative"
            alignItems="center"
            className={classes.emailBox}
          >
            <Button
              size="large"
              type="primary"
              className={classes.submitButton}
            >
              <AiFillPlayCircle className={classes.logo} />
              Sign up
            </Button>
            <input
              type="email"
              className={classes.emailBoxInputBox}
              placeholder="Email ID"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  rightHeader: {
    paddingBottom: "20px",
    color: "#C5CDD9",
    fontWeight: 100,
  },
  reverseWave: {
    position: "absolute",
    zIndex: "-100",
    [theme.breakpoints.down("lg")]: {
      top: "0%",
    },
    [theme.breakpoints.down("md")]: {
      top: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "50%",
    },
    top: "-15%",
    left: "-30%",
    width: "150%",
  },
  bottomText: {
    alignSelf: "flex-start",
    paddingTop: "2rem",
  },
  emailLabel: {
    paddingBottom: "4px",
    borderBottom: "1px solid #444",
  },
  emailBox: {
    minWidth: "100%",
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
export default ThirdDivision;
