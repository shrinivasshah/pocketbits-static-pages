import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

function FormContent({ label, placeholder, textarea, height }) {
  const classes = useStyles();
  return (
    <div className={classes.formHolder}>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          className={classes.contentContainer}
          style={height ? { height: "200px" } : null}
        >
          <Typography variant="h6">{label}</Typography>
          <div
            className={
              height
                ? classes.inputFieldContainerTextArea
                : classes.inputFieldContainer
            }
          >
            {!textarea ? (
              <input
                type="text"
                placeholder={placeholder}
                className={classes.inputField}
              />
            ) : (
              <textarea
                placeholder={placeholder}
                className={classes.textarea}
              />
            )}
          </div>
        </Box>
      </form>
    </div>
  );
}

export default FormContent;

const useStyles = makeStyles((theme) => ({
  formHolder: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  contentContainer: {
    minHeight: "110px",
  },
  inputFieldContainer: {
    display: "flex",
    justifyContent: "center",
    height: "3.5em",
    width: "100%",
    background: "#1d1d1d",
    borderRadius: "15px",
    overflow: "hidden",
  },
  inputFieldContainerTextArea: {
    display: "flex",
    justifyContent: "center",
    height: "9em",
    width: "100%",
    background: "#1d1d1d",
    borderRadius: "15px",
    overflow: "hidden",
  },
  inputField: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    color: "#fff",
    width: "95%",
    margin: "0 auto",
    background: "#1d1d1d",
    border: "none",
    fontSize: "1.5em",
    "&:focus": {
      outline: "none",
    },
  },
  textarea: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    width: "97%",
    color: "#fff",
    margin: "0 auto",
    background: "#1d1d1d",
    border: "none",
    fontSize: "1.5em",
    height: "100%",
    "&:focus": {
      outline: "none",
      background: "#1d1d1d",
    },
  },
}));
