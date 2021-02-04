import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import EmptyTransparentCard from "../EmptyTransparentCard/EmptyTransparentCard";
import SignleItem from "../LandingPageFeature/LandingPageFeature";
import integrity from "../../assets/integrity.svg";
import innovation from "../../assets/Innovation.svg";
import elegant from "../../assets/elegant.svg";
import ownership from "../../assets/Ownership.svg";
import Dependability from "../../assets/dependability.svg";
function CareersSecondSection({ aboutUs }) {
  const classes = useStyles();

  const titleAndContent = aboutUs
    ? {
        item1: {
          title: "Integrity",
          body:
            "We have a conscious to do right by each other, our partners and most importantly our users.",
        },
        item2: {
          title: "Big Ideas",
          body:
            "A collective vision to grow and continuously deliver by challenging ourselves.",
        },
        item3: {
          title: "User Commitment",
          body:
            "We develop relation-ships that make our users a part of the PocketBits family.",
        },
        item4: {
          title: "Dependability",
          body:
            "We honour our commitments and take pride in being your 3am trade partner.",
        },
      }
    : {
        item1: {
          title: "Integrity and Ethics",
          body:
            "These two principles translate into doing the right thing, in an honest, fair, and responsible way",
        },
        item2: {
          title: "Innovation",
          body:
            "We believe that there is no limitaition in innovation as a result of which we constantly strive to upgrade and add new features to our dynamic platform",
        },
        item3: {
          title: "Elegant Simplicity",
          body:
            "We strive to keep out platform simple, focused, and immediately understandable.",
        },
        item4: {
          title: "Employee Ownership",
          body:
            "Each and every employee of our company has the mindset of treating and taking care of the company and customers as they were one’s own.",
        },
      };

  return (
    <div className={classes.root}>
      {!aboutUs ? (
        <Typography variant="h2">
          <b>Our Values</b>
        </Typography>
      ) : (
        <Typography variant="h3">
          <b>The crux of the team is the core values that we upload:</b>
        </Typography>
      )}

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
            title={titleAndContent.item1.title}
            text={titleAndContent.item1.body}
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={innovation}
            title={titleAndContent.item2.title}
            text={titleAndContent.item2.body}
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={`${!aboutUs ? elegant : ownership}`}
            title={titleAndContent.item3.title}
            text={titleAndContent.item3.body}
          />
        </EmptyTransparentCard>
        <EmptyTransparentCard careers>
          <SignleItem
            careers
            image={`${!aboutUs ? ownership : Dependability}`}
            title={titleAndContent.item4.title}
            text={titleAndContent.item4.body}
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
