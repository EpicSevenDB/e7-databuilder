import React, { Component } from "react";
import classnames from "classnames";
import EpicInput from "../common/epic-input";
import {
  Col,
  FormGroup,
  Button,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Label
} from "reactstrap";

class HeroSkillEnhancements extends Component {
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
  render() {
    const { enhancements } = this.props;
    console.info(enhancements);
    return (
      <React.Fragment>
        <Col md="12">
          <Label>enhancements</Label>
          <Nav tabs>
            {enhancements.map((enhacement, i) => (
              <NavItem key={i}>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === i
                  })}
                  onClick={() => {
                    this.toggle(i);
                  }}
                >
                  +{i + 1}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col md="12">
          <TabContent activeTab={this.state.activeTab}>
            {enhancements.map((enhancement, i) => (
              <TabPane key={i} tabId={i}>
                <FormGroup row>
                  <EpicInput
                    type="text"
                    size="12"
                    name="description"
                    value={enhancement.description}
                  />
                  <Col>
                    <Label>resources</Label>
                  </Col>
                  {enhancement.resources.map((resource, i) => (
                    <Col md="12" className="resource-wrapper">
                      <FormGroup row>
                        <EpicInput
                          type="text"
                          size="8"
                          name="item"
                          noLabel="true"
                          value={resource.item}
                        />
                        <EpicInput
                          size="3"
                          type="number"
                          name="qty"
                          noLabel="true"
                          value={resource.qty}
                        />
                        <Col md="1">
                          <Button
                            size="sm"
                            color="danger"
                            onClick={e => this.handleDelete(i)}
                          >
                            X
                          </Button>
                        </Col>
                      </FormGroup>
                    </Col>
                  ))}
                </FormGroup>
              </TabPane>
            ))}
          </TabContent>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroSkillEnhancements;
