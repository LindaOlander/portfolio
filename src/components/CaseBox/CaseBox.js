import React from "react"
import { Link } from "react-router-dom"

class CaseBox extends React.Component {

  render() {
    return (

        <div className="caseBox">
          <Link to={`/case/${this.props.id}`}>
            <h5>{this.props.title}</h5>
            <img className="caseImageBox" src={this.props.image} alt="Case" />
          </Link>
        </div>

    )
  }

}

export default CaseBox
