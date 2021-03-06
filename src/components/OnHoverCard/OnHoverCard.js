import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function OnHoverCard() {
  const classes = useStyles();
  return <Box className={classes.onHoverCard}></Box>;
}

const useStyles = makeStyles((theme) => ({
  onHoverCard: {
    display: "inline-block",
    height: "400px",
    width: "250px",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    backdropFilter: "blur(10px)",
  },
}));

export default OnHoverCard;
