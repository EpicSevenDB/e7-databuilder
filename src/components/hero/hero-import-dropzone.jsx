import React, { Component } from "react";
import Dropzone from "react-dropzone";

class HeroImportDropzone extends Component {
  constructor() {
    super();

    this.state = {
      isUploaded: false,
      file: [],
      onEnter: false
    };
  }

  onDrop(file) {
    this.setState({ file });
    if (file.length !== 0) {
      let fileReader = new FileReader();
      fileReader.onloadend = e => {
        const result = fileReader.result;
        this.props.onUpload(result);
      };
      fileReader.readAsText(file[0]);
    }
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  onDragEnter = () => {
    this.setState({ onEnter: true });
  };

  onDragLeave = () => {
    this.setState({ onEnter: false });
  };

  render() {
    const { file } = this.state.file;

    return (
      <section>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          accept=".json"
          onFileDialogCancel={this.onCancel.bind(this)}
          multiple={false}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={
                this.state.onEnter ? "drag-and-drop active" : "drag-and-drop"
              }
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {this.state.isUploaded ? (
                file.name
              ) : (
                <React.Fragment>
                  <p className="on-deactive">
                    Drop .json file here, or click to select file
                  </p>
                  <p className="on-active">Drop and let the magic happen!</p>
                </React.Fragment>
              )}
            </div>
          )}
        </Dropzone>
      </section>
    );
  }
}

export default HeroImportDropzone;
