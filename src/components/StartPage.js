import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import ReadMoreButton from "./Buttons/ReadMoreButton"
import AboutBox from "./AboutBox/AboutBox"
import Footer from "./Footer/Footer"
import SkillBox from "./SkillBox/SkillBox"
import StudiesBox from "./StudiesBox/StudiesBox"
import WorkBox from "./WorkBox/WorkBox"
import LinkedInButton from "./Buttons/LinkedInButton"
import ProjectsBox from "./ProjectsBox/ProjectsBox"
import DesignsBox from "./DesignsBox/DesignsBox"
import CaseBox from "./CaseBox/CaseBox"
import Case from "./Case"
import casesJson from "../cases.json"

class StartPage extends React.Component {

  render() {
    return (
      <div>
        <div className="PageContainer">
          <AboutBox />
          <ProjectsBox />

          <div className="CaseBox">
            {casesJson.cases.map(product =>
              <CaseBox
                title={product.name}
                image={product.image}
                id={product.id} />)}
          </div>
          
          <DesignsBox />
          <SkillBox />
          <StudiesBox />
          <WorkBox />
          <LinkedInButton />
        </div>
        <Footer />
      </div>
    )
  }

}

export default StartPage
