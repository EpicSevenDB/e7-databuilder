import React, { Component } from "react";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

class HeroRelations extends Component {
  render() {
    const { relations, relationType, onDelete, onChange, onNew } = this.props;

    return (
      <Col>
        <Label>Hero Relation</Label>

        {relations.map((relation, i) => (
          <Form key={i} inline>
            <FormGroup className="relation-wrapper">
              <Input
                type="text"
                placeholder="Hero Name"
                bsSize="sm"
                value={relation.hero}
                onChange={e => onChange(i, "hero", e.currentTarget.value)}
              />
              <Input
                type="select"
                bsSize="sm"
                value={relation.relationType}
                onChange={e =>
                  onChange(i, "relationType", e.currentTarget.value)
                }
              >
                <option value="" disabled>
                  Select Relation
                </option>
                {relationType.map((type, j) => (
                  <option key={j} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Input>
              <Button size="sm" color="danger" onClick={e => onDelete(i)}>
                X
              </Button>
            </FormGroup>
          </Form>
        ))}
        <Button onClick={onNew} color="secondary" outline block>
          Add new relation
        </Button>
      </Col>
    );
  }
}

export default HeroRelations;
