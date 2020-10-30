import React, { Component } from "react";

class MemberCard extends Component {
  render() {
    return (
      <div className="four columns" style={{margin: '0'}}>
        <div className="card">
          <img
            src={this.props.img}
            alt={this.props.name}
            className="card-img"
          />
          <h6>{this.props.name}</h6>
          <p>{this.props.role}</p>
        </div>
      </div>
    );
  }
}

export default MemberCard;
