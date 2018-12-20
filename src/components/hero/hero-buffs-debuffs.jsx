import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CustomInput,
  Row,
  Col
} from "reactstrap";

class HeroBuffsDebuffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      effects: []
    };
    this.toggle = this.toggle.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }
  setDefault = () => {
    this.setState({ modal: !this.state.modal, effects: this.props.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = slug => {
    let effects = [...this.state.effects];
    let index = effects.indexOf(slug);
    if (index === -1) {
      effects = [...effects, slug];
    } else {
      effects = [...effects.slice(0, index), ...effects.slice(index + 1)];
    }
    this.setState({ effects });
  };

  handleSave = () => {
    this.props.onChange(this.props.type, this.state.effects, this.props.index);
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { isDark, index, defaults, type } = this.props;
    const { effects } = this.state;
    return (
      <React.Fragment>
        <Button color="success" size="sm" onClick={this.setDefault}>
          +
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={isDark ? "dark" : ""}
          fade={false}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>{type}</ModalHeader>
          <ModalBody>
            <Row>
              {defaults.map((effect, i) => (
                <Col lg="4" md="6" key={"effect-" + index + "-" + i}>
                  <CustomInput
                    id={"effect-" + effect.slug}
                    type="checkbox"
                    name="effect"
                    className={
                      effects.indexOf(effect.slug) >= 0
                        ? type + " block checked"
                        : type + " block"
                    }
                    label={effect.title}
                    checked={effects.indexOf(effect.slug) >= 0 ? true : false}
                    onChange={() => this.handleChange(effect.slug)}
                  />
                </Col>
              ))}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" size="sm" onClick={this.handleSave}>
              Save
            </Button>
            <Button color="secondary" size="sm" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default HeroBuffsDebuffs;
