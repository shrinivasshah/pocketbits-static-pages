import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import SingleItem from "../LandingPageFeature/LandingPageFeature";
import secure from "../../assets/01.svg";
import support from "../../assets/02.svg";
import charges from "../../assets/03.svg";
import { makeStyles } from "@material-ui/styles";
import TransparentFlexBox from "../TransparentFlexBox/TransparentFlexBox";

function LandingPageFifthRow() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const sm_matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      height="100vh"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      paddingBottom={sm_matches ? "80vh" : "15vh"}
    >
      <Box
        color="#fff"
        display="flex"
        alignItems="center"
        height="40vh"
        minHeight="40vh"
        marginY="20vh"
        marginBottom="10vh"
        width="100vw"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        <SingleItem
          image={secure}
          title="Safe and Secure"
          text="We take security very seriously and we are committed to the most rigorous industry practices."
        />
        <SingleItem
          image={support}
          title="24/7 Support"
          text="Have a problem or just need to ask us something? Our customer support team are available to help 24/7."
        />
        <SingleItem
          image={charges}
          title="No Account charges"
          text="Creating an account and holding your crypto is absolutely free.
          No charges at all."
        />
      </Box>
      {matches ? null : <TransparentFlexBox />}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  wideBar: {
    width: "100%",
  },
}));

export default LandingPageFifthRow;
