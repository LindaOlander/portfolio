import React from "react"

class CasePage extends React.Component {

  render() {
    return (
      <div className="casePage">
        <img className="casePageImage" src={this.props.image} alt="Case" />
        <div className="casePageText">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <button>See it live</button>
        </div>
        <div className="casePageTech">
          <div className="techContent">
            <h4>Code</h4>
            <p>{this.props.code}</p>
          </div>
          <div className="techContent">
            <h4>Toolbox</h4>
            <p>{this.props.toolbox}</p>
          </div>
          <div className="techContent">
            <h4>More</h4>
            <p>{this.props.more}</p>
          </div>
        </div>
        <div className="buttonBox">
          <button>View the code</button>
        </div>
      </div>

    )
  }

}

export default CasePage
