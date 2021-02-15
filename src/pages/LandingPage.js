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
      <FreshChat
        token={"bbfebfe2-8af0-4131-82f2-1c7d8236b82b"}
        onInit={(widget) => {
          /* Use `widget` instead of `window.fcWidget`
            widget.user.setProperties({
              email: user.email,
              first_name: user.firstName,
              last_name: user.lastName,
              phone: user.phoneNumber,
            })
          */
          // widget.user.get((user) => console.log(user));
          // widget.on("user created", (user) => console.log(user));
          // widget.setExternalId("");
          // let restoreId = ""
          // widget.user.get(user =>  user)
          widget.setExternalId("mainnet99@gmail.com");
          widget.user.setProperties({
            firstName: "sreenath",
            lastName: "pradeep",
            phone: "9702",
            restoreId: "63842ffa-181d-48fd-8706-b8da45008a93",
            externalId: "mainnet99@gmail.com",
          });
        }}
      />
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
