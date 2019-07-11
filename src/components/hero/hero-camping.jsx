import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, FormGroup } from "reactstrap";

class HeroCamping extends Component {
    state = {
    };
    
    handleChange = (name, value, index) => {
        const camping = { ...this.props.camping };
	if (name === "Option 1") {
            camping.options[0] = value;
	} else if (name === "Option 2") {
            camping.options[1] = value;
	} else {
            camping.reactions[name] = value;
	}
        this.props.onChange("camping", camping);
    };
    render() {
        const { camping } = this.props;
        const { campOpts } = this.props;
        return (
            <React.Fragment>
	      {/* Get first camping option, drop down selection. */}
              <EpicInput
                    size="12"
                    type="select"
                    name="Option 1"
                    id="option1"
                    value={camping.options[0]}
                    options={campOpts}
                    onChange={this.handleChange}
                />
	      {/* Get second camping option, drop down selection. */}
              <EpicInput
                    size="12"
                    type="select"
                    name="Option 2"
                    id="option2"
                    value={camping.options[1]}
                    options={campOpts}
                    onChange={this.handleChange}
                />
	      {/* Get second camping option, drop down selection. */}
              <Col md="12">
                <FormGroup row>
                  {campOpts.map((reaction, i) => (
		      <EpicInput
                        key={i}
                        size="3"
                        type="text"
                        id={campOpts[i]}
                        name={reaction.value}
                        value={camping.reactions[reaction.value]}
                        index={i}
                        onChange={this.handleChange}
                        hasPercent={false}
                        />
                  ))}
                </FormGroup>
                </Col>
            </React.Fragment>
        );
    }
}

export default HeroCamping;
