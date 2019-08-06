import React, { PureComponent } from "react";
import { connect } from "react-redux";

class NodeList extends PureComponent {
  render() {
    const { nodes } = this.props;

    return (
      <div className="pill-container">
        {nodes.map(node => (
          <div className="pills" key={node}>{node}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: state.graphDetailReducer.nodesList
});
export default connect(mapStateToProps)(NodeList);
