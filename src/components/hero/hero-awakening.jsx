import React, { Component } from "react";
import EpicInput from "../common/epic-input";
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
  handleChange = (name, value, i) => {
    console.info("Change is happening");
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
                          name="item"
                          placeholder="resource item"
                          index={j}
                          value={Object.keys(increase)}
                        />
                        <Input
                          type="text"
                          bsSize="sm"
                          name="qty"
                          index={j}
                          value={increase[Object.keys(increase)]}
                        />

                        <Button size="sm" color="danger">
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}

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
                          index={j}
                          value={resource.item}
                        />
                        <Input
                          type="number"
                          bsSize="sm"
                          name="qty"
                          index={j}
                          value={resource.qty}
                        />

                        <Button size="sm" color="danger">
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}
                  <Col>
                    <Button
                      className="gutter-top"
                      color="secondary"
                      block
                      size="sm"
                      outline
                      className="gutter-top btn-add"
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
