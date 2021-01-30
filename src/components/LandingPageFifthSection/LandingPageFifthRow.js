import { Box } from "@material-ui/core";
import React from "react";
import SingleItem from "../LandingPageFeature/LandingPageFeature";
import secure from "../../assets/01.svg";
import support from "../../assets/02.svg";
import charges from "../../assets/03.svg";
import { makeStyles } from "@material-ui/styles";
import TransparentFlexBox from "../TransparentFlexBox/TransparentFlexBox";

function LandingPageFifthRow() {
  const classes = useStyles();
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Box
        color="#fff"
        display="flex"
        alignItems="center"
        height="40vh"
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
      <TransparentFlexBox />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  wideBar: {
    width: "100%",
  },
}));

export default LandingPageFifthRow;
