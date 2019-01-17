import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class HeroReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleReset = () => {
        this.setState({
            modal: !this.state.modal
        });
        this.props.alert("success", "Form reset!");
        this.props.onReset();
    };

    render() {
        const { isDark } = this.props;
        return (
            <React.Fragment>
                <Button color="success" size="sm" onClick={this.toggle} className="pull-left">
                    New
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={isDark ? "dark" : ""} fade={false}>
                    <ModalHeader toggle={this.toggle}>New Hero</ModalHeader>
                    <ModalBody>
                        <p>
                            Starting a new hero will <strong className="text-danger">reset</strong> the form and{" "}
                            <strong className="text-danger">wipe any existing data.</strong> Make sure to download the
                            json file or copy and paste it somewhere before you start a new hero.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" size="sm" onClick={this.handleReset}>
                            New Hero
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

export default HeroReset;
