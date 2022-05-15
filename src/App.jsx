import React from "react";
import College from "./components/pages/SingleView-CollegeStudent";
import DashBoard from "./components/pages/SingleView-DashBoard";
import Employee from "./components/pages/SingleView-Employee";
import Send from "./components/pages/SingleView-Send";
import Explore from "./components/pages/SingleView-Explore1";
import Setting from "./components/pages/SingleView-Setting";
import Interested from "./components/pages/SingleView-Interested";
import Personal from "./components/pages/SingleView-Personal2";
import PersonalDetails from "./components/pages/SingleView-Personal-details";
import Product from "./components/pages/SingleView-ProductDEs";
import SchoolStudent from "./components/pages/SingleView-SchoolStudent";
import Selection from "./components/pages/SingleView-Selection";
import Register from "./components/pages/SingleView-Register";
import Success from "./components/pages/SingleView-Success";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route path="/5" component={DashBoard} exact />
      {/* / */}
      <Route path="/3-a" component={College} exact />
     
      <Route path="/3-b" component={Employee} exact />
    
      <Route path="/3-c" component={SchoolStudent} exact />
    
      <Route path="/single-view-Explore" component={Explore} exact />
      <Route path="/single-view-send" component={Send} exact />
      <Route path="/single-view-Interested" component={Interested} exact />
      <Route path="/single-view-PersonalDetails" component={PersonalDetails} exact />
      <Route path="/single-view-Personal" component={Personal} exact />
      <Route path="/single-view-Product" component={Product} exact />
      <Route path="/single-view-Selection" component={Selection} exact />
      <Route path="/single-view-Setting" component={Setting} exact />
      <Route path="/single-view-register" component={Register} exact />
      <Route path="/single-view-success" component={Success} exact />
         {/* /single-view-Employee */}
          {/* /single-view-College */}
        {/* /single-view-SchoolStudent */}
    </BrowserRouter>
  );
}

export default App;


