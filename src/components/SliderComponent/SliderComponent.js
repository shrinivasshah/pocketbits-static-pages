import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SliderComponent() {
  const [stepSize, changeStepSize] = useState(1000);
  const dispatch = useDispatch();
  const handleChange = (e, value) => {
    let unoCoin = 0.7;
    let zebPay = 0.4;
    let wazirX = 0.2;
    let coinDcx = 0.1;

    dispatch({
      type: "UNOCOIN",
      payload: parseInt(value) + (parseInt(value) * unoCoin) / 100,
    });
    dispatch({
      type: "ZEBPAY",
      payload: parseInt(value) + (parseInt(value) * zebPay) / 100,
    });
    dispatch({
      type: "WAZIRX",
      payload: parseInt(value) + (parseInt(value) * wazirX) / 100,
    });
    dispatch({
      type: "COINDCX",
      payload: parseInt(value) + (parseInt(value) * coinDcx) / 100,
    });
    dispatch({ type: "POCKETBITS", payload: parseInt(value) });
  };
  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        max={100000}
        step={stepSize}
        onChange={handleChange}
      />
    </div>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 8px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default SliderComponent;
