import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CallImgVector from "../../assets/CallImgVector.png";
import MailImgVector from "../../assets/MailImgVector.png";
import PersonImgVector from "../../assets/PersonImgVector.png";
import React from "react";
import TransperantCard from "../TransperantCard/TransperantCard";

function CardComponentHolder() {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root}>
        <TransperantCard
          icon={CallImgVector}
          text="Call us"
          info="+919326060609"
        />
        <TransperantCard
          icon={PersonImgVector}
          text="Pocketbits support center"
        />
        <TransperantCard
          icon={MailImgVector}
          text="Write to us"
          info="Support@pocketbits.in"
        />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    justifyContent: "space-between",
    flexWrap: "wrap !important",
    textAlign: "center",
  },
}));

export default CardComponentHolder;
