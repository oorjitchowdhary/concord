import React, { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <div id="about" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="six columns" style={{ margin: "12px 0" }}>
            <img src="assets/box.png" alt="box" height="300" width="400" />
          </div>
          <div className="six columns" style={{ margin: "4% 0" }}>
            <h2>The packaging redesigned</h2>
            <br />
            <p>
              Boxes are not something that one would relate with to innovate on.
              But we, at Concord, have done the impossible. We have come up with
              a totally new and radical design for the packaging of notebooks
              governed by the principles of sustainability economy, society, and
              the environment, with emphasis on safety and security of the
              valuable piece of technology.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="six columns" style={{ margin: "4% 0" }}>
            <h2>Why</h2>
            <br />
            <p>
              People who use notebooks often feel the need to buy various
              accessories to make their working life more comfortable and
              productive. This has been heightened by the current situation in
              the world when all sorts of accessories are being bought by
              employees working from home to increase their efficiency.
            </p>
          </div>
          <div className="six columns">
            <img src="assets/box.png" alt="box" height="300" width="400" style={{margin: 'auto'}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
