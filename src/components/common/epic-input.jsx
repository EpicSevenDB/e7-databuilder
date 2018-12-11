import React, { Component } from "react";
import { Col, Label, Input } from "reactstrap";

class EpicInput extends Component {
  render() {
    const { name, size, noLabel } = this.props;
    return (
      <Col md={size}>
        <Label className={noLabel ? "hidden" : ""} for={name}>
          {name}
        </Label>
        {this.isSelectMenu()}
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
      index2
    } = this.props;
    if (type === "select") {
      return (
        <Input
          type={type}
          bsSize="sm"
          value={value}
          name={name}
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
