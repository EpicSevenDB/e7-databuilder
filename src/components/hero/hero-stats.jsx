import React, { Component } from "react";
import classnames from "classnames";
import EpicInput from "../common/epic-input";
import { Col, FormGroup, Label, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

class HeroStats extends Component {
    state = {
        activeTab: 0
    };
    handleChange = (name, value, index) => {
        const stats = { ...this.props.stats };
        stats[index][name] = value;
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
                                Level 50 (Awaken)
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 3 })}
                                onClick={() => {
                                    this.toggle(3);
                                }}
                            >
                                Level 60
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === 4 })}
                                onClick={() => {
                                    this.toggle(4);
                                }}
                            >
                                Level 60 (Awaken)
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
                                        name="cp"
                                        value={stats.lv1BaseStarNoAwaken.cp}
                                        index="lv1BaseStarNoAwaken"
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="atk"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="hp"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="spd"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="def"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chc"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chd"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="eff"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="efr"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="dac"
                                        index="lv1BaseStarNoAwaken"
                                        value={stats.lv1BaseStarNoAwaken.dac}
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
                                        name="cp"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.cp}
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="atk"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="hp"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="spd"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="def"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chc"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chd"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="eff"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="efr"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="dac"
                                        index="lv50FiveStarNoAwaken"
                                        value={stats.lv50FiveStarNoAwaken.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>
                        <TabPane tabId={2}>
                            <Col md="12">
                                <Label>Level 50 (Awaken) Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        size="20"
                                        name="cp"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.cp}
                                        onChange={this.handleChange}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="atk"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="hp"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="spd"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="def"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chc"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chd"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="eff"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="efr"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="dac"
                                        index="lv50FiveStarFullyAwakened"
                                        value={stats.lv50FiveStarFullyAwakened.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>

                        <TabPane tabId={3}>
                            <Col md="12">
                                <Label>Level 60 Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="cp"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.cp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="atk"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="hp"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="spd"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="def"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chc"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chd"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="eff"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="efr"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="dac"
                                        index="lv60SixStarNoAwaken"
                                        value={stats.lv60SixStarNoAwaken.dac}
                                    />
                                </FormGroup>
                            </Col>
                        </TabPane>
                        <TabPane tabId={4}>
                            <Col md="12">
                                <Label>Level 60 (Awaken) Stats</Label>
                                <FormGroup row>
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="cp"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.cp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="atk"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.atk}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="hp"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.hp}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="spd"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.spd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="def"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.def}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chc"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.chc}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="chd"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.chd}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="eff"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.eff}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="efr"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.efr}
                                    />
                                    <EpicInput
                                        type="number"
                                        onChange={this.handleChange}
                                        size="20"
                                        name="dac"
                                        index="lv60SixStarFullyAwakened"
                                        value={stats.lv60SixStarFullyAwakened.dac}
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
