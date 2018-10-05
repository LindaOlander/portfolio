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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <GithubButton />
        </div>
      </div>
    )
  }

}

export default AboutBox
