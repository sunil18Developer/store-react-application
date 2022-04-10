import React from "react";
import { Link } from "react-router-dom";
import '../componentstyles/ProductList.css'

const ProductList = (props) => {

    return (
        <div className="card-flex-container">
            <div>
                {
                    props.productList.map((product) => {
                        return (
                            <div key={product.id}>
                                <div>
                                    <img src={product.image} alt="productImage" width={'300px'} height={'300px'} />
                                </div>
                                <div className="card-grid-equal">

                                    <p>
                                        Title:    {product.title}
                                    </p>
                                    <p>

                                        Price    {product.price}
                                    </p>
                                    <p>
                                        Category    {product.category}
                                    </p>
                                    <div>
                                        <Link className="product-detail-link" to={'/products/'.concat(product.id)}>Product Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList