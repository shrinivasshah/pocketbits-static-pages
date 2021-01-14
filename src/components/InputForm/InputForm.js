import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import FormContent from "./FormContent";

function InputForm() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Typography variant="h3" style={{ paddingBottom: "25px" }}>
          <strong>Drop us a message</strong>
        </Typography>
        <div className={classes.containerCard}>
          <FormContent label="Name" placeholder="Please enter your name" />
          <FormContent label="Email" placeholder="Please enter your email" />
          <FormContent
            label="Message"
            placeholder="Please enter your message here"
            textarea
            height="300px"
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "25%",
              lineHeight: "40px",
              margin: "15px 0",
              borderRadius: "25px",
              border: "none",
              color: "white",
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  containerCard: {
    paddingTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    minheight: "60%",
    // height: "60%",
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
    width: "80%",
    margin: "0 auto",
    borderRadius: "24px",
    backdropFilter: "blur(10px)",
  },
}));

export default InputForm;
