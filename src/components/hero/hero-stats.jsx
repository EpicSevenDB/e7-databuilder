import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, Form, FormGroup, Button, Input, Label } from "reactstrap";

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
              name="base.cp"
              value={stats.base.cp}
              onChange={this.handleChange}
            />
            <EpicInput name="atk" value={stats.base.atk} />
            <EpicInput name="hp" value={stats.base.hp} />
            <EpicInput name="spd" value={stats.base.spd} />
            <EpicInput name="def" value={stats.base.def} />
          </FormGroup>
          <FormGroup row>
            <EpicInput name="chc" value={stats.base.chc} />
            <EpicInput name="chd" value={stats.base.chd} />
            <EpicInput name="eff" value={stats.base.eff} />
            <EpicInput name="efr" value={stats.base.efr} />
            <EpicInput name="dac" value={stats.base.dac} />
          </FormGroup>
        </Col>
        <Col md="12">
          <Label>Max Stats</Label>
          <FormGroup row>
            <EpicInput name="cp" value={stats.max.cp} />
            <EpicInput name="atk" value={stats.max.atk} />
            <EpicInput name="hp" value={stats.max.hp} />
            <EpicInput name="spd" value={stats.max.spd} />
            <EpicInput name="def" value={stats.max.def} />
          </FormGroup>
          <FormGroup row>
            <EpicInput name="chc" value={stats.max.chc} />
            <EpicInput name="chd" value={stats.max.chd} />
            <EpicInput name="eff" value={stats.max.eff} />
            <EpicInput name="efr" value={stats.max.efr} />
            <EpicInput name="dac" value={stats.max.dac} />
          </FormGroup>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroStats;
