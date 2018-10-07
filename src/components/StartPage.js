import React from "react"
import ReadMoreButton from "./Buttons/ReadMoreButton"
import AboutBox from "./AboutBox/AboutBox"
import Footer from "./Footer/Footer"
import SkillBox from "./SkillBox/SkillBox"
import StudiesBox from "./StudiesBox/StudiesBox"
import LinkedInButton from "./Buttons/LinkedInButton"
import ProjectsBox from "./ProjectsBox/ProjectsBox"
import CaseBox from "./CaseBox/CaseBox"

const productsJson = require("./../products.json")

class StartPage extends React.Component {

  render() {
    return (
      <div className="PageContainer">
        <AboutBox />
        <ProjectsBox />

        <div className="CaseBox">
          {productsJson.products.map(product =>
            <CaseBox
              title={product.name}
              image={product.image} />)}
        </div>

        <SkillBox />
        <StudiesBox />
        <LinkedInButton />
      </div>
    )
  }

}

export default StartPage
