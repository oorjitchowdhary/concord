import React, { Component } from "react";
import ToastService from "react-material-toast";

const toast = ToastService.new({
  place: "topRight",
  duration: 2000,
  maxCount: 2000,
});

class ContactPage extends Component {
  handleSubmit = () => {
    toast.success("Your message was sent successfully.");
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
                style={{ backgroundColor: "#222", borderColor: "#222" }}
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
                style={{ backgroundColor: "#222", borderColor: "#222" }}
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
