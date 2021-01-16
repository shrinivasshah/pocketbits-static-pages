import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import CheckboxHolder from "../CheckboxHolder/CheckboxHolder";
import SliderComponent from "../SliderComponent/SliderComponent";
import { makeStyles } from "@material-ui/styles";

function FeeDetails() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" style={{ paddingLeft: "0.6rem" }}>
        <strong>0% Fee on</strong>
      </Typography>
      <CheckboxHolder />

      <Typography
        variant="h3"
        style={{
          paddingLeft: "0.6rem",
        }}
      >
        Trading Fee Comparison
      </Typography>

      <Box display="flex">
        <Typography variant="h6" className={classes.avgMonthlyTrading}>
          Average Monthly Trading
        </Typography>
        <Typography variant="h5" className={classes.oneThousand}>
          <strong>₹1000</strong>
        </Typography>
      </Box>
      <Box>
        <Box display="flex" color="#888">
          <Typography variant="overline">₹1000</Typography>
          <Typography variant="overline" className={classes.oneThousandPlus}>
            ₹1000k+
          </Typography>
        </Box>
        <SliderComponent />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  textHolder: {
    marginLeft: "-1.5rem",
  },
  avgMonthlyTrading: {
    fontWeight: 100,
    // flex: 1,
  },
  oneThousand: {
    marginLeft: "55%",
  },
  oneThousandPlus: {
    marginLeft: "80%",
  },
}));

export default FeeDetails;
