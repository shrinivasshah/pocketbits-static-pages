import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

function LandingPageFeature({ title, image, text }) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="100%"
      textAlign="center"
      justifyContent="space-between"
    >
      <Container maxWidth="xs">
        <img className={classes.featureImage} src={image} alt="features" />
        <Typography variant="h6">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body1">
          <strong>{text}</strong>
        </Typography>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  featureImage: {
    marginBottom: "20px",
    height: "auto",
    width: "200px",
  },
}));

export default LandingPageFeature;
