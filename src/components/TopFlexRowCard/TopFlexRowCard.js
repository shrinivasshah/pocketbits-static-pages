import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
function TopFlexRowCard({ index, coin }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.cardsInsideFlexRow}>
        <Box
          color="#fff"
          key={index}
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Typography variant="h5">{coin.symbol.slice(0, -3)}</Typography>
          <Button
            size="large"
            color="primary"
            variant="contained"
            className={classes.cardButton}
          >
            <Typography variant="h6" className={classes.buttonText}>
              <strong>₹{coin.buy}</strong>
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  cardsInsideFlexRow: {
    display: "inline-block",
    textAlign: "center",
    marginRight: "40px",
    height: "170px",
    width: "250px",
    borderRadius: "18px",
    border: "0.1px solid #444",
  },
  buttonText: {
    color: "white",
  },
  cardButton: {
    width: "70%",
    height: "70px",
    borderRadius: "20px",
  },
  highlightedCoinBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    margin: "0 auto",
    padding: "30px 0",
    background: theme.palette.primary.main,
    borderRadius: "25px",
  },
}));

export default TopFlexRowCard;
