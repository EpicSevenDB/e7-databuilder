import React, { Component } from "react";
import Badgetip from "../common/badgetip";
import classnames from "classnames";
import {
  Col,
  Label,
  FormGroup,
  TabContent,
  TabPane,
  Input,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class HeroAwakening extends Component {
  state = {
    awakening: this.props.awakening,
    defaultAwakening: this.props.defaultAwakening,
    stats: this.props.stats,
    rarity: this.props.rarity,
    zodiac: this.props.zodiac,
    element: this.props.element,
    activeTab: 0
  };
  constructor(props) {
    super(props);
    this.update();
  }
  componentDidUpdate(prevProps) {
    const awakening = this.props.awakening,
      rarity = this.props.rarity,
      element = this.props.element,
      zodiac = this.props.zodiac;

    if (
      this.props.awakening !== prevProps.awakening ||
      this.props.rarity !== prevProps.rarity ||
      this.props.element !== prevProps.element ||
      this.props.zodiac !== prevProps.zodiac
    ) {
      this.update();
      this.setState({ awakening, rarity, element, zodiac });
    }
  }

  update = () => {
    const { awakening, awakeningCosts, rarity, element } = this.props;

    for (let i = 0; i < awakening.length; i++) {
      const defaultResources = awakeningCosts[rarity - 3][i];
      awakening[i]["resources"] = [...defaultResources];
      for (let j = 0; j < defaultResources.length; j++) {
        const resource = { ...defaultResources[j] };
        resource["item"] =
          resource["item"] === "rare" || resource["item"] === "epic"
            ? this.findZodiacResource(resource["item"])
            : resource["item"] + element + "-rune";
        awakening[i]["resources"][j] = resource;
      }
    }
  };

  /* Need a more elegant solution in the future...*/
  handleChange = (type, value, i, j) => {
    const awakening = [...this.state.awakening];
    const name = type.split(".");
    if (name[0] === "stats") {
      let newStat = {};
      newStat[value] = awakening[i]["statsIncrease"][j][name[1]];
      awakening[i]["statsIncrease"][j] = newStat;
    } else if (j >= 0) {
      awakening[i]["statsIncrease"][j][type] = this.convertPercent(value);
    } else {
      awakening[i][type] = value;
    }
    this.setState({ awakening });
  };

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

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  findZodiacResource(type) {
    const { resources, zodiac } = this.props;
    if (zodiac !== "") {
      const obj = resources.find(element => {
        return element.value === zodiac;
      });
      return type === "rare" ? obj.normalAwakening : obj.worldAwakening;
    }
    return "";
  }

  onBlur = (type, value, i, j) => {
    const awakening = [...this.state.awakening];
    const name = type.split(".");

    if (name[0] === "stats") {
      let newStat = {};
      newStat[value] = awakening[i]["statsIncrease"][j][name[1]];
      awakening[i]["statsIncrease"][j] = newStat;
    } else if (j >= 0) {
      awakening[i]["statsIncrease"][j][type] =
        value % 1 === 0 ? parseInt(value) : parseFloat(value);
    } else {
      awakening[i][type] = value;
    }

    this.setState({ awakening });
    this.props.onChange("awakening", this.state.awakening);
  };

  convertPercent(value) {
    if (isNaN(value) && value.indexOf("%") >= 0) {
      return parseFloat(parseFloat(value) / 100).toFixed(3);
    }
    return value;
  }

  render() {
    const { awakening, stats } = this.state;
    return (
      <React.Fragment>
        <Nav tabs>
          {awakening.map((awake, i) => (
            <NavItem key={i}>
              <NavLink
                className={classnames({ active: this.state.activeTab === i })}
                onClick={() => {
                  this.toggle(i);
                }}
              >
                Rank {i + 1}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          {awakening.map((awake, i) => (
            <TabPane key={i} tabId={i}>
              <Col md="12">
                <FormGroup row>
                  <Col md="12">
                    <Label>
                      statIncreases
                      <Badgetip
                        value="Percents are converted to decimal. Example: 5% -> 0.05"
                        id={"statIncrease-" + i}
                      />
                    </Label>
                  </Col>
                </FormGroup>

                {awake["statsIncrease"].map((increase, j) => (
                  <Col key={j} md="12">
                    <FormGroup className="inline-wrapper full">
                      {j !== 0 || i === 2 ? (
                        <Input
                          type="text"
                          bsSize="sm"
                          readOnly
                          name={"stats." + Object.keys(increase)}
                          placeholder="stat increase"
                          value={Object.keys(increase)}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />
                      ) : (
                        <Input
                          type="select"
                          bsSize="sm"
                          name={"stats." + Object.keys(increase)}
                          value={Object.keys(increase)[0]}
                          onBlur={e =>
                            this.onBlur(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        >
                          <option disabled value="">
                            Select stat
                          </option>
                          {stats.map((option, i) => (
                            <option key={i} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Input>
                      )}
                      <Input
                        type="text"
                        bsSize="sm"
                        readOnly={j !== 0 || i === 2}
                        name={Object.keys(increase)}
                        value={this.convertPercent(
                          increase[Object.keys(increase)]
                        )}
                        onBlur={e =>
                          this.onBlur(
                            e.currentTarget.name,
                            e.currentTarget.value,
                            i,
                            j
                          )
                        }
                        onChange={e =>
                          this.handleChange(
                            e.currentTarget.name,
                            e.currentTarget.value,
                            i,
                            j
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                ))}

                <Col md="12">
                  <Label>
                    resources
                    <Badgetip
                      value="Resources are automatically calculated based on the hero's element, rarity, and zodiac sign."
                      id={"awakeningResource-" + i}
                    />
                  </Label>
                </Col>

                {awake["resources"].map((resource, j) => (
                  <Col key={j} md="12">
                    <FormGroup className="inline-wrapper full">
                      <Input
                        type="text"
                        bsSize="sm"
                        name="item"
                        readOnly
                        placeholder="catalyst"
                        value={resource["item"]}
                      />
                      <Input
                        type="number"
                        bsSize="sm"
                        name="qty"
                        readOnly
                        value={resource["qty"]}
                      />
                    </FormGroup>
                  </Col>
                ))}
              </Col>
            </TabPane>
          ))}
        </TabContent>
      </React.Fragment>
    );
  }
}

export default HeroAwakening;
