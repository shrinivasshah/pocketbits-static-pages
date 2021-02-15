import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeesPage from "./pages/FeesPage";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import BugBountyPage from "./pages/BugBountyPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import { useEffect } from "react";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/fees">
          <FeesPage />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/bug-bounty">
          <BugBountyPage />
        </Route>
        <Route path="/terms-conditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
