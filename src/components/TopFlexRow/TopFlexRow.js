import { Box, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TopFlexRowCard from "../TopFlexRowCard/TopFlexRowCard";
import axios from "axios";
function TopFlexRow() {
  const [coinList, setCoinList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(
        "https://api2.pocketbits.in/api/v1/ticker"
      );
      setCoinList(response.data);
    };
    getCoins();
  }, []);
  return (
    <Box className={classes.transparentRow}>
      <Box className={classes.scrollableFlex}>
        {coinList.map((item, index) => {
          return <TopFlexRowCard index={index} coin={item} />;
        })}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  transparentRow: {
    display: "flex",
    alignItems: "center",
    height: "25vh",
    width: "90%",
    borderTopLeftRadius: "18px",
    borderBottomLeftRadius: "18px",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    backdropFilter: "blur(60px)",
    opacity: "0.86",
  },
  scrollableFlex: {
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    overflow: "auto",
    marginLeft: "40px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

export default TopFlexRow;
