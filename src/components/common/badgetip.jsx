import React, { Component } from "react";
import { Badge, Tooltip } from "reactstrap";

class BadgeTip extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { value, id } = this.props;
    return (
      <React.Fragment>
        <Badge color="secondary" pill id={id}>
          ?
        </Badge>

        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target={id}
          toggle={this.toggle}
        >
          {value}
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default BadgeTip;
