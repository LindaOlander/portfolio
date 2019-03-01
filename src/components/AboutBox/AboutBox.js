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
          <h1>Frontend Developer <br /> + Digital Designer</h1>
          <p>Hi! Im Linda - a creative Frontend Developer with a sence for design and a never ending love to learn new things.
            I have seven years experience in graphic and digital design, working with clients like Tele2Arena, IKEA Shanghai, Denim is Dead and Sveriges Ungdomsråd.
            My studies in Frontend Development have given me the tools to create some really cool digital stuff. Im very exited to the future.
          </p>
          <GithubButton />
        </div>
      </div>
    )
  }

}

export default AboutBox
