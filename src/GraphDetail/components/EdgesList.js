import React, { PureComponent } from "react";
import { connect } from "react-redux";

class EdgesList extends PureComponent {
  render() {
    const { edges } = this.props;

    return (
      <table className="mb-20">
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {edges.map(({ source, destination, weight }) => (
            <tr className="tr-border" key={source + destination + weight}>
              <td className="text-center">{source}</td>
              <td className="text-center">{destination}</td>
              <td className="text-center">{weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  edges: state.graphDetailReducer.edgesList
});
export default connect(mapStateToProps)(EdgesList);
