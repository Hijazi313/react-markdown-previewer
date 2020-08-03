import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import "./App.css";
let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }
  updateMarkDown = (markdown) => {
    this.setState({ markdown });
  };
  render() {
    var inputStyle = {
      width: "400px",
      height: "60vh",
      resize: "none",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "60vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      overflow: "auto",
    };

    return (
      <div className="App ">
        <div className="container pt-3">
          <h2 className="text-center">Markdown Previewer</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h1>
                  <Badge className="text-align-center" varient="secondary">
                    Markdown Input
                  </Badge>
                </h1>
              </div>
              <div className="mark-input">
                <textarea
                  className="form-control"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => this.updateMarkDown(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h1>
                  <Badge className="text-align-center" varient="secondary">
                    Markdown Preview
                  </Badge>
                </h1>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
