import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../componentstyles/ProductInfo.css'
import axios from "axios";
const ProductInfo = () => {
    const id = useParams()
    const [productData, setProductData] = useState([])


    useEffect(() => {
        const getProductDetail = async () => {
            await axios.get('https://fakestoreapi.com/products/'.concat(id.id)).then((response) => {
                console.log(response.data)
                setProductData(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        getProductDetail()
    }, [id])

    return (
        <div className="product-detail-container">
            <h2>Product Detail</h2>
            <div key={productData.id}>
                <div>
                    <img src={productData.image} alt='productimage' width={'300px'} height={'270px'} />
                    <hr/>
                </div>
                <div className="product-grid-container">

                <p><h4>Product title:</h4>  {productData.title}</p>
                <p><h4>Product category:</h4>  {productData.category}</p>
                <p><h4>Product description:</h4> {productData.description}</p>
                <p><h4>Product price:</h4> {productData.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo