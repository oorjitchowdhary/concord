import React, { Component } from "react";
import Iframe from "react-iframe";

class DesignPage extends Component {
  render() {
    return (
      <div id="design" style={{ minHeight: "100vh", margin: "2%" }}>
        <div className="row">
          <h2 align="center">Design</h2>
          <br />
          <div className="row">
            <div className="six columns">
              <img
                src="assets/stand.png"
                alt="box"
                className="u-max-full-width"
              />
            </div>
            <div className="six columns">
              <img
                src="assets/box-template.png"
                alt="box template"
                className="u-max-full-width"
              />
            </div>
            <div className="six columns">
              <img
                src="assets/holder.png"
                alt="holder"
                className="u-max-full-width"
              />
            </div>
            <div className="six columns">
              <img
                src="assets/stack.png"
                alt="stack"
                className="u-max-full-width"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignPage;
