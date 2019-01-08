import React, { Component } from "react";
import classnames from "classnames";
import Badgetip from "../common/badgetip";
import EpicInput from "../common/epic-input";
import {
  Col,
  FormGroup,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Label,
  Input
} from "reactstrap";

class HeroSkillEnhancements extends Component {
  state = {
    enhancements: this.props.enhancements,
    index: this.props.index,
    rarity: this.props.rarity,
    zodiac: this.props.zodiac,
    enhanceCosts: this.props.enhanceCosts,
    activeTab: 0
  };

  componentDidUpdate(prevProps) {
    const enhancements = [...this.props.enhancements];
    const zodiac = this.props.zodiac;
    const rarity = this.props.rarity;
    if (
      this.props.enhancements !== prevProps.enhancements ||
      this.props.zodiac !== prevProps.zodiac ||
      this.props.rarity !== prevProps.rarity
    ) {
      this.setState({ enhancements, zodiac, rarity });
    }
  }

  friendlyString(str) {
    if (str && typeof str === "string") {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9/-\s]+/gi, "")
        .replace(/\s/gi, "-");
    } else {
      return "";
    }
  }

  handleAdd = (type, i) => {
    let enhancements = [...this.state.enhancements];
    if (type === "resources") {
      const newResource = { item: "", qty: 0 };
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"],
        newResource
      ];
    } else {
      const newEnhancement = {
        description: "",
        resources: [{ item: "gold", qty: 0 }, { item: "", qty: 0 }]
      };
      enhancements = [...enhancements, newEnhancement];
      this.toggle(enhancements.length - 1);
    }
    this.setState({ enhancements });
  };

  handleChange = (type, value, i, j) => {
    const enhancements = [...this.state.enhancements];
    if (j !== undefined) {
      enhancements[i]["resources"][j][type] = this.friendlyString(value);
    } else {
      enhancements[i][type] = value;
    }
    this.setState({ enhancements });
  };

  handleDelete = (type, i, j) => {
    let enhancements = [...this.state.enhancements];
    if (type === "resources") {
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"].slice(0, j),
        ...enhancements[i]["resources"].slice(j + 1)
      ];
    } else {
      enhancements = [
        ...enhancements.slice(0, i),
        ...enhancements.slice(i + 1)
      ];
      if (i === enhancements.length) {
        this.toggle(enhancements.length - 1);
      } else {
        this.toggle(i);
      }
    }
    this.props.onChange("enhancement", enhancements, this.props.index);
  };

  onBlur = () => {
    this.props.onChange(
      "enhancement",
      this.state.enhancements,
      this.props.index
    );
  };

  findZodiacResource(name) {
    const { zodiac } = this.state;
    if (name === "rare" || name === "epic") {
      const { defaultZodiacs } = this.props;
      const obj = defaultZodiacs.find(element => {
        return element.value === zodiac;
      });
      if (obj !== undefined) {
        return name == "rare" ? obj.normalSkill : obj.worldSkill;
      }
    }
    return name;
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { enhancements, index, enhanceCosts, rarity } = this.state;

    return (
      <React.Fragment>
        <Col md="12">
          <Label>enhancements</Label>
          <Nav tabs className="small-tabs">
            <NavItem className={enhancements.length >= 7 ? "hidden" : ""}>
              <Button
                className="add-link"
                size="sm"
                onClick={e => this.handleAdd("enhancement", index)}
                onBlur={this.onBlur}
              >
                Add
              </Button>
            </NavItem>
            {enhancements.map((enhancement, i) => (
              <NavItem key={i}>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === i
                  })}
                  onClick={() => {
                    this.toggle(i);
                  }}
                >
                  +{i + 1}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col md="12">
          <TabContent activeTab={this.state.activeTab}>
            {enhancements.map((enhancement, i) => (
              <TabPane key={"description-" + i + "-" + index} tabId={i}>
                <FormGroup row>
                  <Col offset="12">
                    <Button
                      size="sm"
                      className={i !== 1 ? "pull-right" : "pull-right stealth"}
                      color="danger"
                      tabIndex="-1"
                      onClick={e => this.handleDelete("enhancement", i)}
                      onBlur={this.onBlur}
                    >
                      Delete
                    </Button>
                  </Col>
                  <EpicInput
                    type="text"
                    size="12"
                    name="description"
                    tooltip="Example: +5% damage dealt"
                    id={"description-" + index + "-" + i}
                    index={i}
                    value={enhancement.description}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                  />
                  <Col>
                    <Label>
                      resources{" "}
                      <Badgetip
                        value={
                          "Resources are automatically calculated based on rarity, zodiac, and max skill level"
                        }
                        id={"resources" + index + "-" + i}
                      />
                    </Label>
                  </Col>

                  {enhanceCosts[rarity - 3][enhancements.length - 1][i].map(
                    (resource, j) => (
                      <Col
                        key={"resources-" + j + "-" + index}
                        md="12"
                        className="resource-wrapper"
                      >
                        <FormGroup className="inline-wrapper full">
                          <Input
                            type="text"
                            readOnly
                            bsSize="sm"
                            name="item"
                            placeholder="resource item"
                            value={this.findZodiacResource(resource.item)}
                            onChange={e =>
                              this.handleChange(
                                "item",
                                e.currentTarget.value,
                                i,
                                j
                              )
                            }
                          />
                          <Input
                            type="number"
                            bsSize="sm"
                            name="qty"
                            value={resource.qty}
                            onChange={e =>
                              this.handleChange(
                                "qty",
                                e.currentTarget.value,
                                i,
                                j
                              )
                            }
                          />
                        </FormGroup>
                      </Col>
                    )
                  )}
                </FormGroup>
              </TabPane>
            ))}
          </TabContent>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroSkillEnhancements;
