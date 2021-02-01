import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function EmptyTransparentCard({ children, careers }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      style={
        careers
          ? { width: "280px", height: "380px", margin: "20px auto" }
          : null
      }
    >
      {children}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "433px",
    width: "331px",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    borderRadius: "24px",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
    transition: "all .4s ease-in-out",
    "&:hover": {
      [theme.breakpoints.down("sm")]: {
        transform: "scale(1.05,1.05)",
      },
      transform: "scale(1.15,1.15)",
    },
  },
}));

export default EmptyTransparentCard;
