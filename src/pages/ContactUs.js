import { Container } from "@material-ui/core";
import React from "react";
import CardComponentHolder from "../components/CardComponentHolder/CardComponentHolder";
import EndCredits from "../components/EndCredits/EndCredits";
import Footer from "../components/Footer/Footer";
import InputForm from "../components/InputForm/InputForm";
import Navbar from "../components/Navbar/Navbar";
import PageHeader from "../components/PageHeader/PageHeader";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <PageHeader />
      <CardComponentHolder />
      <InputForm />
      <Footer />
      <EndCredits />
    </div>
  );
}

export default ContactUs;
