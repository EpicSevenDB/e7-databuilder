import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, FormGroup, Label } from "reactstrap";

class HeroStats extends Component {
  handleChange = (name, value) => {
    const stats = { ...this.props.stats };
    const names = name.split("."); //Split the nested object name
    stats[names[0]][names[1]] = value;
    this.props.onChange("stats", stats);
  };
  render() {
    const { stats } = this.props;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>Base Stats</Label>
          <FormGroup row>
            <EpicInput
              type="number"
              size="20"
              name="base.cp"
              value={stats.base.cp}
              onChange={this.handleChange}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.atk"
              value={stats.base.atk}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.hp"
              value={stats.base.hp}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.spd"
              value={stats.base.spd}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.def"
              value={stats.base.def}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.chc"
              value={stats.base.chc}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.chd"
              value={stats.base.chd}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.eff"
              value={stats.base.eff}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.efr"
              value={stats.base.efr}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="base.dac"
              value={stats.base.dac}
            />
          </FormGroup>
        </Col>
        <Col md="12">
          <Label>Max Stats</Label>
          <FormGroup row>
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.cp"
              value={stats.max.cp}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.atk"
              value={stats.max.atk}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.hp"
              value={stats.max.hp}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.spd"
              value={stats.max.spd}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.def"
              value={stats.max.def}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.chc"
              value={stats.max.chc}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.chd"
              value={stats.max.chd}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.eff"
              value={stats.max.eff}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.efr"
              value={stats.max.efr}
            />
            <EpicInput
              type="number"
              onChange={this.handleChange}
              size="20"
              name="max.dac"
              value={stats.max.dac}
            />
          </FormGroup>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroStats;
