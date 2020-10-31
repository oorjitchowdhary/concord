import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  render() {
    return (
      <>
        <div
          className="twelve columns"
          style={{
            backgroundColor: "#1f2e3a",
            backgroundImage: "assets/yozstand.png",
            color: "#fff",
            textAlign: "center",
            height: "100vh",
            display: "block",
            padding: "15%",
          }}
        >
          <div style={{ fontSize: "84px", fontWeight: "bold" }}>Concord</div>
          <h5>A scientific redesign of the Dell Notebook packaging</h5>
          <br />
          <Link
            className="video-play-button"
            id="play-video"
            to="/"
            onClick={this.playVideo}
          >
            <span />
          </Link>
        </div>
        <div id="video-overlay" className="video-overlay">
          <iframe
            src="https://www.youtube.com/embed/YGPJVLi3aM4"
            title="video"
            allowFullScreen
          />
          <Link className="video-overlay-close" to="/">
            &times;
          </Link>
        </div>
      </>
    );
  }
}

export default IndexPage;
