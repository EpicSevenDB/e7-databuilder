import React, { Component } from "react";

import classnames from "classnames";
import {
  Col,
  Label,
  FormGroup,
  TabContent,
  TabPane,
  Input,
  Button,
  Nav,
  NavItem,
  NavLink,
  CustomInput
} from "reactstrap";

class HeroAwakening extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
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
    } else if (type !== "qty") {
      awakening[i]["statsIncrease"][j][type] = value;
    } else if (j >= 0) {
      awakening[i]["resources"][j][type] = value;
    } else {
      awakening[i][type] = value;
    }
    console.info("NEW VALUEZ: ", awakening[i]["statsIncrease"][j]);
    this.props.onChange("awakening", awakening);
  };
  handleDelete = (type, i, j) => {
    const awakening = [...this.props.awakening];
    awakening[i][type] = [
      ...awakening[i][type].slice(0, j),
      ...awakening[i][type].slice(j + 1)
    ];
    console.info("DELETING STATS: ", awakening);
    this.props.onChange("awakening", awakening);
  };
  handleAdd = (type, i) => {
    const awakening = [...this.props.awakening];
    let newObj = {};
    if (type === "statsIncrease") {
      newObj = { "": "" };
    } else {
      newObj = { item: "", qty: "" };
    }
    awakening[i][type] = [...awakening[i][type], newObj];
    this.props.onChange("awakening", awakening);
  };
  render() {
    const { awakening, onChange } = this.props;

    return (
      <React.Fragment>
        <Col md="12">
          <Label>awakening</Label>
        </Col>
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
                  <CustomInput
                    id={"skillUpgrade-" + i} //Id needs to be unique when using customInput
                    type="checkbox"
                    name="skillUpgrade"
                    label="skillUpgrade"
                    checked={awake.skillUpgrade}
                    onChange={e =>
                      this.handleChange(
                        e.currentTarget.name,
                        e.currentTarget.checked,
                        i
                      )
                    }
                  />
                  <Col md="12">
                    <Label>statIncreases</Label>
                  </Col>
                  {awake.statsIncrease.map((increase, j) => (
                    <Col key={j} md="12" className="resource-wrapper">
                      <FormGroup className="inline-wrapper">
                        <Input
                          type="text"
                          bsSize="sm"
                          name={"stats." + Object.keys(increase)}
                          placeholder="resource item"
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
                        <Input
                          type="text"
                          bsSize="sm"
                          name={Object.keys(increase)}
                          value={increase[Object.keys(increase)]}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />

                        <Button
                          size="sm"
                          color="danger"
                          tabIndex="-1"
                          onClick={e =>
                            this.handleDelete("statsIncrease", i, j)
                          }
                        >
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}
                  <Col
                    className={
                      awake.statsIncrease.length >= 3 ||
                      (awake.skillUpgrade && awake.statsIncrease.length >= 2)
                        ? "hidden"
                        : ""
                    }
                  >
                    <Button
                      className="gutter-top"
                      color="secondary"
                      block
                      size="sm"
                      outline
                      className="gutter-top btn-add"
                      onClick={e => this.handleAdd("statsIncrease", i)}
                    >
                      Add new stat
                    </Button>
                  </Col>

                  <Col md="12">
                    <Label>resources</Label>
                  </Col>
                  {awake.resources.map((resource, j) => (
                    <Col key={j} md="12" className="resource-wrapper">
                      <FormGroup className="inline-wrapper">
                        <Input
                          type="text"
                          bsSize="sm"
                          name="item"
                          placeholder="resource item"
                          value={resource.item}
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
                          value={resource.qty}
                          onChange={e =>
                            this.handleChange(
                              e.currentTarget.name,
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />

                        <Button
                          size="sm"
                          color="danger"
                          tabIndex="-1"
                          onClick={e => this.handleDelete("resources", i, j)}
                        >
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}
                  <Col className={awake.resources.length >= 3 ? "hidden" : ""}>
                    <Button
                      className="gutter-top"
                      color="secondary"
                      block
                      size="sm"
                      outline
                      className="gutter-top btn-add"
                      onClick={e => this.handleAdd("resources", i)}
                    >
                      Add new resource
                    </Button>
                  </Col>
                </FormGroup>
              </Col>
            </TabPane>
          ))}
        </TabContent>
      </React.Fragment>
    );
  }
}

export default HeroAwakening;
