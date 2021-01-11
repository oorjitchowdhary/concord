import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "none",
      url: "https://www.youtube.com/embed/YGPJVLi3aM4"
    };
    this.playVideo = this.playVideo.bind(this);
    this.closeVideo = this.closeVideo.bind(this);
  }

  playVideo() {
    this.setState({ video: "block", url: "https://www.youtube.com/embed/1A9Yn9bIPPQ" });
  }

  closeVideo() {
    this.setState({ video: "none", url: "" });
  }

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
            margin: "auto",
            padding: "15%",
          }}
        >
          <div style={{ fontSize: "10vh", fontWeight: "bold" }}>Concord</div>
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
        <div
          style={{
            display: this.state.video,
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "10",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10% 0",
          }}
          onClick={this.closeVideo}
        >
          <iframe
            src={this.state.url}
            title="video"
            width="854"
            height="480"
            allowFullScreen
            style={{ display: "block", margin: "auto" }}
          ></iframe>
        </div>
      </>
    );
  }
}

export default IndexPage;
