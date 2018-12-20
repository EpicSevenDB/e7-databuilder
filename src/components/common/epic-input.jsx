import React, { Component } from "react";
import { Col, Label, Input, InputGroup, InputGroupAddon } from "reactstrap";
import BadgeTip from "../common/badgetip";

class EpicInput extends Component {
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
      value,
      name,
      placeholder,
      onChange,
      options,
      index,
      index2,
      readonly
    } = this.props;
    if (type === "select") {
      return (
        <Input
          type={type}
          bsSize="sm"
          value={value}
          name={name}
          className={readonly ? "readonly" : null}
          onChange={e =>
            onChange(e.currentTarget.name, e.currentTarget.value, index, index2)
          }
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
        onChange={e =>
          onChange(e.currentTarget.name, e.currentTarget.value, index, index2)
        }
      />
    );
  }
}

export default EpicInput;
