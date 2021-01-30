import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import TopFlexRow from "../TopFlexRow/TopFlexRow";

function LandingPageHeaderTwo() {
  const classes = useStyles();
  return (
    <>
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        height="70vh"
      >
        <Box className={classes.linkHolder}>
          <a
            className={classes.marketLink}
            href="https://uat.mevici.com/trade/BTC"
          >
            View All Markets
          </a>
          <AiOutlineRight className={classes.logo} />
        </Box>
        <TopFlexRow />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  linkHolder: {
    position: "absolute",
    display: "flex",
    right: "5%",
    alignItems: "center",
    justifyContent: "center",
    top: "10%",
    transform: "translateY(70px)",
  },
  logo: {
    marginLeft: "10px",
  },
  marketLink: {
    color: "#fff",
    textDecoration: "none",
    borderBottom: "1px solid #fff",
    paddingBottom: "5px",
  },
}));

export default LandingPageHeaderTwo;
