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
  InputGroupAddon,
  InputGroup,
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
    } else {
      awakening[i]["statsIncrease"][j][type] = this.convertPercent(value);
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
    console.info(awakening);
    return (
      <React.Fragment>
        <label>awakening</label>
        {awakening.map((increase, i) => (
          <FormGroup key={i} className="inline-wrapper full">
            {i !== 2 ? (
              <React.Fragment>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    {"Rank " + (i + 1)}
                  </InputGroupAddon>
                  <Input
                    type="select"
                    bsSize="sm"
                    name={"stats." + Object.keys(increase["statsIncrease"][0])}
                    value={Object.keys(increase["statsIncrease"][0])}
                    onBlur={e =>
                      this.onBlur(
                        e.currentTarget.name,
                        e.currentTarget.value,
                        i,
                        0
                      )
                    }
                    onChange={e =>
                      this.handleChange(
                        e.currentTarget.name,
                        e.currentTarget.value,
                        i,
                        0
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
                </InputGroup>

                <Input
                  type="text"
                  bsSize="sm"
                  name={Object.keys(increase["statsIncrease"][0])}
                  value={
                    increase["statsIncrease"][0][
                      Object.keys(increase["statsIncrease"][0])
                    ]
                  }
                  onBlur={e =>
                    this.onBlur(
                      e.currentTarget.name,
                      e.currentTarget.value,
                      i,
                      0
                    )
                  }
                  onChange={e =>
                    this.handleChange(
                      e.currentTarget.name,
                      e.currentTarget.value,
                      i,
                      0
                    )
                  }
                />
              </React.Fragment>
            ) : null}
          </FormGroup>
        ))}
      </React.Fragment>
    );
  }
}

export default HeroAwakening;
