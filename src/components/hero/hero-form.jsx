import React, { Component } from "react";
import {
  FormGroup,
  Card,
  CardBody,
  CardHeader,
  Button,
  Collapse
} from "reactstrap";

//Components
import EpicInput from "../common/epic-input";
import HeroRelations from "./hero-relations";
import HeroStats from "./hero-stats";
import HeroSkills from "./hero-skills";
import HeroSpecialtySkills from "./hero-specialty-skills";
import HeroMemoryImprint from "./hero-memory-imprint";
import HeroAwakening from "./hero-awakening";

class HeroForm extends Component {
  state = {
    collapse: [false, false, false, false, false, false, false]
  };
  componentDidUpdate(prevProps) {
    const hero = { ...this.props.hero };
    if (this.props.hero !== prevProps.hero) {
      this.setState({ hero });
    }
  }

  toggle = i => {
    const collapse = [...this.state.collapse];
    collapse[i] = !collapse[i];
    this.setState({ collapse });
  };

  render() {
    const { hero, onChange, defaults } = this.props;
    const { collapse } = this.state;
    return (
      <React.Fragment>
        <Card id="general">
          <CardHeader>
            general
            <Button onClick={e => this.toggle(0)} className="btn-collapse">
              {collapse[0] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[0]}>
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
          </Collapse>
        </Card>
        <Card>
          <CardHeader>
            relations
            <Button onClick={e => this.toggle(1)} className="btn-collapse">
              {collapse[1] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[1]}>
            <CardBody>
              <FormGroup row>
                <HeroRelations
                  relations={hero.relations}
                  relationType={defaults.relationType}
                  onChange={onChange}
                />
              </FormGroup>
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader>
            stats
            <Button onClick={e => this.toggle(2)} className="btn-collapse">
              {collapse[2] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[2]}>
            <CardBody>
              <FormGroup row>
                <HeroStats stats={hero.stats} onChange={onChange} />
              </FormGroup>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            skills
            <Button onClick={e => this.toggle(3)} className="btn-collapse">
              {collapse[3] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[3]}>
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
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            specialtySkills
            <Button onClick={e => this.toggle(4)} className="btn-collapse">
              {collapse[4] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[4]}>
            <CardBody>
              <FormGroup row>
                <HeroSpecialtySkills
                  specialtySkill={hero.specialtySkill}
                  onChange={onChange}
                />
              </FormGroup>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            memoryImprint
            <Button onClick={e => this.toggle(5)} className="btn-collapse">
              {collapse[5] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[5]}>
            <CardBody>
              <FormGroup row>
                <HeroMemoryImprint
                  memoryImprint={hero.memoryImprint}
                  onChange={onChange}
                />
              </FormGroup>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            awakening
            <Button onClick={e => this.toggle(6)} className="btn-collapse">
              {collapse[6] ? "+" : "-"}
            </Button>
          </CardHeader>
          <Collapse isOpen={!collapse[6]}>
            <CardBody>
              <FormGroup>
                <HeroAwakening awakening={hero.awakening} onChange={onChange} />
              </FormGroup>
            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export default HeroForm;
