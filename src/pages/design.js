import React, { Component } from "react";
import Iframe from "react-iframe";

class DesignPage extends Component {
  render() {
    return (
      <div className="twelve columns">
        <h1>Dezining</h1>
        <p>
          Explain the design here along with the animation video and 3D renders.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          diam convallis, vulputate turpis ac, blandit nibh. Etiam convallis
          justo eu sapien facilisis, sit amet laoreet arcu convallis. Maecenas
          vitae nulla at orci vehicula fringilla. Cras quis dui felis. Praesent
          eleifend sem vel erat iaculis rhoncus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Etiam posuere turpis mauris, sit amet
          aliquet neque imperdiet eget. Curabitur tempor accumsan diam. Nunc
          quis bibendum lorem. Vestibulum non blandit turpis. Quisque mollis
          eros vitae ipsum scelerisque ultrices. Nulla facilisi. Quisque sem
          odio, convallis vel lorem at, iaculis varius lorem. Praesent luctus
          lorem eu mauris congue, et vestibulum lacus efficitur. Aliquam
          tincidunt dapibus mollis. Suspendisse potenti. Donec egestas arcu a
          nisl gravida, a ultricies diam ornare. Sed commodo congue sodales.
          <br />
          <br />
          Vestibulum faucibus placerat leo sit amet fringilla. Sed accumsan
          neque vel neque accumsan viverra. Etiam suscipit dapibus ligula sit
          amet ullamcorper. Nunc et ipsum aliquet est dictum efficitur in non
          diam. Nunc elit ante, porta vitae metus a, eleifend molestie ligula.
        </p>
        <Iframe
          url="https://www.youtube.com/embed/ipF6ovrD8wk"
          width="100%"
          height="500px"
          display="block"
          position="relative"
        /><br/>
      </div>
    );
  }
}

export default DesignPage;
