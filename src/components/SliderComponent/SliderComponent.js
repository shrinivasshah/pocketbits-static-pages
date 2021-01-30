import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SliderComponent() {
  const [stepSize, setStepSize] = useState(1000);
  const dispatch = useDispatch();
  const handleChange = (e, value) => {
    let unoCoin = 0.7;
    let zebPay = 0.4;
    let wazirX = 0.2;
    let coinDcx = 0.1;
    if (value === 10000) {
      setStepSize(5000);
    } else if (value === 100000) {
      setStepSize(10000);
    } else if (value === 1000000) {
      setStepSize(150000);
    }
    dispatch({
      type: "VALUE",
      payload: value,
    });
    dispatch({
      type: "UNOCOIN",
      payload: ((parseInt(value) * unoCoin) / 100).toFixed(2),
    });
    dispatch({
      type: "ZEBPAY",
      payload: ((parseInt(value) * zebPay) / 100).toFixed(2),
    });
    dispatch({
      type: "WAZIRX",
      payload: ((parseInt(value) * wazirX) / 100).toFixed(2),
    });
    dispatch({
      type: "COINDCX",
      payload: ((parseInt(value) * coinDcx) / 100).toFixed(2),
    });
  };
  return (
    <div>
      <PrettoSlider
        aria-label="pretto slider"
        defaultValue={0}
        max={10000000}
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
