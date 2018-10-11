import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import StartPage from "./StartPage"
import Case from "./Case"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "StartPage"
    }
  }

  goToCase = () => {
    this.setState({ page: "Case" })
  }

  goToStart = () => {
    this.setState({ page: "StartPage" })
  }

  render() {
    return (
      <HashRouter>
        <div className="navigation">
          <Route path="/case" exact="true" component={Case} />
          <Route path="/start" exact="true" component={StartPage} />
          <Route path="/case/:id" component={Case} />
        </div>
      </HashRouter>
    )
  }

}

export default App
