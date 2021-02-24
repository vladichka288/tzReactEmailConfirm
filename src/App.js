import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import React, { useEffect } from "react";
import { getCookieDataFromString } from "./Functions/Cookie";
import Registration from "./Components/Registration/Registration";
import Confirm from "./Components/Confirm/Confirm";
import Home from "./Components/Home/Home";
import { useCookie } from "./Context/CookieContext";
function App() {
  const { isCookie, setCookie, deleteCookie } = useCookie();
  let routes = null;
  useEffect(() => {
    let cookie = getCookieDataFromString(document.cookie);
    if (cookie != false) setCookie();
    else deleteCookie();
  }, []);
  if (isCookie) {
    routes = (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/postPitch" component={Registration} />
        <Route path="/confirmPage" component={Confirm} />
        <Redirect to="/postPitch" />
      </Switch>
    );
  }
  return <Layout> {routes}</Layout>;
}

export default App;
