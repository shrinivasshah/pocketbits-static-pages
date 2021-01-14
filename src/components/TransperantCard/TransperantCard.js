import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

function TransperantCard({ icon, text, info }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={icon} alt="" className={classes.image} />
      <Typography variant="h4">{text}</Typography>
      {info ? (
        <Typography variant="p" style={{ fontWeight: 100 }}>
          {info}
        </Typography>
      ) : null}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "338px",
    height: "457px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // left: "560px",
    // top: "1241px",
    color: "#fff",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    // width: "338px",
    // height: "457px",
    // left: "560px",
    // top: "1241px",

    // background: "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    // boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    // backdropFilter: "blur(10px)",
    // /* Note: backdrop-filter has minimal browser support */

    borderRadius: "24px",
    backdropFilter: "blur(10px)",
    // /* Note: backdrop-filter has minimal browser support */

    // borderRadius: "24px"
    transition: "all .4s ease-in-out",
    "&:hover": {
      transform: "scale(1.15,1.15)",
    },
  },
  image: {
    marginBottom: "10px",
  },
}));
export default TransperantCard;
