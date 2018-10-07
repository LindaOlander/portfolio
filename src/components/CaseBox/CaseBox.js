import React from "react"

class CaseBox extends React.Component {

  render() {
    return (
      <div className="caseBox">
        <h5>{this.props.title}</h5>
        <img className="caseImageBox" src={this.props.image} alt="Case" />
      </div>
    )
  }

}

export default CaseBox
