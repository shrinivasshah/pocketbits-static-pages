import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function CareersFourthSection() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      height="100vh"
      display={`${matches ? "none" : "flex"}`}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className={classes.root}>
        <Typography variant="h2" className={classes.topText}>
          <b>Open Positions</b>
        </Typography>
        <table className={classes.table}>
          <thead className={`${classes.tableHeader} ${classes.flexContainer}`}>
            <th className={classes.headerText}>
              <Typography>Sr. No</Typography>
            </th>
            <th className={classes.headerText}>
              <Typography>Designation</Typography>
            </th>
            <th className={classes.headerText}>
              <Typography>Experience</Typography>
            </th>
            <th className={classes.headerText}>
              <Typography>Apply</Typography>
            </th>
          </thead>
          <tr className={classes.flexContainer}>
            <td>1</td>
            <td>DevOps Engineer</td>
            <td>2 Years</td>
            <td>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
              >
                Apply
              </Button>
            </td>
          </tr>
          <tr className={classes.flexContainer}>
            <td>2</td>
            <td>Senior Blockchain Developer</td>
            <td>2 Years</td>
            <td>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
              >
                Apply
              </Button>
            </td>
          </tr>
          <tr className={classes.flexContainer}>
            <td>3</td>
            <td>Senior Engineer - Frontend</td>
            <td>2 Years</td>
            <td>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
              >
                Apply
              </Button>
            </td>
          </tr>
          <tr className={classes.flexContainer}>
            <td>4</td>
            <td>Senior Engineer - Backend</td>
            <td>2 Years</td>
            <td>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
              >
                Apply
              </Button>
            </td>
          </tr>
          <tr className={classes.flexContainer}>
            <td>5</td>
            <td>VP Technology</td>
            <td>2 Years</td>
            <td>
              <Button
                className={classes.button}
                variant="contained"
                size="medium"
                color="primary"
              >
                Apply
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "80%",
    margin: "0 auto",
    color: "#fff",
  },
  table: {
    background: "#1D212D",
    height: "60%",
    width: "100%",
    color: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "10px 20px 30px rgba(5, 15, 26, 0.5)",
  },
  tableHeader: {
    background: "#252933",
  },
  topText: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  headerText: {
    height: "50px",
  },
  button: {
    color: "#fff",
    borderRadius: "15px",
  },
  flexContainer: {
    textAlign: "center",
  },
}));

export default CareersFourthSection;
