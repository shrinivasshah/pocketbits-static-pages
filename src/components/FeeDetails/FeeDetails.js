import React from "react";
import { Box, Typography } from "@material-ui/core";
import CheckboxHolder from "../CheckboxHolder/CheckboxHolder";
import SliderComponent from "../SliderComponent/SliderComponent";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

function FeeDetails({ hideZeroFee }) {
  const classes = useStyles();

  const prices = useSelector((state) => state.value.price);
  return (
    <>
      {!hideZeroFee ? (
        <Typography variant="h3">
          <strong>0% Fee on</strong>
        </Typography>
      ) : null}
      <CheckboxHolder />

      <Typography variant="h4">Trading Fee Comparison</Typography>

      <Box display="flex">
        <Typography
          display="block"
          variant="h6"
          className={classes.avgMonthlyTrading}
        >
          Average Monthly Trading
        </Typography>
        <Typography
          display="block"
          variant="h5"
          className={classes.oneThousand}
        >
          <strong>₹{prices}</strong>
        </Typography>
      </Box>
      <Box>
        <Box display="flex" color="#888" justifyContent="space-between">
          <Typography variant="overline" className={classes.oneThousandFlex}>
            ₹1000
          </Typography>
          <Typography variant="h5"></Typography>
          <Typography variant="overline" className={classes.oneThousandPlus}>
            ₹10000k+
          </Typography>
        </Box>
        <SliderComponent />
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  avgMonthlyTrading: {
    fontWeight: 100,
    flex: 1,
    textAlign: "left",
  },
  oneThousand: {
    // marginLeft: "55%",
  },
  oneThousandFlex: {
    textAlign: "left",
    flexGrow: "1",
    // marginLeft: "55%",
  },
  oneThousandPlus: {
    // marginLeft: "80%",
  },
}));

export default FeeDetails;
