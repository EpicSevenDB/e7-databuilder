import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, Label } from "reactstrap";

class HeroSpecialtySkills extends Component {
  handleChange = (type, value, i) => {
    const specialtySkill = { ...this.props.specialtySkill };
    if (i) {
      specialtySkill["stats"][type] = value;
    } else {
      specialtySkill[type] = value;
    }

    this.props.onChange("specialtySkill", specialtySkill);
  };
  render() {
    const { specialtySkill, onChange } = this.props;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>specialtySkills</Label>
        </Col>
        <EpicInput
          size="12"
          type="text"
          name="name"
          value={specialtySkill.name}
          onChange={this.handleChange}
        />
        <EpicInput
          size="12"
          type="textarea"
          name="description"
          value={specialtySkill.description}
          onChange={this.handleChange}
        />
        <EpicInput
          size="6"
          name="dispatch"
          value={specialtySkill.dispatch}
          onChange={this.handleChange}
        />
        <EpicInput
          size="6"
          name="enhancement"
          value={specialtySkill.enhancement}
          onChange={this.handleChange}
        />
        <Col md="12">
          <Label>stats</Label>
        </Col>
        <EpicInput
          size="4"
          type="number"
          name="command"
          index={1}
          value={specialtySkill.stats.command}
          onChange={this.handleChange}
        />
        <EpicInput
          size="4"
          type="number"
          name="charm"
          index={1}
          value={specialtySkill.stats.charm}
          onChange={this.handleChange}
        />
        <EpicInput
          size="4"
          type="number"
          name="politics"
          index={1}
          value={specialtySkill.stats.politics}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default HeroSpecialtySkills;
