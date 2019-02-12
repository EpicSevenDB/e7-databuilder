import React, { Component } from "react";
import classnames from "classnames";
import EpicInput from "../common/epic-input";
import { Col, FormGroup, Label, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

class HeroStats extends Component {
    state = {
        activeTab: 0
    };
    handleChange = (name, value) => {
        const stats = { ...this.props.stats };
        const names = name.split("."); //Split the nested object name
        stats[names[0]][names[1]] = value;
        this.props.onChange("stats", stats);
    };

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        const { stats } = this.props;
        console.info(stats);
        return (
            <React.Fragment>
                <Col md="12">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 0 })}
                                onClick={() => {
                                    this.toggle(0);
                                }}
                            >
                                Level 1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 1 })}
                                onClick={() => {
                                    this.toggle(1);
                                }}
                            >
                                Level 50
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 2 })}
                                onClick={() => {
                                    this.toggle(2);
                                }}
                            >
                                Level 60
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 3 })}
                                onClick={() => {
                                    this.toggle(3);
                                }}
                            >
                                Level 60 (Fully Awaken)
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId={0}>
                            <Col md="12">
                                <Label>Level 1 Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        size="20"
                                        name="base.cp"
                                        value={stats.base.cp}
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.atk"
                                        value={stats.base.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.hp"
                                        value={stats.base.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.spd"
                                        value={stats.base.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.def"
                                        value={stats.base.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.chc"
                                        value={stats.base.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.chd"
                                        value={stats.base.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.eff"
                                        value={stats.base.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.efr"
                                        value={stats.base.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="base.dac"
                                        value={stats.base.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>
                        <TabPane tabId={1}>
                            <Col md="12">
                                <Label>Level 50 Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        size="20"
                                        name="max5.cp"
                                        value={stats.max5.cp}
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.atk"
                                        value={stats.max5.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.hp"
                                        value={stats.max5.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.spd"
                                        value={stats.max5.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.def"
                                        value={stats.max5.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.chc"
                                        value={stats.max5.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.chd"
                                        value={stats.max5.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.eff"
                                        value={stats.max5.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.efr"
                                        value={stats.max5.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max5.dac"
                                        value={stats.max5.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>
                        <TabPane tabId={2}>
                            <Col md="12">
                                <Label>Level 60 Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        size="20"
                                        name="max6.cp"
                                        value={stats.max6.cp}
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.atk"
                                        value={stats.max6.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.hp"
                                        value={stats.max6.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.spd"
                                        value={stats.max6.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.def"
                                        value={stats.max6.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.chc"
                                        value={stats.max6.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.chd"
                                        value={stats.max6.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.eff"
                                        value={stats.max6.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.efr"
                                        value={stats.max6.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max6.dac"
                                        value={stats.max6.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>

                        <TabPane tabId={3}>
                            <Col md="12">
                                <Label>Level 60 (Fully Awaken) Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.cp"
                                        value={stats.max.cp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.atk"
                                        value={stats.max.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.hp"
                                        value={stats.max.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.spd"
                                        value={stats.max.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.def"
                                        value={stats.max.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.chc"
                                        value={stats.max.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.chd"
                                        value={stats.max.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.eff"
                                        value={stats.max.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.efr"
                                        value={stats.max.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="max.dac"
                                        value={stats.max.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>
                    </TabContent>
                </Col>
            </React.Fragment>
        );
    }
}

export default HeroStats;
