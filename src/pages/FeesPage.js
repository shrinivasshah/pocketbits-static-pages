import React from "react";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";
import FeeHeader from "../components/FeeHeader/FeeHeader";
import FeeTableHolder from "../components/FeeTableHolder/FeeTableHolder";
import FooterWithContent from "../components/Footer/FooterWithContent";
// import Navbar from "../components/Navbar/Navbar";

function FeesPage() {
  return (
    <div>
      <FeeHeader />
      <FeaturesComponent />
      <FeeTableHolder />
      <FooterWithContent />
    </div>
  );
}

export default FeesPage;
