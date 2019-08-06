import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addEdge } from "../actions/action";

class EdgesDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      source: "",
      destination: "",
      weight: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onAddClick() {
    const { source, destination, weight } = this.state;
    let cost = Number.parseInt(weight);
    this.props.setEdge({ source, destination,weight: cost});
  }

  render() {
    const { source, destination, weight } = this.state;

    return (
      <div>
        <h3 className="block-heading">Edges details</h3>

        <div className="edge-details-block">
          <div className="form-group">
            <label className="label-text" htmlFor="source">
              Source
            </label>
            <input
              className="input-textbox"
              type="text"
              value={source}
              onChange={this.handleChange}
              name="source"
            />
          </div>
          <div className="form-group">
            <label className="label-text" htmlFor="destination">
              Destination
            </label>
            <input
              className="input-textbox"
              type="text"
              value={destination}
              onChange={this.handleChange}
              name="destination"
            />
          </div>
          <div className="form-group">
            <label className="label-text" htmlFor="weight">
              Weight
            </label>
            <input
              className="input-textbox"
              type="number"
              value={weight}
              onChange={this.handleChange}
              name="weight"
            />
          </div>
          <button className="btn align-self-center" onClick={this.onAddClick}>
            Add edge
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setEdge: data => dispatch(addEdge(data))
});

export default connect(
  null,
  mapDispatchToProps
)(EdgesDetails);
