import React, { Component } from "react";
import Badgetip from "../common/badgetip";
import EpicInput from "../common/epic-input";

import {
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup
} from "reactstrap";

class HeroSkillEnhancements extends Component {
  state = {
    enhancement: this.props.enhancement,
    index: this.props.index,
    rarity: this.props.rarity,
    zodiac: this.props.zodiac,
    enhanceCosts: this.props.enhanceCosts,
    maxLevel: this.props.enhancement.length
  };

  componentDidUpdate(prevProps) {
    const zodiac = this.props.zodiac;
    const rarity = this.props.rarity;
    const enhancement = this.props.enhancement;
    if (this.props.enhancement.length !== prevProps.enhancement.length) {
      this.handleMaxLevel(this.props.enhancement.length);
    } else if (
      this.props.zodiac !== prevProps.zodiac ||
      this.props.rarity !== prevProps.rarity
    ) {
      const newEnhancement = this.handleUpdate(this.props.enhancement.length);
      this.setState({ enhancement: newEnhancement });
    }
  }

  handleUpdate = value => {
    let { enhanceCosts, rarity, zodiac } = this.props;
    let enhancement = [...this.props.enhancement];
    let maxLevel = value;

    console.info("OBJ:", enhancement);
    enhancement.splice(maxLevel, enhancement.length - maxLevel);

    for (let i = 0; i < maxLevel; i++) {
      let newEnhancement = { description: "", resources: [] };
      newEnhancement["description"] =
        enhancement[i] !== undefined ? enhancement[i]["description"] : "";
      newEnhancement["resources"] = enhanceCosts[rarity - 3][maxLevel - 1][i];
      enhancement[i] = newEnhancement;
    }
    return enhancement;
  };

  handleChange(name, value, index, index2) {
    const enhancement = [...this.state.enhancement];
    enhancement[index2]["description"] = value;
    this.setState({ enhancement });
    console.info(enhancement[index2]);
  }

  handleMaxLevel = value => {
    const enhancement = this.handleUpdate(value);
    console.info("DIS IS IT", enhancement);
    this.setState({ enhancement });
    this.props.onChange("enhancement", enhancement, this.state.index);
  };

  onBlur = () => {
    this.props.onChange(
      "enhancement",
      this.state.enhancement,
      this.state.index
    );
  };

  render() {
    const { index, enhancement } = this.state;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>
            enhancements
            <Badgetip
              value="Fill up to the required enhancement levels and leave the rest empty"
              id={"enhancementCosts-" + index}
            />
          </Label>

          <Input
            type="select"
            name="maxLevel"
            className="gutter-bottom"
            bsSize="sm"
            onChange={e => this.handleMaxLevel(e.currentTarget.value)}
            value={enhancement.length}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </Input>
          {enhancement.map((c, i) => (
            <FormGroup key={i} className="inner-wrap gutter-bottom-sm">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  {"+" + (i + 1)}
                </InputGroupAddon>
                <Input
                  bsSize="sm"
                  name="skillEnhancement"
                  placeholder={"Increase damage by 5%"}
                  value={
                    enhancement[i] !== undefined
                      ? enhancement[i]["description"]
                      : ""
                  }
                  onBlur={this.onBlur}
                  onChange={e =>
                    this.handleChange(
                      e.currentTarget.name,
                      e.currentTarget.value,
                      index,
                      i
                    )
                  }
                />
              </InputGroup>
            </FormGroup>
          ))}
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroSkillEnhancements;
