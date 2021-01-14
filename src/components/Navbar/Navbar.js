import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import { Container, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import NavColorTriggerOnScroll from "./NavColorTriggerOnScroll";

function Navbar(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const StyledTabs = withStyles((theme) => ({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div": {
        maxWidth: 50,
        width: "100%",
        backgroundColor: "#635ee7",
      },
      animation: "2s",
    },
  }))((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "initial",
      color: "#9e88a2",
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing.unit * 1,
      transition: "0.9s ease-out",
      "&:hover": {
        color: "#fff",
      },
      "&$selected": {
        color: "#fff",
      },
      "&:focus": {
        color: "#fff",
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  //styled Tab

  // const StyledTab = withStyles({
  //   root: {
  //     borderBottomWidth: "80% !important",
  //   },
  // })(Tab);
  return (
    <div className={classes.root}>
      <NavColorTriggerOnScroll>
        <AppBar
          position="fixed"
          color="transparent"
          style={{ boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar
              style={{ backgroundColor: "transperant", boxShadow: "none" }}
            >
              <Typography variant="h6" className={classes.title}>
                <span style={{ color: "white" }}>POCKET</span>
                <span className={classes.mainThemeColor}>BITS</span>
              </Typography>
              <StyledTabs
                value={page}
                onChange={handleChange}
                indicatorColor="primary"
                centered
              >
                <StyledTab label="Trade" />
                <StyledTab label="Fees" />
                <StyledTab label="About Us" />
                <StyledTab label="Contact Us" />
              </StyledTabs>
            </Toolbar>
          </Container>
        </AppBar>
      </NavColorTriggerOnScroll>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 999,
  },
  mainThemeColor: {
    color: "#56C3A4",
  },

  title: {
    flexGrow: 1,
  },
}));