
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";

import Registration from "./Registration/Registration";
function App() {
  let routes = (
    <Switch>
      {/* <Route path="/findPartner" component={FindPartner} />
      <Route path="/blog" component={Blog} />
      <Route path="/login" component={Login} />
      <Route path="/postPitch" component={PostPitch} />*/}
      <Route path="/postPitch" component={Registration} />
      <Redirect to="/postPitch" />
    </Switch>
  );
  return <Layout> {routes}</Layout>;
}

export default App;
