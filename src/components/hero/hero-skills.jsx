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
import HeroBuffsDebuffs from "./hero-buffs-debuffs";

class HeroSkills extends Component {
  state = {
    activeTab: 0,
    skills: this.props.skills
  };
  componentDidUpdate(prevProps) {
    const skills = [...this.props.skills];
    if (this.props.skills !== prevProps.skills) {
      this.setState({ skills });
    }
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  handleChange = (type, value, i) => {
    const skills = [...this.state.skills];
    skills[i][type] = value;
    this.props.onChange("skills", skills);
  };

  render() {
    const { skills } = this.state;
    return (
      <React.Fragment>
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

        <TabContent activeTab={this.state.activeTab}>
          {skills.map((skill, i) => (
            <TabPane key={i} tabId={i}>
              <Col md="12">
                <FormGroup row>
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.name}
                    tooltip="Example: Dragon Flame"
                    id={"skillName-" + i}
                    name="name"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <Col md="3" className="empty-label">
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
                  <Col md="3" className="empty-label">
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
                    type="select"
                    size="3"
                    value={skill.cooldown}
                    name="cooldown"
                    options={[
                      { label: 0, value: 0 },
                      { label: 1, value: 1 },
                      { label: 2, value: 2 },
                      { label: 3, value: 3 },
                      { label: 4, value: 4 },
                      { label: 5, value: 5 },
                      { label: 6, value: 6 },
                      { label: 7, value: 7 },
                      { label: 8, value: 8 },
                      { label: 9, value: 9 },
                      { label: 10, value: 10 },
                      { label: 11, value: 11 },
                      { label: 12, value: 12 }
                    ]}
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
                    type="select"
                    size="3"
                    value={skill.soulAcquire}
                    tooltip="Example: 1/2/3"
                    id={"soulAquire-" + i}
                    name="soulAcquire"
                    options={[
                      { label: 1, value: 1 },
                      { label: 2, value: 2 },
                      { label: 3, value: 3 }
                    ]}
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="select"
                    size="3"
                    value={skill.soulBurn}
                    tooltip="Example: 10/20"
                    id={"soulBurn-" + i}
                    name="soulBurn"
                    options={[
                      { label: 0, value: 0 },
                      { label: 10, value: 10 },
                      { label: 20, value: 20 }
                    ]}
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="text"
                    size="12"
                    value={skill.soulBurnEffect}
                    tooltip="Example: Increases damage dealt"
                    id={"soulBurnEffect-" + i}
                    name="soulBurnEffect"
                    index={i}
                    onChange={this.handleChange}
                  />
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.buffs}
                    tooltip="Example: stic_att_up, stic_spd_up"
                    id={"buffs-" + i}
                    name="buffs"
                    index={i}
                    onChange={this.handleChange}
                    readonly={true}
                  >
                    <HeroBuffsDebuffs
                      value={skill.buffs}
                      type="buffs"
                      isDark={this.props.isDark}
                      index={i}
                      defaults={this.props.buffs}
                      onChange={this.handleChange}
                    />
                  </EpicInput>
                  <EpicInput
                    type="text"
                    size="6"
                    value={skill.debuffs}
                    tooltip="Example: stic_att_dn, stic_spd_dn"
                    id={"debuffs-" + i}
                    name="debuffs"
                    index={i}
                    onChange={this.handleChange}
                    readonly={true}
                  >
                    <HeroBuffsDebuffs
                      value={skill.debuffs}
                      type="debuffs"
                      isDark={this.props.isDark}
                      index={i}
                      defaults={this.props.debuffs}
                      onChange={this.handleChange}
                    />
                  </EpicInput>
                  <HeroSkillEnhancements
                    enhancements={skill.enhancement}
                    onChange={this.handleChange}
                    index={i}
                  />
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
