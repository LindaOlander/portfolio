import React from "react"

class WorkBox extends React.Component {

  render() {
    return (
      <div>
        <h1>Work</h1>
        <div className="studiesBox">

          <div className="studies">
            <h3>Graphic Designer</h3>
            <h5>Profi Fastigheter</h5>
            <p>2016 - current. Inhouse Graphic designer working with concept development for property branding, production of web-, banner and print material.
            </p>
          </div>

          <div className="studies">
            <h3>Freelancer</h3>
            <h5>L&CO</h5>
            <p>2012 - current. Freelance designer creating Wordpress websites, invitations and graphic material for clients like Denim is Dead and IKEA Shanghai.
            </p>
          </div>

          <div className="studies">
            <h3>Jr Graphic Designer</h3>
            <h5>Prime PR</h5>
            <p>2013 - 2014. Besides being trained by some of Swedens best designers, I assisted the Production Studio Team with print design, presentation materials, banners etc.
            </p>
          </div>

        </div>
      </div>
    )
  }

}

export default WorkBox
