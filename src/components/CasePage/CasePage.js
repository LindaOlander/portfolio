import React from "react"
import { withRouter } from "react-router-dom"
import productsJson from "../../products.json"

class CasePage extends React.Component {

  render() {
  
    const id = this.props.match.params.id
    let project = null
    productsJson.products.forEach(item => {
      if(item.id === id){
        project = item
      }
    })

    return (
      <div className="casePage">
        <img className="casePageImage" src={project.image} alt="Case" />
        <div className="casePageText">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <button>See it live</button>
        </div>
        <div className="casePageTech">
          <div className="techContent">
            <h4>Code</h4>
            <p>{project.code}</p>
          </div>
          <div className="techContent">
            <h4>Toolbox</h4>
            <p>{project.toolbox}</p>
          </div>
          <div className="techContent">
            <h4>More</h4>
            <p>{project.more}</p>
          </div>
        </div>
        <div className="buttonBox">
          <button>View the code</button>
        </div>
      </div>

    )
  }

}

export default withRouter(CasePage)
