import React, { Component } from "react";
import classnames from "classnames";
import Badgetip from "../common/badgetip";
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
  state = {
    enhancements: this.props.enhancements,
    activeTab: 0
  };

  componentDidUpdate(prevProps) {
    const enhancements = [...this.props.enhancements];
    if (this.props.enhancements !== prevProps.enhancements) {
      this.setState({ enhancements });
    }
    console.info("Hello");
  }

  handleAdd = (type, i) => {
    let enhancements = [...this.state.enhancements];
    if (type === "resources") {
      const newResource = { item: "", qty: "" };
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"],
        newResource
      ];
    } else {
      const newEnhancement = {
        description: "",
        resources: [{ item: "gold", qty: "" }, { item: "", qty: "" }]
      };
      enhancements = [...enhancements, newEnhancement];
      this.toggle(enhancements.length - 1);
    }
    this.setState({ enhancements });
  };
  handleChange = (type, value, i, j) => {
    const enhancements = [...this.state.enhancements];
    if (j !== undefined) {
      enhancements[i]["resources"][j][type] = value;
    } else {
      enhancements[i][type] = value;
    }
    this.setState({ enhancements });
  };
  handleDelete = (type, i, j) => {
    let enhancements = [...this.state.enhancements];
    if (type === "resources") {
      enhancements[i]["resources"] = [
        ...enhancements[i]["resources"].slice(0, j),
        ...enhancements[i]["resources"].slice(j + 1)
      ];
    } else {
      enhancements = [
        ...enhancements.slice(0, i),
        ...enhancements.slice(i + 1)
      ];
      if (i === enhancements.length) {
        this.toggle(enhancements.length - 1);
      } else {
        this.toggle(i);
      }
    }
    this.props.onChange("enhancement", enhancements, this.props.index);
  };

  onBlur = () => {
    this.props.onChange(
      "enhancement",
      this.state.enhancements,
      this.props.index
    );
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    const { index } = this.props;
    const { enhancements } = this.state;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>enhancements</Label>
          <Nav tabs className="small-tabs">
            <NavItem className={enhancements.length >= 10 ? "hidden" : ""}>
              <Button
                className="add-link"
                size="sm"
                onClick={e => this.handleAdd("enhancement", index)}
                onBlur={this.onBlur}
              >
                Add
              </Button>
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
                      className={i !== 0 ? "pull-right" : "pull-right stealth"}
                      color="danger"
                      tabIndex="-1"
                      onClick={e => this.handleDelete("enhancement", i)}
                      onBlur={this.onBlur}
                    >
                      Delete
                    </Button>
                  </Col>
                  <EpicInput
                    type="text"
                    size="12"
                    name="description"
                    tooltip="Example: +5% damage dealt"
                    id={"description-" + index + "-" + i}
                    index={i}
                    value={enhancement.description}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                  />
                  <Col>
                    <Label>
                      resources{" "}
                      <Badgetip
                        value={"Example: twisted-fang"}
                        id={"resources" + index + "-" + i}
                      />
                    </Label>
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
                          onBlur={this.onBlur}
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
                          onBlur={this.onBlur}
                        />

                        <Button
                          size="sm"
                          color="danger"
                          tabIndex="-1"
                          onClick={e => this.handleDelete("resources", i, j)}
                          onBlur={this.onBlur}
                        >
                          X
                        </Button>
                      </FormGroup>
                    </Col>
                  ))}
                  <Col
                    md="12"
                    className={
                      enhancement.resources.length >= 3 ? "hidden" : ""
                    }
                  >
                    <Button
                      onClick={e => this.handleAdd("resources", i)}
                      color="secondary"
                      outline
                      block
                      size="sm"
                      className="gutter-top btn-add"
                      onBlur={this.onBlur}
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
