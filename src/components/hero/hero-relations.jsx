import React, { Component } from "react";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

class HeroRelations extends Component {
  handleChange = (type, value, i) => {
    const relations = [...this.props.relations];
    relations[i][type] = value;
    this.props.onChange("relations", relations);
  };

  handleDelete = i => {
    const relations = [
      ...this.props.relations.slice(0, i),
      ...this.props.relations.slice(i + 1)
    ];
    this.props.onChange("relations", relations);
  };

  handleAdd = () => {
    const newRelation = {
      hero: "",
      relationType: ""
    };
    const relations = [...this.props.relations, newRelation];
    this.props.onChange("relations", relations);
  };
  render() {
    const { relations, relationType } = this.props;

    return (
      <Col md="12">
        <Label>relations</Label>

        {relations.map((relation, i) => (
          <Form key={i} inline>
            <FormGroup className="relation-wrapper">
              <Input
                type="text"
                placeholder="Hero Name"
                bsSize="sm"
                value={relation.hero}
                onChange={e =>
                  this.handleChange("hero", e.currentTarget.value, i)
                }
              />
              <Input
                type="select"
                bsSize="sm"
                value={relation.relationType}
                onChange={e =>
                  this.handleChange("relationType", e.currentTarget.value, i)
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
              <Button
                size="sm"
                color="danger"
                onClick={e => this.handleDelete(i)}
              >
                X
              </Button>
            </FormGroup>
          </Form>
        ))}
        <Button onClick={this.handleAdd} color="secondary" outline block>
          Add new relation
        </Button>
      </Col>
    );
  }
}

export default HeroRelations;
