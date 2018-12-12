import React, { Component } from "react";
import classnames from "classnames";
import EpicInput from "../common/epic-input";
import {
  Col,
  FormGroup,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Label,
  Input
} from "reactstrap";

class HeroSkillEnhancements extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }
  handleAdd = (type, i) => {
    if (type === "resources") {
      const newResource = { item: "", qty: "" };
      const enhancements = [...this.props.enhancements];
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"],
        newResource
      ];
      this.props.onAdd("enhancement", enhancements, this.props.index);
    } else {
      const newEnhancement = {
        description: "",
        resources: [
          { item: "gold", qty: "" },
          { item: "", qty: "" },
          { item: "", qty: "" }
        ]
      };
      const enhancements = [...this.props.enhancements, newEnhancement];
      this.props.onAdd("enhancement", enhancements, this.props.index);
      this.toggle(enhancements.length - 1);
    }
  };
  handleChange = (type, value, i, j) => {
    const enhancements = [...this.props.enhancements];
    if (j !== undefined) {
      enhancements[i]["resources"][j][type] = value;
    } else {
      enhancements[i][type] = value;
    }
    this.props.onChange("enhancement", enhancements, this.props.index);
  };
  handleDelete = (type, i, j) => {
    if (type === "resources") {
      const enhancements = [...this.props.enhancements];
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"].slice(0, j),
        ...enhancements[i]["resources"].slice(j + 1)
      ];
      this.props.onChange("enhancement", enhancements, this.props.index);
    } else {
      const enhancements = [
        ...this.props.enhancements.slice(0, i),
        ...this.props.enhancements.slice(i + 1)
      ];
      this.props.onChange("enhancement", enhancements, this.props.index);
      if (i === enhancements.length) {
        this.toggle(enhancements.length - 1);
      } else {
        this.toggle(i);
      }
    }
  };
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { enhancements, index } = this.props;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>enhancements</Label>
          <Nav tabs className="small-tabs">
            <NavItem>
              <NavLink
                className="add-link"
                onClick={e => this.handleAdd("enhancements", index)}
              >
                Add
              </NavLink>
            </NavItem>
            {enhancements.map((enhancement, i) => (
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
              <TabPane key={"description-" + i + "-" + index} tabId={i}>
                <FormGroup row>
                  <Col offset="12">
                    <Button
                      size="sm"
                      color="danger"
                      onClick={e => this.handleDelete("enhancements", i)}
                    >
                      Delete
                    </Button>
                  </Col>
                  <EpicInput
                    type="text"
                    size="12"
                    name="description"
                    index={i}
                    value={enhancement.description}
                    onChange={this.handleChange}
                  />
                  <Col>
                    <Label>resources</Label>
                  </Col>
                  {enhancement.resources.map((resource, j) => (
                    <Col
                      key={"resources-" + j + "-" + index}
                      md="12"
                      className="resource-wrapper"
                    >
                      <FormGroup className="inline-wrapper">
                        <Input
                          type="text"
                          bsSize="sm"
                          name="item"
                          placeholder="resource item"
                          index={i}
                          index2={j}
                          value={resource.item}
                          onChange={e =>
                            this.handleChange(
                              "item",
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
                          index={i}
                          index2={j}
                          value={resource.qty}
                          onChange={e =>
                            this.handleChange(
                              "qty",
                              e.currentTarget.value,
                              i,
                              j
                            )
                          }
                        />

                        <Button
                          size="sm"
                          color="danger"
                          onClick={e => this.handleDelete("resources", i, j)}
                        >
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}
                  <Col>
                    <Button
                      onClick={e => this.handleAdd("resources", i)}
                      color="secondary"
                      outline
                      block
                      size="sm"
                      className="gutter-top btn-add"
                    >
                      Add new resource
                    </Button>
                  </Col>
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
