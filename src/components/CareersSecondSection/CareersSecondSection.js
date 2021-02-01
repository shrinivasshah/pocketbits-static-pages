import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import EmptyTransparentCard from "../EmptyTransparentCard/EmptyTransparentCard";
import SignleItem from "../LandingPageFeature/LandingPageFeature";
import integrity from "../../assets/integrity.svg";
import innovation from "../../assets/Innovation.svg";
import elegant from "../../assets/elegant.svg";
import ownership from "../../assets/Ownership.svg";
function CareersSecondSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">
        <b>Our Values</b>
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-between"
        height="100%"
        width="85%"
        margin="0 auto"
      >
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={integrity}
            title="Integrity and Ethics"
            text="These two principles translate into doing the right thing, in an honest, fair, and responsible way"
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={innovation}
            title="Innovation"
            text="We believe that there is no limitaition
 in innovation as a result of which we constantly strive to upgrade and add new features to our dynamic platform"
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={elegant}
            title="Elegant Simplicity"
            text="We strive to keep out platform simple, focused, and immediately understandable."
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={ownership}
            title="Innovation"
            text="Each and every employee of our company has the mindset of treating and taking care of the company and customers as they were one’s own."
          />
        </EmptyTransparentCard>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    height: "50vh",
    width: "100vw",
    textAlign: "center",
  },
}));
export default CareersSecondSection;
