import { makeStyles } from "@material-ui/styles";
import React from "react";
import FooterWithContent from "../components/Footer/FooterWithContent";
import TermsAndConditionsBody from "../components/TermsAndConditionsBody/TermsAndConditionsBody";
import TermsAndConditionsFirstSection from "../components/TermsAndConditionsFirstSection/TermsAndConditionsFirstSection";

function TermsAndConditions() {
  const classes = useStyles();
  return (
    <div>
      <TermsAndConditionsFirstSection />
      <TermsAndConditionsBody />
      <FooterWithContent />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default TermsAndConditions;
