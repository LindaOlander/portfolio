import React from "react"
import ReadMoreButton from "./Buttons/ReadMoreButton"
import AboutBox from "./AboutBox/AboutBox"
import Footer from "./Footer/Footer"

class StartPage extends React.Component {

  render() {
    return (
      <div className="startPageContainer">
        <AboutBox />
        <Footer />
      </div>
    )
  }

}

export default StartPage
