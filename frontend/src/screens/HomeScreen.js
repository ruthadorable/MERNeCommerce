import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Latest from '../components/Latest'
import axios from 'axios'

const HomeScreen = () =>{
    const [latest,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data}=await axios.get('/api/latestproducts')
            setProducts(data)
        }
        fetchProducts()
        
    },[])
    const styleH1 = {
        fontFamily: 'Open Sans',
        fontSize: 25,
        margin: '10px',
        color: 'light-grey'
    }
    return (
        <>
        <p style={styleH1}>Latest Products</p>
        <Row>
            {latest.map(latest=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Latest product={latest}/>
                </Col>
            ))}
        </Row>
        </>
    )
}
export default HomeScreen