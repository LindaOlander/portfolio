import React from "react"

class CaseBox extends React.Component {

  render() {
    return (
      <div className="caseBox">
        <h4>{this.props.title}</h4>
        <img className="caseImageBox" src={this.props.image} alt="Case" />
      </div>
    )
  }

}

export default CaseBox
