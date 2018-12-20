import React, { Component } from "react";
import BadgeTip from "../common/badgetip";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

class HeroRelations extends Component {
  state = {
    relations: this.props.relations
  };
  componentDidUpdate(prevProps) {
    const relations = [...this.props.relations];
    if (this.props.relations !== prevProps.relations) {
      this.setState({ relations });
    }
  }
  handleChange = (type, value, i) => {
    const relations = [...this.state.relations];
    relations[i][type] = value;
    this.setState({ relations });
  };

  handleDelete = i => {
    const relations = [
      ...this.state.relations.slice(0, i),
      ...this.state.relations.slice(i + 1)
    ];
    this.setState({ relations });
  };

  handleAdd = () => {
    const newRelation = {
      hero: "",
      relationType: ""
    };
    const relations = [...this.state.relations, newRelation];
    this.setState({ relations });
  };

  onBlur = () => {
    this.props.onChange("relations", this.state.relations);
  };

  render() {
    const { relationType } = this.props;
    const { relations } = this.state;

    return (
      <Col md="12">
        <Label>
          relations
          <BadgeTip value="Example: martial-artist-ken" id="relations" />
        </Label>
        {relations.map((relation, i) => (
          <Form key={i} inline>
            <FormGroup className="inline-wrapper">
              <Input
                type="text"
                placeholder="Hero Name"
                bsSize="sm"
                value={relation.hero}
                onChange={e =>
                  this.handleChange("hero", e.currentTarget.value, i)
                }
                onBlur={this.onBlur}
              />
              <Input
                type="select"
                bsSize="sm"
                value={relation.relationType}
                onChange={e =>
                  this.handleChange("relationType", e.currentTarget.value, i)
                }
                onBlur={this.onBlur}
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
              {i !== 0 ? (
                <Button
                  size="sm"
                  color="danger"
                  tabIndex="-1"
                  onClick={e => this.handleDelete(i)}
                  onBlur={this.onBlur}
                >
                  X
                </Button>
              ) : null}
            </FormGroup>
          </Form>
        ))}
        <Button
          onClick={this.handleAdd}
          color="secondary"
          outline
          size="sm"
          block
          className="btn-add"
          onBlur={this.onBlur}
        >
          Add new relation
        </Button>
      </Col>
    );
  }
}

export default HeroRelations;
