import React from "react"
import { Router as Router, Route, Link } from "react-router-dom"
import CasePage from "./CasePage/CasePage"
import BackBox from "./BackBox/BackBox"
import casesJson from "../cases.json"

class Case extends React.Component {

  render() {
    return (
      <div className="PageContainer">
        <Link to="/start"><BackBox /></Link>
        <CasePage />

      </div>
    )
  }
}

export default Case
