import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
import Sort from './components/Sort'
import ProductList from './components/ProductList';
import Limit from './components/Limit';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [allProductData, setAllProductData] = useState([])
  const [limit, setLimit] = useState(0)
  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const getAllData = async () => {
      await axios.get('https://fakestoreapi.com/products').then((response) => {
        setAllProductData(response.data)
      }).catch((error)=>{
        console.log(error)
      })
    }

    getAllData()
  }, [])

  const getLimitData = async ()=>{
    console.log(limit)
    await axios.get('https://fakestoreapi.com/products?limit='.concat(limit)).then((response)=>{
      setAllProductData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const getSortData = async ()=>{
    await axios.get('https://fakestoreapi.com/products?sort='.concat(sort)).then((response)=>{
      setAllProductData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  
  const getCategoryData = async ()=>{
    await axios.get('https://fakestoreapi.com/products/category/'.concat(category)).then((response)=>{
      setAllProductData(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  function getCategoryFromChild(category) {
    console.log(category)
    setCategory(category)
    if(category!=='   '){
      getCategoryData()
    }
  }

  function getSortFromChild(sort) {
    console.log(sort)
    if(sort){
      setSort('asc')
      getSortData()
    }else{
      setSort('desc')
      getSortData()
    }
  }

  function getLimitFromChild(limit) {
    console.log(limit)
    setLimit(limit)
    if(limit>5){
    getLimitData()
    }
  }
  return (
    <div className='app-flex-container'>
      <div className='category'>
        <Category getCategoryFromChild={getCategoryFromChild} />
      </div>
      <div className='produc-tlist'>
        <ProductList productList={allProductData} />
      </div>
      <div className='sort-limit'>
        <Limit getLimitFromChild={getLimitFromChild} />
        <Sort getSortFromChild={getSortFromChild} />
      </div>
    </div>
  );


  
}

export default App;
