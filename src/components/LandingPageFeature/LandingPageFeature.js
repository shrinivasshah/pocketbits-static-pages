import {
  Box,
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";

function LandingPageFeature({ title, image, text, careers }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      height="100%"
      textAlign="center"
      justifyContent={`${careers ? "space-evenly" : "space-between"}`}
    >
      <Container maxWidth="xs">
        <img
          className={classes.featureImage}
          style={careers ? { width: "100px", height: "auto" } : null}
          src={image}
          alt="features"
        />

        {!careers ? (
          <Typography variant="h6">
            <strong>{title}</strong>
          </Typography>
        ) : (
          <Typography variant="h6">{title}</Typography>
        )}

        {!careers ? (
          <Typography variant="body1">
            <strong>{text}</strong>
          </Typography>
        ) : (
          <Typography variant="body1">{text}</Typography>
        )}
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
