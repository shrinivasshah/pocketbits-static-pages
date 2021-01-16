import { Box } from "@material-ui/core";
import React from "react";
import CheckBoxWithLabel from "./CheckBoxWithLabel";

function CheckboxHolder() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CheckBoxWithLabel
          checked={state.checkedA}
          handleChange={handleChange}
          text="INR Deposits"
        />
        <CheckBoxWithLabel
          checked={state.checkedB}
          handleChange={handleChange}
          text="Crypto Deposits"
        />
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <CheckBoxWithLabel
          checked={state.checkedF}
          handleChange={handleChange}
          text="INR Withdrawls"
        />
        <CheckBoxWithLabel
          checked={state.checkedG}
          handleChange={handleChange}
          text="Crypto Withdrawls"
        />
      </Box>
    </Box>
  );
}

export default CheckboxHolder;
