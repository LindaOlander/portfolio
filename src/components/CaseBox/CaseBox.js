import React from "react"
import { Link } from "react-router-dom"

class CaseBox extends React.Component {

  render() {
    return (
      <Link to={`/case/${this.props.id}`}>
        <div className="caseBox">
          <h5>{this.props.title}</h5>
          <img className="caseImageBox" src={this.props.image} alt="Case" />
        </div>
      </Link>
    )
  }

}

export default CaseBox
