import { Typography } from "@material-ui/core";
import React from "react";

function EndCredits() {
  return (
    <div style={{ textAlign: "center", paddingBottom: "60px" }}>
      <Typography variant="h3" style={{ color: "white" }}>
        POCKET<span style={{ color: "#56C3A4" }}>BITS</span>
      </Typography>
      <Typography variant="p" style={{ color: "#888" }}>
        Trading in cryptocurrencies are subject to market, technical and legal
        <br />
        risks. The prices fluctuate based on global demand and supply.
      </Typography>
      <br />
      <Typography variant="p" style={{ color: "#888" }}>
        &copy; 2020 Pocketbits Co. All Rights Reserved
      </Typography>
    </div>
  );
}

export default EndCredits;
