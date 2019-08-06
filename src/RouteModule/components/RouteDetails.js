import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DirectedGraph } from "../../DataStructure/DirectedGraph";

class RouteDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      allRoutes: []
    };

    this.handleRoutes = this.handleRoutes.bind(this);
  }

  handleRoutes() {
    const { nodes, edges, route } = this.props;
    if (
      route.length > 0 &&
      (route[0].source === "" || route[0].destination === "")
    ) {
      return;
    }
    if (route[0].source === route[0].destination) return;

    let g = new DirectedGraph(nodes.length);
    for (let i = 0; i < nodes.length; i++) {
      g.addNode(nodes[i], i);
    }
    for (let i = 0; i < edges.length; i++) {
      const { source, destination, weight } = edges[i];
      g.addEdge(source, destination, weight);
    }

    g.printGraph();
    const { source, destination } = route[0];
    console.log(g.getRouteCost(source + "-" + destination));
    this.setState(
      {
        allRoutes: g.printAllPaths(source, destination)
      },
      () => console.log(this.state.allRoutes)
    );
  }

  render() {
    const { route } = this.props;
    const { allRoutes } = this.state;
    console.log(this.props.route);
    return (
      <div>
        {route.length > 0 && (
          <>
            <h4>Route</h4>
            <table>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{route[0].source}</td>
                  <td className="text-center">{route[0].destination}</td>
                  <td className="text-center">
                    <button
                      className="btn"
                      onClick={this.handleRoutes}
                      style={{ height: "100%" }}
                    >
                      Get Routes
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        <h4>Route Options</h4>
        <table className="mb-20">
          <thead>
            <tr>
              <th>Route</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allRoutes &&
              allRoutes.length > 0 &&
              allRoutes.map(route => {
                let r = route[0].source;
                let cost = 0;
                route.forEach(edge => {
                  r += " -> " + edge.destination;
                  cost += edge.weight;
                });
                return (
                  <tr className="tr-border" key={r}>
                    <td className="text-center">{r}</td>
                    <td className="text-center">{cost}</td>
                    <td className="text-center" />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: state.graphDetailReducer.nodesList,
  edges: state.graphDetailReducer.edgesList,
  route: state.routeReducer.route
});

export default connect(mapStateToProps)(RouteDetails);
