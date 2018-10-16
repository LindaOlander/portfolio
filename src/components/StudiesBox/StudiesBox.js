import React from "react"

class StudiesBox extends React.Component {

  render() {
    return (
      <div>
        <h1>Studies</h1>
        <div className="studiesBox">

          <div className="studies">
            <h3>Front-End Developer</h3>
            <h5>Technigo</h5>
            <p>Front End Development studies in an intensive boot camp format. Studies include JavaScript (ES6), React, Html5, CSS3, Node js.</p>
          </div>

          <div className="studies">
            <h3>Art Direction</h3>
            <h5>Berghs School of Communications</h5>
            <p>Three months evening course in Art Direction, practical and theoretical study of concept development and digital design.
            Learning the creative process, planning, communication analysis and new media.</p>
          </div>

          <div className="studies">
            <h3>Project Management</h3>
            <h5>Stockholm University</h5>
            <p>One semester course in project management, learning project planning, time and risk management, practical management of projects in a constantly changing society.</p>
          </div>

          <div className="studies">
            <h3>Bachelor in Media Communications</h3>
            <h5>Uppsala University</h5>
            <p>Bachelors degree with Media Communications as major, including studies in psychology, journalistics, digital communication. </p>
          </div>

        </div>
      </div>
    )
  }

}

export default StudiesBox
