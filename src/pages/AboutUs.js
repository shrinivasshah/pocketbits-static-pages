import React from "react";
import AboutUsCardHolderForSecondSection from "../components/AboutUsCardHolderForSecond/AboutUsCardHolderForSecondSection";
import AboutUsFifthSection from "../components/AboutUsFifthSection/AboutUsFifthSection";
import AboutUsFirstSection from "../components/AboutUsFirstSection/AboutUsFirstSection";
import AboutUsFourthSection from "../components/AboutUsFourthSection/AboutUsFourthSection";
import AboutUsSecondSection from "../components/AboutUsSecondSection/AboutUsSecondSection";
// import AboutUsThirdSection from "../components/AboutUsThirdSection/AboutUsThirdSection";
import FooterWithContent from "../components/Footer/FooterWithContent";

function AboutUs() {
  return (
    <div>
      <AboutUsFirstSection />
      <AboutUsSecondSection />
      <AboutUsCardHolderForSecondSection />
      {/* <AboutUsThirdSection /> */}
      <AboutUsFourthSection />
      <AboutUsFifthSection />
      <FooterWithContent />
    </div>
  );
}

export default AboutUs;
