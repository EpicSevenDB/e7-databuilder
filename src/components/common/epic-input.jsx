import React, { Component } from "react";
import { Col, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import BadgeTip from "../common/badgetip";

class EpicInput extends Component {
  state = {
    value: this.props.value
  };
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value && this.props.value) {
      this.handleChange(this.props.value);
    }
  }
  handleChange(input) {
    if (this.props.reformat) {
      this.setState({ value: this.friendlyString(input) });
    } else if (this.props.hasPercent) {
      this.setState({ value: this.convertPercent(input) });
    } else {
      this.setState({ value: input });
    }
  }

  friendlyString(str) {
    if (str && typeof str === "string") {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9/-\s]+/gi, "")
        .replace(/\s/gi, "-");
    } else {
      return "";
    }
  }

  onBlur(name, value, index, index2) {
    if (!isNaN(value) && value !== "") {
      this.props.onChange(name, parseInt(value), index, index2);
    } else {
      this.props.onChange(name, value, index, index2);
    }
  }

  convertPercent(value) {
    if (isNaN(value)) {
      if (value.indexOf("%") >= 0) {
        return parseFloat(value) / 100;
      }
    }
    return value;
  }

  render() {
    const { id, name, size, noLabel, offset, tooltip } = this.props;
    return (
      <Col md={{ size: size, offset: offset }} sm="6" className="epic-input">
        <Label className={noLabel ? "hidden" : ""} for={name}>
          {name} {tooltip && <BadgeTip value={tooltip} id={id} />}
        </Label>
        <InputGroup>
          {this.isSelectMenu()}
          {this.props.children ? (
            <InputGroupAddon addonType="append">
              {this.props.children}
            </InputGroupAddon>
          ) : null}
        </InputGroup>
      </Col>
    );
  }
  isSelectMenu() {
    const {
      type,
      name,
      placeholder,
      onChange,
      options,
      index,
      index2,
      readonly
    } = this.props;
    const { value } = this.state;
    if (type === "select") {
      return (
        <Input
          type={type}
          bsSize="sm"
          value={value}
          name={name}
          className={readonly ? "readonly" : null}
          onBlur={e =>
            this.onBlur(e.currentTarget.name, this.state.value, index, index2)
          }
          onChange={e => this.handleChange(e.currentTarget.value)}
        >
          <option disabled value="">
            Select {name}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
      );
    }
    return (
      <Input
        type={type}
        bsSize="sm"
        readOnly={readonly ? true : false}
        value={value}
        placeholder={placeholder}
        name={name}
        onBlur={e =>
          this.onBlur(e.currentTarget.name, this.state.value, index, index2)
        }
        onChange={e => this.handleChange(e.currentTarget.value)}
      />
    );
  }
}

export default EpicInput;
