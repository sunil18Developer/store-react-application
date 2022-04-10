import React, { useEffect, useState } from "react";
import axios from "axios";
const Category = (props) => {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        const category = async () => {
            await axios.get('https://fakestoreapi.com/products/categories')
                .then((response) => {
                    setCategoryData(response.data)
                }).catch((error) => {
                    console.log(error)
                })
        }
        category()
    }, [])


    function sendSelectedCategory(event) {
        console.log(event.target.value)
        props.getCategoryFromChild(event.target.value)
    }


    return (
        <div>
            <h4>Category</h4>
            <select onChange={sendSelectedCategory}>
            {
                categoryData.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    )
                })
            }
            </select>
        </div>
    )
}

export default Category