import React, { Component } from "react";

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
        <a href="#about"><button className="button-primary" style={{fontSize: '18px'}}>Learn More</button></a>
      </div>
    );
  }
}

export default IndexPage;
