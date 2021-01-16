import { Box, Checkbox, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const GreenCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

function CheckBoxWithLabel({ checked, handleChange, text }) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      <GreenCheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
  },
}));
export default CheckBoxWithLabel;
