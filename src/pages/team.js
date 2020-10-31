import React, { Component } from "react";
import MemberCard from "../components/member";

class Team extends Component {
  render() {
    return (
      <div id="team" style={{ minHeight: "100vh", height: "100%" }}>
        <div className="row" style={{ minHeight: "100vh" }}>
          <h2>Meet the team</h2>
          <p>
            We're high school students from Delhi NCR, India and Dubai, UAE
            collaborating across borders to celebrate the true spirit of the
            Conrad Challenge.
          </p>
          <MemberCard
            name="Ansh Deo Singh"
            img="https://techsyndicate.co/assets/alumni/anshdeosingh.jpg"
            role="Coach"
          />
          <MemberCard
            name="Rachit Gupta"
            img="https://github.com/dotrachit.png"
            role="Member"
          />
          <MemberCard
            name="Ansh Talwar"
            img="https://i.imgur.com/qZbqean.jpg"
            role="Member"
          />
          <MemberCard
            name="Oorjit Chowdhary"
            img="https://github.com/oorjitchowdhary.png"
            role="Member"
          />
          <MemberCard
            name="Jai Madhukar"
            img="https://github.com/Jai-17.png"
            role="Member"
          />
          <MemberCard
            name="Hitarth Khurana"
            img="https://i.imgur.com/1zCBgDg.jpg"
            role="Member"
          />
        </div>
      </div>
    );
  }
}

export default Team;
