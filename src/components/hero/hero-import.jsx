import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label
} from "reactstrap";

class HeroImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      import: {}
    };
    this.toggle = this.toggle.bind(this);
  }

  handleImport = () => {
    try {
      this.props.onChange("hero", JSON.parse(this.state.import));
      this.setState({ modal: false });
      this.props.alert("success", "Hero succesfully imported!");
    } catch (err) {
      console.info("SHIT:", this.state.import);
      this.props.alert(
        "danger",
        "Oops, please double check if your json is following the right format."
      );
    }
  };

  handleChange = e => {
    this.setState({ import: e.currentTarget.value });
  };

  toggle() {
    this.state.import = {};
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button color="primary" size="sm" onClick={this.toggle}>
          Import
        </Button>

        <Modal centered={true} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Export</ModalHeader>
          <ModalBody>
            <Label>Copy and paste the json object below</Label>
            <Input
              bsSize="sm"
              type="textarea"
              name="import"
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" size="sm" onClick={this.handleImport}>
              Import
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

export default HeroImport;
