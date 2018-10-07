import React from "react"
import CasePage from "./CasePage/CasePage"
import BackBox from "./BackBox/BackBox"

const productsJson = require("./../products.json")

class Case extends React.Component {

  render() {
    return (
      <div className="PageContainer">
        <BackBox />
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
