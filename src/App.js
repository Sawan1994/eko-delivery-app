import React from "react";
import "./App.css";
// import GraphDetail from "./GraphDetail";
// import RoutePlanner from "./RouteModule/components";
// import RouteDetails from "./RouteModule/components/RouteDetails";
import { NavMenu } from "./NavMenu";
import { AppRoute } from "./AppRoute";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <p>Eko Smart Delivery</p>
        </div>
        <div className="menu-container">
          <NavMenu />
        </div>
      </header>
      <div className="container">
        <AppRoute />
      </div>
      {/* <GraphDetail />
        <hr />
        <RoutePlanner />
        <RouteDetails />
      </div> */}
    </div>
  );
}

export default App;
