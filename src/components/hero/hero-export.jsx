import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Alert
} from "reactstrap";

class HeroExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      copied: false
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onDismiss() {
    this.setState({ copied: false });
  }

  onCopyToClipboard = () => {
    const copied = { ...this.state.copied };
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 3000);
  };
  render() {
    const { output } = this.props;
    return (
      <React.Fragment>
        <Button color="success" size="sm" onClick={this.toggle}>
          Export
        </Button>

        <Modal centered={true} isOpen={this.state.modal} toggle={this.toggle}>
          <Alert
            color="success"
            isOpen={this.state.visible}
            className={this.state.copied ? "toaster" : "toaster hide"}
          >
            Copied to Clipboard!
          </Alert>
          <ModalHeader toggle={this.toggle}>Export</ModalHeader>
          <ModalBody>
            <Input
              size="sm"
              type="textarea"
              readOnly
              value={JSON.stringify(output)}
            />
          </ModalBody>
          <ModalFooter>
            <CopyToClipboard
              text={JSON.stringify(output)}
              onCopy={this.onCopyToClipboard}
            >
              <Button color="success" size="sm">
                Copy to clipboard
              </Button>
            </CopyToClipboard>

            <Button color="secondary" size="sm" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default HeroExport;
