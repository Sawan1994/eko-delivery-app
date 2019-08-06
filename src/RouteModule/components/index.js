import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setRoute } from "../actions/action";
import RouteDetails from "./RouteDetails";

class RoutePlanner extends PureComponent {
  constructor(props) {

    super(props);

    this.state = {
      from: "",
      to: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onGenerateClick = this.onGenerateClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onGenerateClick() {
    const { from, to } = this.state;
    this.props.setRoute([{ source: from, destination: to }]);
  }

  render() {
    const { nodes } = this.props;
    const { from, to } = this.state;

    return (
      <div className="route-block">
        <div className="card">
          <div className="route-detail">
            <div className="form-group">
              <label className="label-text" htmlFor="from">
                From
              </label>
              <select
                className="select-box route-selectpicker"
                value={from}
                onChange={this.handleChange}
                name="from"
              >
              <option value="" selected="selected" hidden="hidden">Choose here</option>
                {nodes.map(node => (
                  <option key={node} value={node}>
                    {node}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="label-text" htmlFor="to">
                To
              </label>
              <select
                className="select-box route-selectpicker"
                value={to}
                onChange={this.handleChange}
                name="to"
              >
              <option value="" selected="selected" hidden="hidden">Choose here</option>
                {nodes.map(node => (
                  <option key={node} value={node}>
                    {node}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn" onClick={this.onGenerateClick}>DONE</button>
          </div>
          <RouteDetails />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: state.graphDetailReducer.nodesList
});

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch(setRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutePlanner);
