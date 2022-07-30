import React, { Component } from 'react'
import formatCurrency from "../util.js";
        
export default class products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
            {this.props.products.map(product =>(
                <li key={product._id}>
                    <div className="product">
                        <a href={"#" + product._id}>
                            <div image={product.image} alt={product.image}></div>
                                <p>
                                    {product.title}
                                </p>
                        
                        </a>
                        <div className="product-price">
                            <div>
                                {formatCurrency(product.price)}
                            </div>
                            <button className="button primary">Add To Cart</button>
                        </div>
                        </div>
                    
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

