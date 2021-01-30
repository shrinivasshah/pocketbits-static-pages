import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
function TransperantCard({ icon, text, info, list }) {
  const state = useSelector((state) => state.tradingFee);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!list ? (
        <>
          <img src={icon} alt="" className={classes.image} />
          <Typography variant="h4">{text}</Typography>
          {info ? (
            <Typography variant="p" style={{ fontWeight: 100 }}>
              {info}
            </Typography>
          ) : null}
        </>
      ) : (
        <Box
          display="flex"
          className={classes.listBox}
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {state?.map((item, index) => (
            <>
              <Box
                key={index}
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                textAlign="center"
                className={classes.innerBox}
              >
                <Typography
                  className={classes.typographyWidth}
                  variant="subtitle1"
                >
                  <strong>{item.name}</strong>
                </Typography>
                <Typography
                  className={classes.typographyWidth}
                  variant="subtitle1"
                >
                  <strong>₹{item.value}</strong>
                </Typography>
              </Box>
            </>
          ))}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "100%",
    },

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

    transition: "all .4s ease-in-out",
    "&:hover": {
      [theme.breakpoints.down("sm")]: {
        transform: "scale(1.05,1.05)",
      },
      transform: "scale(1.15,1.15)",
    },
  },
  image: {
    marginBottom: "10px",
  },
  listBox: {
    height: "100%",
    width: "100%",
  },
  innerBox: {
    width: "100%",
  },
  typographyWidth: {
    width: "50%",
  },
}));
export default TransperantCard;
