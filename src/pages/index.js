import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class IndexPage extends Component {
  render() {
    return (
      <div
        className="twelve columns"
        style={{
          backgroundColor: "#1f2e3a",
          backgroundImage: "assets/yozstand.png",
          color: "#fff",
          textAlign: "center",
          height: '100vh',
          display: 'block',
          padding: '15%'
        }}
      >
        <div style={{fontSize: '84px', fontWeight: 'bold'}}>Concord</div>
        <h5>A scientific redesign of the Dell Notebook packaging</h5><br/>
        <Hashlink smooth to="#design"><button className="button-primary" style={{fontSize: '18px'}}>Learn More</button></Hashlink>
      </div>
    );
  }
}

export default IndexPage;
