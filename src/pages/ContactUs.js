import React from "react";
import CardComponentHolder from "../components/CardComponentHolder/CardComponentHolder";
import EndCredits from "../components/EndCredits/EndCredits";
import FooterWithContent from "../components/Footer/FooterWithContent";
import InputForm from "../components/InputForm/InputForm";
import Navbar from "../components/Navbar/Navbar";
import PageHeader from "../components/PageHeader/PageHeader";

function ContactUs() {
  return (
    <div>
      <PageHeader />
      <CardComponentHolder />
      <InputForm />
      {/* <Footer /> */}
      <FooterWithContent />
      <EndCredits />
    </div>
  );
}

export default ContactUs;
