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
    rarity: this.props.rarity,
    zodiac: this.props.zodiac,
    element: this.props.element,
    activeTab: 0
  };

  componentDidUpdate(prevProps) {
    const awakening = [...this.props.awakening];
    const rarity = this.props.rarity;
    const element = this.props.element;
    const zodiac = this.props.zodiac;

    if (
      this.props.awakening !== prevProps.awakening ||
      this.props.rarity !== prevProps.rarity ||
      this.props.element !== prevProps.element ||
      this.props.zodiac !== prevProps.zodiac
    ) {
      this.setState({ awakening, rarity, element, zodiac });
    }
  }

  /* Need a more elegant solution in the future...*/
  handleChange = (type, value, i, j) => {
    const awakening = [...this.props.awakening];
    const name = type.split(".");
    if (name[0] === "stats") {
      let newStat = {};
      newStat[value] = awakening[i]["statsIncrease"][j][name[1]];
      awakening[i]["statsIncrease"][j] = newStat;
    } else if (type === "item" || type === "qty") {
      awakening[i]["resources"][j][type] = this.friendlyString(value);
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

  awakeningMaterial(rank, index) {
    const { awakeningCosts, rarity, element, zodiac } = this.props;
    if (rarity !== "" && element !== "" && zodiac !== "") {
      if (rank >= 4 && index > 0) {
        return this.findZodiacResource(zodiac, rank);
      } else {
        return (
          awakeningCosts[rarity - 3][rank][index]["prefix"] + element + "-rune"
        );
      }
    }
    return "";
  }

  findZodiacResource(zodiac, rank) {
    if (zodiac !== "") {
      const { resources } = this.props;
      const obj = resources.find(element => {
        return element.value === zodiac;
      });
      return rank === 4 ? obj.normalAwakening : obj.worldAwakening;
    }
    return "";
  }
  onBlur = () => {
    this.props.onChange("awakening", this.state.awakening);
  };

  convertPercent(value) {
    if (isNaN(value)) {
      if (value.indexOf("%") >= 0) {
        return parseFloat(value) / 100;
      }
    }
    return value;
  }

  render() {
    const { awakening, rarity } = this.state;
    const { awakeningCosts, stats } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          {awakeningCosts[rarity - 3].map((awake, i) => (
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
          {awakeningCosts[rarity - 3].map((awakeningCost, i) => (
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

                {awakening[i].statsIncrease.map((increase, j) => (
                  <Col key={j} md="12">
                    <FormGroup className="inline-wrapper awakening">
                      {j !== 0 || i === 2 ? (
                        <Input
                          type="text"
                          bsSize="sm"
                          readOnly
                          name={"stats." + Object.keys(increase)}
                          placeholder="stat increase"
                          value={Object.keys(increase)}
                          onBlur={this.onBlur}
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
                          onBlur={this.onBlur}
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
                        onBlur={this.onBlur}
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

                {awakeningCost.map((resource, j) => (
                  <Col key={j} md="12">
                    <FormGroup className="inline-wrapper awakening">
                      <Input
                        type="text"
                        bsSize="sm"
                        name="item"
                        readOnly
                        placeholder="resource item"
                        value={this.awakeningMaterial(i, j)}
                        onBlur={this.onBlur}
                        onChange={e =>
                          this.handleChange(
                            e.currentTarget.name,
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
                        readOnly
                        value={resource["qty"]}
                        onBlur={this.onBlur}
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
              </Col>
            </TabPane>
          ))}
        </TabContent>
      </React.Fragment>
    );
  }
}

export default HeroAwakening;
