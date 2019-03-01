import React from "react"

class SkillBox extends React.Component {

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <div className="skillBox">

          <div className="skills">
            <h3>Code</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>SASS</li>
              <li>GitHub</li>
              <li>Node.js</li>
              <li>Wordpress</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="skills">
            <h3>Toolbox</h3>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
              <li>Keynote</li>
              <li>Slack</li>
            </ul>
          </div>

          <div className="skills">
            <h3>More</h3>
            <ul>
              <li>Digital Design</li>
              <li>Concept Development</li>
              <li>Branding and Identity</li>
              <li>Agile methodology</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default SkillBox
