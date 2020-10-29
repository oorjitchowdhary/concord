import React, { Component } from 'react';
import MemberCard from '../components/member';

class AboutPage extends Component {
    render() {
        return (
            <>
            <h1>About</h1>
            <p>
            After buying a notebook, people either store their notebook package
            long enough and then throw it away or they throw it away as soon as
            they get it. This cause a huge burden on the environment, giving
            rise to waste and energy management problems.
            <br />
            The current Dell Notebook packages are curbside recyclable; however,
            people do not take the initiative to recycle it because of a
            plethora of reasons including, but not limited to: lack of
            incentives, comfort, and space. This, in turn, leads to unnecessary
            dumping of non-biodegradable materials in the landfill sites, hence
            nullifying the whole purpose of making it recyclable.
            <br />
            The e-commerce platforms are flourishing with sales more than ever
            before but with e-commerce comes the problem of returns and repairs
            as well which are logistical nightmares for them.
            <br />
            Despite all precautions the fact of the matter is electronics are
            fragile products which have a significant chance of getting damaged
            during transits.
          </p>
          <h2>Meet the team</h2>
          <MemberCard name="Ansh Deo Singh" img="https://techsyndicate.co/assets/alumni/anshdeosingh.jpg" role="Coach"/>
          <MemberCard name="Oorjit Chowdhary" img="https://github.com/oorjitchowdhary.png" role="Member"/>
          <MemberCard name="Rachit Gupta" img="https://github.com/dotrachit.png" role="Member"/>
          <MemberCard name="Ansh Talwar" img="https://i.imgur.com/qZbqean.jpg" role="Member"/>
          <MemberCard name="Jai Madhukar" img="https://github.com/Jai-17.png" role="Member"/>
          <MemberCard name="Hitarth Khurana" img="https://i.imgur.com/1zCBgDg.jpg" role="Member"/>
          </>
        );
    }
}

export default AboutPage;
