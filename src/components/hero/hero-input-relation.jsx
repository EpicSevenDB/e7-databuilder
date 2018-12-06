import React, { Component } from "react";
import { Col, Form, FormGroup, Button, Input } from "reactstrap";

class HeroInputRelation extends Component {
  render() {
    const { relation, relationType, onDelete, onChange, index } = this.props;

    return (
      <Form inline>
        <FormGroup className="relation-wrapper">
          <Input
            type="text"
            placeholder="Hero Name"
            bsSize="sm"
            value={relation.heroName}
            onChange={e => onChange(index, e.currentTarget.value)}
          />
          <Input
            type="select"
            value={relation.relation}
            bsSize="sm"
            onChange={e => onChange(index, e.currentTarget.value)}
          >
            <option disabled value="">
              Select Relation
            </option>
            {relationType.map((type, i) => (
              <option key={i} value={type.value}>
                {type.label}
              </option>
            ))}
          </Input>
          <Button
            size="sm"
            color="danger"
            value={index}
            onClick={() => onDelete(index)}
          >
            X
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default HeroInputRelation;
