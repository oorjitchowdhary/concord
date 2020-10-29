import React, { Component } from "react";

class ContactPage extends Component {
  handleSubmit = () => {
    console.log("yoz");
  };

  render() {
    return (
      <div className="twelve columns">
        <h1>Contact Us</h1>
        <p>
          Interested in our product? Got a recommendation or two? Want to be a
          part of the community?
          <br />
          Reach out to us with opportunities or to understand better how you can
          save the environment by using our product.
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="name">Your name</label>
              <input
                className="u-full-width"
                type="text"
                id="name"
                placeholder="Coder anonymous"
                required
              />
            </div>
            <div className="six columns">
              <label htmlFor="email">Your email</label>
              <input
                className="u-full-width"
                type="email"
                id="email"
                placeholder="coder@anonymous.org"
                required
              />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            className="u-full-width"
            placeholder="Hello coders..."
            id="message"
            required
          />
          <button className="button-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
