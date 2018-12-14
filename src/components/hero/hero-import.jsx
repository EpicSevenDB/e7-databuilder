import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Alert
} from "reactstrap";

class HeroImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      alert: false,
      import: {}
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleImport = () => {
    this.props.onChange("hero", JSON.parse(this.state.import));
    this.setState({ modal: false });
    this.setState({ alert: true });
    setTimeout(() => {
      this.setState({
        alert: false
      });
    }, 3000);
  };
  handleChange = e => {
    this.setState({ import: e.currentTarget.value });
  };
  onDismiss() {
    this.setState({ modal: false });
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
        <Alert
          color="success"
          className={this.state.alert ? "toaster" : "toaster hide"}
        >
          {"Hero successfully imported"}
        </Alert>
      </React.Fragment>
    );
  }
}

export default HeroImport;
