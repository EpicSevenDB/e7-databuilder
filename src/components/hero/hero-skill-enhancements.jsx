import React, { Component } from "react";
import Badgetip from "../common/badgetip";

import { Col, FormGroup, Label, Input, InputGroupAddon, InputGroup } from "reactstrap";

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
        const { skill } = this.props;
        if (
            (this.props.zodiac !== prevProps.zodiac || this.props.rarity !== prevProps.rarity) &&
            skill["name"] !== ""
        ) {
            this.handleMaxLevel(this.props.enhancement.length);
        } else if (this.checkDifference(prevProps.enhancement, this.props.enhancement) && skill !== "") {
            this.handleMaxLevel(this.props.enhancement.length);
        }
    }

    checkDifference(oldEnhancement, newEnhancement) {
        if (oldEnhancement.length !== newEnhancement.length) {
            return true;
        }
        for (let i = 0; i < newEnhancement.length; i++) {
            if (oldEnhancement[i]["description"] !== newEnhancement[i]["description"]) {
                return true;
            }
        }
        return false;
    }

    handleUpdate = value => {
        let { enhanceCosts, rarity } = this.props;
        let enhancement = [...this.props.enhancement];
        let maxLevel = value;

        enhancement.splice(maxLevel, enhancement.length - maxLevel);

        for (let i = 0; i < maxLevel; i++) {
            let newEnhancement = { description: "", resources: [] };
            newEnhancement["description"] = enhancement[i] !== undefined ? enhancement[i]["description"] : "";
            newEnhancement["resources"] = this.handleZodiac(enhanceCosts[rarity - 3][maxLevel - 1][i]);
            enhancement[i] = newEnhancement;
        }
        return enhancement;
    };

    handleUpdate = value => {
        let { enhanceCosts, rarity } = this.props;
        let enhancement = [...this.props.enhancement];
        let maxLevel = value;
        enhancement.splice(maxLevel, enhancement.length - maxLevel);

        for (let i = 0; i < maxLevel; i++) {
            let newEnhancement = { description: "", resources: [] };
            newEnhancement["description"] = enhancement[i] !== undefined ? enhancement[i]["description"] : "";
            newEnhancement["resources"] = this.handleZodiac(enhanceCosts[rarity - 3][maxLevel - 1][i], i, maxLevel);
            enhancement[i] = newEnhancement;
        }

        return enhancement;
    };

    handleZodiac = (resources, enhanceIndex, maxLevel) => {
        const { zodiac, defaultZodiacs, rarity } = this.props;
        for (let i = 0; i < resources.length; i++) {
            if (zodiac !== undefined && zodiac !== "") {
                const zodiacObj = defaultZodiacs.find(element => {
                    return element.value === zodiac;
                });
                const item = resources[i]["item"];
                if (item !== "molagora" && item !== "molagorago" && item !== "gold") {
                    if (rarity === 3) {
                        resources[i]["item"] = zodiacObj.normalSkill; //It will always use a normal skill catalyst when it's a 3*
                    } else if (enhanceIndex < maxLevel - 1) {
                        resources[i]["item"] = zodiacObj.normalSkill;
                    } else {
                        resources[i]["item"] = zodiacObj.worldSkill;
                    }
                }
            }
        }
        return resources;
    };

    handleChange(name, value, index, index2) {
        const enhancement = [...this.state.enhancement];
        enhancement[index2]["description"] = value;
        this.setState({ enhancement });
    }

    handleMaxLevel = value => {
        const enhancement = this.handleUpdate(value);
        this.setState({ enhancement });
        this.props.onChange("enhancement", enhancement, this.state.index);
    };

    onBlur = () => {
        this.props.onChange("enhancement", this.state.enhancement, this.state.index);
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
                                <InputGroupAddon addonType="prepend">{"+" + (i + 1)}</InputGroupAddon>
                                <Input
                                    bsSize="sm"
                                    name="skillEnhancement"
                                    placeholder={"Increase damage by 5%"}
                                    value={enhancement[i] !== undefined ? enhancement[i]["description"] : ""}
                                    onBlur={this.onBlur}
                                    onChange={e =>
                                        this.handleChange(e.currentTarget.name, e.currentTarget.value, index, i)
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
