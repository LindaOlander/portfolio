import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import CasePage from "./CasePage/CasePage"
import BackButton from "./Buttons/BackButton"
import casesJson from "../cases.json"

// <Link to="/start"><BackBox /></Link>
//
class Case extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="PageContainer">
        <Link to="/start"><BackButton /></Link>
        <CasePage />
      </div>
    )
  }
}

export default Case
