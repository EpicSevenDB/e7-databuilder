import React, { Component } from "react";

import HeroRelations from "./hero-relations";
import HeroStats from "./hero-stats";
import { FormGroup } from "reactstrap";
import EpicInput from "../common/epic-input";

class HeroForm extends Component {
  render() {
    const { hero, onChange, defaults } = this.props;
    return (
      <React.Fragment>
        <h3>Input</h3>
        <FormGroup row>
          <EpicInput
            type="text"
            name="name"
            size="12"
            value={hero.name}
            onChange={onChange}
          />
          <EpicInput
            type="select"
            name="rarity"
            size="6"
            value={hero.rarity}
            options={defaults.rarity}
            onChange={onChange}
          />
          <EpicInput
            type="select"
            name="classType"
            size="6"
            value={hero.classType}
            options={defaults.classType}
            onChange={onChange}
          />
          <EpicInput
            type="select"
            name="element"
            size="6"
            value={hero.element}
            options={defaults.element}
            onChange={onChange}
          />
          <EpicInput
            type="select"
            name="zodiac"
            size="6"
            value={hero.zodiac}
            options={defaults.zodiac}
            onChange={onChange}
          />
          <EpicInput
            type="text"
            name="specialtyChangeName"
            size="12"
            value={hero.specialtyChangeName}
            onChange={onChange}
          />
          <EpicInput
            type="text"
            name="selfSkillBarName"
            size="12"
            value={hero.selfSkillBarName}
            onChange={onChange}
          />
          <EpicInput
            type="textarea"
            name="background"
            size="12"
            value={hero.background}
            onChange={onChange}
          />
          <HeroRelations
            relations={hero.relations}
            relationType={defaults.relationType}
            onChange={onChange}
          />
          <HeroStats stats={hero.stats} onChange={onChange} />
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default HeroForm;
