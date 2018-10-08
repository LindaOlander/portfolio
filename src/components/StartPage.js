import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ReadMoreButton from "./Buttons/ReadMoreButton"
import AboutBox from "./AboutBox/AboutBox"
import Footer from "./Footer/Footer"
import SkillBox from "./SkillBox/SkillBox"
import StudiesBox from "./StudiesBox/StudiesBox"
import LinkedInButton from "./Buttons/LinkedInButton"
import ProjectsBox from "./ProjectsBox/ProjectsBox"
import CaseBox from "./CaseBox/CaseBox"
import Case from "./Case"
import productsJson from "../products.json"

class StartPage extends React.Component {

  render() {
    return (
      <div>
        <div className="PageContainer">
          <AboutBox />
          <ProjectsBox />

          <div className="CaseBox">
            {productsJson.products.map(product =>
              <CaseBox
                title={product.name}
                image={product.image}
                id={product.id} />)}
          </div>

          <SkillBox />
          <StudiesBox />
          <LinkedInButton />
        </div>
        <Footer />
      </div>
    )
  }

}

export default StartPage
