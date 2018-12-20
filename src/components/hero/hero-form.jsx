import React, { Component } from "react";
import { FormGroup, Card, CardBody, CardHeader } from "reactstrap";

//Components
import EpicInput from "../common/epic-input";
import HeroRelations from "./hero-relations";
import HeroStats from "./hero-stats";
import HeroSkills from "./hero-skills";
import HeroSpecialtySkills from "./hero-specialty-skills";
import HeroMemoryImprint from "./hero-memory-imprint";
import HeroAwakening from "./hero-awakening";

class HeroForm extends Component {
  render() {
    const { hero, onChange, defaults } = this.props;
    return (
      <React.Fragment>
        <Card id="general">
          <CardHeader>general</CardHeader>
          <CardBody>
            <FormGroup row>
              <EpicInput
                type="text"
                name="name"
                size="12"
                tooltip="Example: Martial Artist Ken"
                id="heroName"
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
                tooltip="Example: commander-lorina"
                id="specialtyChangeName"
                size="12"
                value={hero.specialtyChangeName}
                onChange={onChange}
              />
              <EpicInput
                type="text"
                name="selfSkillBarName"
                tooltip="Example: fighting-spirit"
                id="selfSkillBarName"
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
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>relations</CardHeader>
          <CardBody>
            <FormGroup row>
              <HeroRelations
                relations={hero.relations}
                relationType={defaults.relationType}
                onChange={onChange}
              />
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>stats</CardHeader>
          <CardBody>
            <FormGroup row>
              <HeroStats stats={hero.stats} onChange={onChange} />
            </FormGroup>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>skills</CardHeader>
          <CardBody>
            <FormGroup>
              <HeroSkills
                skills={hero.skills}
                onChange={onChange}
                buffs={defaults.buffs}
                debuffs={defaults.debuffs}
                isDark={this.props.isDark}
              />
            </FormGroup>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>specialtySkills</CardHeader>
          <CardBody>
            <FormGroup row>
              <HeroSpecialtySkills
                specialtySkill={hero.specialtySkill}
                onChange={onChange}
              />
            </FormGroup>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>memoryImprint</CardHeader>
          <CardBody>
            <FormGroup row>
              <HeroMemoryImprint
                memoryImprint={hero.memoryImprint}
                onChange={onChange}
              />
            </FormGroup>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>awakening</CardHeader>
          <CardBody>
            <FormGroup>
              <HeroAwakening awakening={hero.awakening} onChange={onChange} />
            </FormGroup>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default HeroForm;
