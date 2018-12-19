import React, { Component } from "react";
import HeroDownload from "./hero-download";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Alert,
  Label
} from "reactstrap";

class HeroExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onCopyToClipboard = () => {
    this.setState({ modal: false });
    this.props.alert("success", "Copied to clipboard!");
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onDismiss() {
    this.setState({ copied: false });
  }

  render() {
    const { output, isDark } = this.props;
    const isBlank = output.name.length !== 0 ? false : true;
    return (
      <React.Fragment>
        <Button color="warning" size="sm" onClick={this.toggle}>
          Export
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={isDark && "dark"}
        >
          <Alert
            color="success"
            className={this.state.copied ? "toaster" : "toaster hide"}
          >
            Copied to Clipboard!
          </Alert>
          <ModalHeader toggle={this.toggle}>Export</ModalHeader>
          <ModalBody>
            <Label>Copy to clipboard or download .json file</Label>
            <Input
              bsSize="sm"
              className="preview"
              type="textarea"
              readOnly
              value={JSON.stringify(output)}
            />
            <CopyToClipboard
              text={JSON.stringify(output)}
              onCopy={this.onCopyToClipboard}
              className="btn-copy"
            >
              <Button color="warning" size="sm">
                Copy to clipboard
              </Button>
            </CopyToClipboard>
          </ModalBody>
          <ModalFooter>
            <small className={!isBlank && "hidden"}>
              Hero's name cannot be blank to download
            </small>
            <HeroDownload output={output} />
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
