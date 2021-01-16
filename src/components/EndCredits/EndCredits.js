import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function EndCredits() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      className={classes.root}
    >
      <Typography variant="h3" style={{ color: "white" }}>
        POCKET<span style={{ color: "#56C3A4" }}>BITS</span>
      </Typography>
      <Typography variant="p" style={{ color: "#888" }}>
        Trading in cryptocurrencies are subject to market, technical and legal
        <br />
        risks. The prices fluctuate based on global demand and supply.
      </Typography>
      <br />
      <Typography variant="p" style={{ color: "#888" }}>
        &copy; 2020 Pocketbits Co. All Rights Reserved
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "400px",
    },
    marginTop: "-70px",
    marginBottom: "60px",
    textAlign: "center",
  },
}));

export default EndCredits;
