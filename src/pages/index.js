import React, { Component } from "react";

class IndexPage extends Component {
  render() {
    return (
      <>
        <h1>Coinraiders</h1>
        <p>
          We all know that Dell Notebooks are one of the most popular Dell
          products. We have decided to reduce the burden on Energy and
          Environment caused by the conventional notebook packaging.
          <br /><br />
          Illustrations to be changed obviously.
        </p>
        <div className="row">
          <div className="seven columns" style={{ margin: "0" }}>
            <h1>Problem</h1>
            <p>
              The current Dell Notebook packages are curbside recyclable;
              however, people do not take the initiative to recycle it because
              of a plethora of reasons including, but not limited to: lack of
              incentives, comfort, and space. This, in turn, leads to
              unnecessary dumping of non-biodegradable materials in the landfill
              sites, hence nullifying the whole purpose of making it recyclable.
              <br />
              <br />
              The e-commerce platforms are flourishing with sales more than ever
              before but with e-commerce comes the problem of returns and
              repairs as well which are logistical nightmares for them.
              <br />
              <br />
              Despite all precautions the fact of the matter is electronics are
              fragile products which have a significant chance of getting
              damaged during transits.
            </p>
          </div>
          <div className="five columns">
            <img
              src="assets/nature.svg"
              alt="nature"
              className="illustration"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="five columns">
            <img
              src="assets/nature.svg"
              alt="nature"
              className="illustration"
            />
          </div>
          <div className="seven columns">
            <h1>Solution</h1>
            <p>
              People who use notebooks often feel the need to buy various
              accessories to make their working life more comfortable and
              productive. This has been heightened by the current situation in
              the world when all sorts of accessories are being bought by
              employees working from home to increase their efficiency. Not only
              accessories, most businesses, schools, and public services are
              buying more and more laptops to follow proper social distancing
              and work from home protocols.
              <br />
              <br />
              Reusing is better than recycling because it saves the energy that
              comes with having to dismantle and re-manufacture products. It
              also significantly reduces waste and the subsequent pollution
              caused by it because it lessens the need for raw materials, saving
              both forests and water supplies. Therefore, through our product,
              we would like to focus on reusability but still keeping in mind
              recyclability as all products outlive there utilities.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default IndexPage;
