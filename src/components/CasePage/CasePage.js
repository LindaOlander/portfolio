import React from "react"
import { withRouter } from "react-router-dom"
import casesJson from "../../cases.json"

class CasePage extends React.Component {

  render() {
    const id = this.props.match.params.id
    let project = null
    casesJson.cases.forEach(item => {
      if (item.id === id) {
        project = item
      }
    })

    return (
      <div className="casePage">
        <img className="casePageImage" src={project.image} alt="Case" />
        <div className="casePageText">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <a href={project.live} target="_blank"><button>See it live</button></a>
        </div>
        <div className="casePageTech">
          <div className="techContent">
            <h4>Code</h4>
            <ul>
              {project.code.map(item =>
                <li>{item}</li>)}
            </ul>
          </div>
          <div className="techContent">
            <h4>Toolbox</h4>
            <ul>
              {project.toolbox.map(item =>
                <li>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="buttonBox">
          <a href={project.github} target="_blank"><button>View the code</button></a>
        </div>
      </div>

    )
  }

}

export default withRouter(CasePage)
