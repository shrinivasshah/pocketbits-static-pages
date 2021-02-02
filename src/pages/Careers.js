import { makeStyles } from "@material-ui/styles";
import React from "react";
import CareersFirstSection from "../components/CareersFirstSection/CareersFirstSection";
import CareersFourthSection from "../components/CareersFourthSection/CareersFourthSection";
import CareersSecondSection from "../components/CareersSecondSection/CareersSecondSection";
import CareersThirdSection from "../components/CareersThirdSection/CareersThirdSection";
import FooterWithContent from "../components/Footer/FooterWithContent";

function Careers() {
  const classes = useStyles();
  return (
    <div>
      <CareersFirstSection />
      <CareersSecondSection />
      <CareersThirdSection />
      <CareersFourthSection />
      <FooterWithContent />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({}));

export default Careers;
