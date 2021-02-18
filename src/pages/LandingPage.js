import { Box } from "@material-ui/core";

import React from "react";
import FreshChat from "react-freshchat";
import FooterWithContent from "../components/Footer/FooterWithContent";
import LandingPageFifthRow from "../components/LandingPageFifthSection/LandingPageFifthRow";
import LandingPageFourthSection from "../components/LandingPageFourthSection/LandingPageFourthSection";

import LandingPageHeader from "../components/LandingPageHeader/LandingPageHeader";
import ThirdDivision from "../components/ThirdDivision/ThirdDivision";

function LandingPage() {
  return (
    <Box>
      <LandingPageHeader />
      <ThirdDivision />
      <LandingPageFourthSection />
      <LandingPageFifthRow />
      <FooterWithContent />
    </Box>
  );
}

export default LandingPage;

{
  /* 
        
          <Box>
            
          </Box>
          <Box className={classes.imageHolder}>
            <img
              src={gridRight}
              alt="header background"
              className={classes.gridRightImage}
            />
          </Box>
        </Box>
      </Box> 
      */
}
