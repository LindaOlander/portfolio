import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CasePage from "./CasePage/CasePage"
import BackBox from "./BackBox/BackBox"

const productsJson = require("./../products.json")

class Case extends React.Component {

  render() {
    return (
      <div className="PageContainer">
        <Link to="/start"><BackBox /></Link>

        {productsJson.products.map(product =>
          <CasePage
            title={product.name}
            image={product.image}
            description={product.description}
            code={product.code}
            toolbox={product.toolbox}
            more={product.more} />)}
      </div>
    )
  }
}

export default Case
