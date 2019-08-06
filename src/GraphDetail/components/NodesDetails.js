import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { onAddNode } from "../actions/action";
import NodeList from "./NodeList";

class NodesDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      node: ""
    };

    this.handleNode = this.handleNode.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  handleNode(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onAddClick() {
    this.props.onAddNode(this.state.node);
    this.setState({
      node: ""
    });
  }

  render() {
    const { node } = this.state;

    return (
      <div className="graph-detail-block">
        <h3 className="block-heading">Nodes</h3>
        <div className="form-group">
          {/* <label className="label-text" htmlFor="node">
            Node
          </label> */}
          <div className="node">
            <input
              className="input-textbox mr-10"
              type="text"
              name="node"
              value={node}
              onChange={this.handleNode}
              placeholder="Enter node"
            />
            <button type="button" className="btn" onClick={this.onAddClick}>
              Add Node
            </button>
          </div>
        </div>
        <NodeList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddNode: data => dispatch(onAddNode(data))
});

export default connect(
  null,
  mapDispatchToProps
)(NodesDetails);
