import React, { Component } from "react";
import HeroImportDropzone from "./hero-import-dropzone";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Col,
  Row
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

  handleImport = e => {
    try {
      this.props.onChange("hero", JSON.parse(e));
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
    const { isDark } = this.props;
    return (
      <React.Fragment>
        <Button color="primary" size="sm" onClick={this.toggle}>
          Import
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={isDark && "dark"}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>Import</ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <Input
                  bsSize="sm"
                  type="textarea"
                  name="import"
                  placeholder="Copy and paste the json code here"
                  onChange={this.handleChange}
                />
              </Col>
              <Col md="1" className="align-center">
                <h6>Or</h6>
              </Col>
              <Col>
                <HeroImportDropzone onUpload={this.handleImport} />
              </Col>
            </Row>
            <small>
              * Note: Nothing is being uploaded to a server, this is all in the
              browser
            </small>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              size="sm"
              onClick={e => this.handleImport(this.state.import)}
            >
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
