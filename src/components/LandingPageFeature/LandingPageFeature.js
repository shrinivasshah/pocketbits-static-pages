import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function LandingPageFeature({ image, text }) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="100%"
      justifyContent="space-between"
    >
      <img className={classes.featureImage} src={image} alt="features" />
      <Typography variant="body1">
        <strong>{text}</strong>
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  featureImage: {
    height: "auto",
    width: "200px",
  },
}));

export default LandingPageFeature;
