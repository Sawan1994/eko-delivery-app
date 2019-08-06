import React, { PureComponent } from "react";
import NodesDetails from "./components/NodesDetails";
import EdgesDetails from "./components/EdgesDetails";
import EdgesList from "./components/EdgesList";

class GraphDetail extends PureComponent {
  render() {
    return (
      <div className="graph-details">
        <div className="card">
          <NodesDetails />
          <EdgesDetails />
        </div>
        <div className="card w-80">
          <EdgesList />
        </div>
      </div>
    );
  }
}

export default GraphDetail;
