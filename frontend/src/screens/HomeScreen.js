import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import AllProducts from '../components/AllProducts'
import Message from '../components/Message'
import Loader from '../components/Loader'
import latestproducts from '../latest'
import {listProducts} from '../actions/productActions'
import axios from 'axios'

const HomeScreen = () =>{
    const productList=useSelector((state)=>state.productList)
    const {loading,error,products}=productList
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    
    const styleH1 = {
        fontFamily: 'Open Sans',
        fontSize: 25,
        margin: '10px',
        color: 'light-grey'
    }
    return (
        <>
        <p style={styleH1}>Latest Products</p>
        {loading ?(<Loader/>)
        :error?(<Message variant='danger'>{error}</Message>)
        : (
       <Row>
            {latestproducts.map((val)=>(
                
                    <AllProducts product={val}/>
                
            ))}
       </Row>
       )} 
        </>
    )
}
export default HomeScreen