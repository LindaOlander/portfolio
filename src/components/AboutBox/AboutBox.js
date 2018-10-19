import React from "react"
import GithubButton from "../Buttons/GithubButton"

class AboutBox extends React.Component {

  render() {
    return (
      <div className="aboutBox">
        <div className="aboutBoxImage">
          <img src="./images/linda.jpg" />
        </div>
        <div className="aboutBoxText">
          <h2>Linda Olander</h2>
          <h1>FrontEnd Developer + Digital Designer</h1>
          <p>Hi! Im Linda - a creative Frontend Developer with a sence for design and a never ending love to learn new things.
            I have seven years experience in graphic and digital design, working with clients like Tele2Arena, IKEA Shanghai, Denim is Dead, 1880 Malmö and Sveriges Ungdomsråd.
          </p>
          <GithubButton />
        </div>
      </div>
    )
  }

}

export default AboutBox
