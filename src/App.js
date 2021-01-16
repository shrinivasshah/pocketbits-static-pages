// import "./App.css";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeesPage from "./pages/FeesPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
