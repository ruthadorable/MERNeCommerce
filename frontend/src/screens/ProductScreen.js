import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
import Product from '../components/Product'
import products from '../allproducts'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button,Container,Form} from 'react-bootstrap'
import axios from 'axios'
import '../style.css'
import {listProductDetails} from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
const ProductScreen = ({history,match}) => {
    const [qty,setQty]=useState(0)
    /**fetching databfrom backend*/ 
  /* const [product,setProduct]=useState({})
    useEffect(()=>{
        const fetchProduct = async()=>{
            const {data}=await axios.get(`/api/allproducts/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[])*/
    const product=products.find((p)=>p._id===match.params.id)
    const addToCartHandler=()=>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    useEffect(()=>{
        if(product._id){
            dispatch(addToCart(product._id,qty))
        }
    },[dispatch,product._id,qty])

    const removeFromCartHandler= (id)=>{
        console.log('remove')
    }
    return (
        <section id="store" class="store py-5">
        <Container>
        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1 class="text-capitalize">our <strong class="banner-title ">store</strong></h1>
          </div>
        </div>

        <div class="row">
          <div class=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
            <a href="/Products" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="all"> all</a>
            <a href="/Cakes" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cakes">cakes</a>
            <a href="/Cupcakes" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cupcakes">cupcakes</a>
            <a href="/Sweets" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="sweets">sweets</a>
            <a href="/Doughnuts" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="doughnuts">doughnuts</a>
          </div>
        </div>
        <br/><br/>
        <center>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={5}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} 
                            text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Price: {product.price}€</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Description:  <br/>{product.description}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Control
                                as="select"
                                value={qty}
                                onChange={(e)=>dispatch(addToCart(product._id,Number(e.target.value)))}
                                className="my-1 mr-sm-2"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </Form.Control>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' onClick={addToCartHandler}>
                                <h4>Add to Cart</h4>
                            </Button>
                            <Button variant="light" onClick={()=>removeFromCartHandler(product._id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row></center>
        <Product product={product}/>
            
        </Container>
        </section>
    )
}

export default ProductScreen;

