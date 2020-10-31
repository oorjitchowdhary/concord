import React, { Component } from "react";
import Iframe from "react-iframe";

class DesignPage extends Component {
  render() {
    return (
      <div
        id="design"
        style={{ minHeight: "100vh", margin: "2%", height: "100%" }}
      >
        <div className="row">
          <h2 align="center">Design</h2>
          <br />
          <p>
            Our main vision for the product is sustainability. Reusing is better
            than recycling because it saves the energy that comes with having to
            dismantle and re-manufacture products. Through our product, we focus
            on reusability while keeping in mind recyclability as all products
            outlive their utilities. Our package design allows the consumers to
            use it as a Notebook Stand and a Notebook Holder — something that
            consumers often shell out extra cash for. Thus, people won't have to
            throw their package away instantly.
          </p>
        </div>
      </div>
    );
  }
}

export default DesignPage;

{/* <div className="two columns">
<img
  src="assets/box-template.png"
  alt="box template"
  className="u-max-full-width"
/>
</div>
<div className="four columns">
<img
  src="assets/holder.png"
  alt="holder"
  className="u-max-full-width"
/>
</div>
<div className="four columns">
<img
  src="assets/stack.png"
  alt="stack"
  className="u-max-full-width"
/>
</div>
<iframe
src="https://www.youtube.com/embed/YGPJVLi3aM4"
width="854"
height="480"
title="demo"
allowFullScreen
/> */}