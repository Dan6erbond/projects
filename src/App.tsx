import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import IDPA from "./components/pages/Projects/IDPA/IDPA";
import Projects from "./components/pages/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Switch>
        <Route path="/idpa">
          <IDPA />
        </Route>
        <Route path="/" exact>
          <Projects />
        </Route>
        <Route>
          <div style={{ textAlign: "center" }}>
            <h3>404:</h3>
            <h4>Not Found</h4>
            <br />
            <Link to="/" className="btn btn-outline-primary flat-button">
              <FontAwesomeIcon icon={faHome} /> Return to Home
            </Link>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
