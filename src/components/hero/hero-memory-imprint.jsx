import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, CustomInput, FormGroup, Button } from "reactstrap";
import BadgeTip from "../common/badgetip";

class HeroMemoryImprint extends Component {
    state = {
        memoryImprint: this.props.memoryImprint,
        memoryImprintFormation: this.props.memoryImprintFormation
    };

    componentDidUpdate(prevProps) {
        const memoryImprint = [...this.props.memoryImprint];

        if (
            this.props.memoryImprint !== prevProps.memoryImprint &&
            this.props.memoryImprintFormation !== prevProps.memoryImprintFormation
        ) {
            if (this.props.memoryImprintFormation) {
                const memoryImprintFormation = { ...this.props.memoryImprintFormation };
                this.setState({ memoryImprint, memoryImprintFormation });
            } else {
                const memoryImprintFormation = {
                    ...this.props.defaultMemoryImprintFormation
                };
                this.setState({ memoryImprint, memoryImprintFormation });
            }
        }
    }

    onFormationBlur = () => {
        this.props.onChange("memoryImprintFormation", this.state.memoryImprintFormation);
    };

    onAutoCalculate = () => {
        const memoryImprint = [...this.state.memoryImprint];
        let base = { value: 0, index: 0 };
        let baseFound = false;
        for (let i = 0; i < memoryImprint.length; i++) {
            if (
                (memoryImprint[i].status.increase === 0 || memoryImprint[i].status.increase === "") &&
                baseFound === false
            ) {
                continue;
            } else if (baseFound === false) {
                base.value = parseFloat(memoryImprint[i].status.increase);
                base.index = i;
                baseFound = true;
                memoryImprint[i].status.increase = base.value;
            } else {
                const tmp = parseFloat((base.value + base.value * 0.5 * (i - base.index)).toFixed(3));
                memoryImprint[i].status.increase = tmp;
            }
        }
        this.setState({ memoryImprint });
    };

    handleChange = (name, value, i) => {
        const memoryImprint = [...this.state.memoryImprint];
        const memoryImprintFormation = { ...this.state.memoryImprintFormation };
        if (name === "formationType") {
            memoryImprint.map(imprint => (imprint.status.type = value));
        } else if (name === "north" || name === "south" || name === "east" || name === "west") {
            memoryImprintFormation[name] = value;
            this.setState({ memoryImprintFormation });
        } else {
            memoryImprint[i].status.increase = parseFloat(value);
        }
        this.props.onChange("memoryImprint", this.state.memoryImprint);
    };

    render() {
        const { memoryImprint, memoryImprintFormation } = this.state;
        const { defaultMemoryImprintFormation, stats } = this.props;
        return (
            <React.Fragment>
                <EpicInput
                    size="12"
                    type="select"
                    name="formationType"
                    id="memoryImprint"
                    value={memoryImprint[0].status.type}
                    options={stats}
                    onChange={this.handleChange}
                />

                <Col md="12">
                    <label>
                        memoryImprintFormation
                        <BadgeTip
                            value="The highlighted squares next to a hero's memory imprint"
                            id="memoryImprintFormation"
                        />
                    </label>
                    <FormGroup row>
                        {Object.keys(defaultMemoryImprintFormation).map((formation, i) => (
                            <Col key={i}>
                                <CustomInput
                                    id={"memoryImprintFormation-" + i}
                                    type="checkbox"
                                    name={Object.keys(defaultMemoryImprintFormation)[i]}
                                    label={Object.keys(defaultMemoryImprintFormation)[i]}
                                    checked={memoryImprintFormation[Object.keys(defaultMemoryImprintFormation)[i]]}
                                    onChange={e => this.handleChange(e.currentTarget.name, e.currentTarget.checked)}
                                    onBlur={this.onFormationBlur}
                                />
                            </Col>
                        ))}
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup row>
                        {memoryImprint.map((imprint, i) => (
                            <EpicInput
                                key={i}
                                size="3"
                                type="text"
                                id={"memoryImprintValue-" + i}
                                name={"Rank " + imprint.rank}
                                value={imprint.status.increase}
                                index={i}
                                onChange={this.handleChange}
                                hasPercent={true}
                            />
                        ))}
                    </FormGroup>
                </Col>
                <Col md="9">
                    <small>
                        Due to some inconsistent rounding on game's values, please double check the auto-calculated
                        values and adjust accordingly.
                    </small>
                </Col>
                <Col md="3">
                    <Button size="sm" block color="success" onClick={this.onAutoCalculate}>
                        Auto-Calculate
                    </Button>
                </Col>
            </React.Fragment>
        );
    }
}

export default HeroMemoryImprint;
