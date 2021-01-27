import { Box, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import gridRight from "../assets/gridRight.svg";
// import { headerBackground } from "../assets/headerBackground.svg";
import { AiFillPlayCircle } from "react-icons/ai";
import OnHoverCard from "../components/OnHoverCard/OnHoverCard";

function LandingPage() {
  const [hoverCard, setHoverCard] = useState(false);
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      width="100vw"
      color="#fff"
      marginTop="10vh"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box width="80%" margin="0 auto" height="30vh" display="flex">
        <Grid container spacing={1}>
          <Grid item sm={12} lg={5}>
            <Box
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
            >
              <Typography variant="h2">
                <strong>Instant & Easy</strong>
              </Typography>
              <Typography variant="h6">
                Buy and Sell 100+ Crypto Currencies in INR
                <br />
                with <span className={classes.mainColor}>0% fees</span> and{" "}
                <span className={classes.mainColor}>Infnite</span> liquidity
              </Typography>
              <Button size="large" color="default" className={classes.button}>
                <AiFillPlayCircle className={classes.icon} />
                Get Started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        height="70vh"
      >
        <Box className={classes.transparentRow}>
          <Box className={classes.scrollableFlex}>
            {new Array(...Array(49).keys()).map((item, index) => {
              return (
                <>
                  {!hoverCard ? (
                    <Box
                      key={index}
                      className={classes.cardsInsideFlexRow}
                      onClick={() => console.log(index)}
                    >
                      <h1>Hello</h1>
                      <h2>loomp</h2>
                    </Box>
                  ) : (
                    <OnHoverCard />
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainColor: {
    color: "#56C3A4",
  },
  mainGrid: {
    height: "100%",
  },
  gridLeft: {
    display: "flex",
    alignItems: "center",
  },
  gridRight: {
    height: "100%",
    width: "100%",
  },
  button: {
    background: "#56C3A4",
    textTransform: "capitalize",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "160px",
    height: "3.2rem",
  },
  icon: {
    fontSize: "2rem",
  },
  imageHolder: {
    position: "relative",
    height: "100%",
  },
  gridRightImage: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(20%)",
    height: "auto",
    maxWidth: "",
  },
  transparentRow: {
    display: "flex",
    alignItems: "center",
    height: "30vh",
    width: "90%",
    borderTopLeftRadius: "18px",
    borderBottomLeftRadius: "18px",
    background:
      "radial-gradient(98.09% 98.09% at 31.51% 23.05%, rgba(75, 80, 94, 0.5) 0%, rgba(36, 38, 43, 0.5) 100%)",
    boxShadow: "40px 60px 200px rgba(16, 18, 26, 0.5)",
    backdropFilter: "blur(60px)",
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
  cardsInsideFlexRow: {
    display: "inline-block",
    textAlign: "center",
    marginRight: "15px",
    height: "207px",
    width: "250px",
    borderRadius: "18px",
    border: "1px solid #444",
  },
}));

export default LandingPage;

{
  /* 
        
          <Box>
            
          </Box>
          <Box className={classes.imageHolder}>
            <img
              src={gridRight}
              alt="header background"
              className={classes.gridRightImage}
            />
          </Box>
        </Box>
      </Box> 
      */
}
