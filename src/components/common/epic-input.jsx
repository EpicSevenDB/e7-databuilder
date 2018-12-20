import React, { Component } from "react";
import { Col, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import BadgeTip from "../common/badgetip";

class EpicInput extends Component {
  state = {
    value: this.props.value
  };
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.handleChange(this.props.value);
    }
  }
  handleChange(input) {
    this.setState({ value: input });
  }

  render() {
    const { id, name, size, noLabel, offset, tooltip, validate } = this.props;
    return (
      <Col
        md={{ size: size, offset: offset }}
        sm="6"
        className={validate ? "epic-input error" : "epic-input"}
      >
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
        {validate ? (
          <Label className="error-message">This field cannot be empty</Label>
        ) : null}
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
            onChange(e.currentTarget.name, this.state.value, index, index2)
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
        className={readonly ? "readonly" : null}
        value={value}
        placeholder={placeholder}
        name={name}
        onBlur={e =>
          onChange(e.currentTarget.name, this.state.value, index, index2)
        }
        onChange={e => this.handleChange(e.currentTarget.value)}
      />
    );
  }
}

export default EpicInput;
