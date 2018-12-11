import React, { Component } from "react";
import classnames from "classnames";
import {
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  CustomInput
} from "reactstrap";
import EpicInput from "../common/epic-input";
import HeroSkillEnhancements from "./hero-skill-enhancements";

class HeroSkills extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleChange = (type, value, i) => {
    const skills = [...this.props.skills];
    skills[i][type] = value;
    this.props.onChange("skills", skills);
    console.info("CHANGING", i);
  };

  render() {
    const { skills } = this.props;
    return (
      <React.Fragment>
        <Col md="12">
          <Nav tabs>
            {skills.map((skill, i) => (
              <NavItem key={i}>
                <NavLink
                  className={classnames({ active: this.state.activeTab === i })}
                  onClick={() => {
                    this.toggle(i);
                  }}
                >
                  Skill {i + 1}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <TabContent activeTab={this.state.activeTab}>
          {skills.map((skill, i) => (
            <TabPane key={i} tabId={i}>
              <Col md="12">
                <FormGroup row>
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.name}
                    name="name"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <Col md="3">
                    <CustomInput
                      id={"isPassive-" + i} //Id needs to be unique when using customInput
                      type="checkbox"
                      name="isPassive"
                      label="isPassive"
                      checked={skill.isPassive}
                      onChange={e =>
                        this.handleChange(
                          e.currentTarget.name,
                          e.currentTarget.checked,
                          i
                        )
                      }
                    />
                  </Col>
                  <Col md="3">
                    <CustomInput
                      id={"awakenUpgrade-" + i}
                      type="checkbox"
                      name="awakenUpgrade"
                      label="awakenUpgrade"
                      checked={skill.awakenUpgrade}
                      onChange={e =>
                        this.handleChange(
                          e.currentTarget.name,
                          e.currentTarget.checked,
                          i
                        )
                      }
                    />
                  </Col>
                  <EpicInput
                    type="textarea"
                    size="12"
                    value={skill.description}
                    name="description"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="number"
                    size="3"
                    value={skill.cooldown}
                    name="cooldown"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="number"
                    size="3"
                    value={skill.selfSkillBarValue}
                    name="selfSkillBarValue"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="number"
                    size="3"
                    value={skill.soulAcquire}
                    name="soulAcquire"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="number"
                    size="3"
                    value={skill.soulBurn}
                    name="soulBurn"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="text"
                    size="12"
                    value={skill.soulBurnEffect}
                    name="soulBurnEffect"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.buffs}
                    name="buffs"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.debuffs}
                    name="debuffs"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <HeroSkillEnhancements enhancements={skill.enhancement} />
                </FormGroup>
              </Col>
            </TabPane>
          ))}
        </TabContent>
      </React.Fragment>
    );
  }
}

export default HeroSkills;
