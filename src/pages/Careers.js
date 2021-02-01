import { makeStyles } from "@material-ui/styles";
import React from "react";
import CareersFirstSection from "../components/CareersFirstSection/CareersFirstSection";
import CareersSecondSection from "../components/CareersSecondSection/CareersSecondSection";
import CareersThirdSection from "../components/CareersThirdSection/CareersThirdSection";

function Careers() {
  const classes = useStyles();
  return (
    <div>
      <CareersFirstSection />
      <CareersSecondSection />
      <CareersThirdSection />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default Careers;
