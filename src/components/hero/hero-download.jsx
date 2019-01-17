import React, { Component } from "react";

class HeroDownload extends Component {
    handleDownload = () => {
        const dl = JSON.stringify(this.props.output);
        console.info("Download now", dl);
    };

    render() {
        const { output } = this.props;
        const isBlank = output.name.length !== 0 ? false : true;
        const name = output.name.replace(/[^a-z0-9]/gi, "-").toLowerCase();
        return (
            <React.Fragment>
                <a
                    className={isBlank ? "btn btn-warning btn-sm disabled" : "btn btn-warning btn-sm"}
                    href={"data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(output, null, 2))}
                    onClick={this.handleDownload}
                    download={name + ".json"}
                >
                    Download
                </a>
            </React.Fragment>
        );
    }
}

export default HeroDownload;
