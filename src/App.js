// import "./App.css";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeesPage from "./pages/FeesPage";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/fees">
          <FeesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
