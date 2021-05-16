import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import Message from '../components/Message'
import allproducts from '../allproducts'
import {addToCart,removeFromCart} from '../actions/cartActions'
const CartScreen = ({match, location,history}) => {
    const productId=match.params.id
    const qty=location.search? Number(location.search.split('=')[1]):1
    const [calcul,setCalcul]=useState(0)
    const [pqty,setPqty]=useState(0)
    const dispatch = useDispatch()
    const EMPTY_CART = { cartItems: [] }; 
    const cart = useSelector(state => state.cart || EMPTY_CART )
    const {cartItems} = cart
    console.log(cartItems)
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
      }
    
      const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
      }
      let cartProduct=allproducts.filter((item)=>item._id===match.params.id);
     

    return (
      
      <Row>
        
        <Col md={8}>
          <br></br>
          <h1>Shopping Cart</h1>
          {qty === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              { 
              
              cartProduct.map((item)=>
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price.toFixed(2)}€</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e)=>{
                          setPqty(e.target.value);
                          setCalcul(Number(e.target.value * item.price).toFixed(2));
                          console.log(calcul);
                        dispatch(
                          addToCart(item.product, Number(e.target.value)))}}
                      >
                        <option value="0">Choose ...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
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
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
        <br></br>
          <Card>
            <ListGroup variant='flush'>
            { 
              
              cartProduct.map((item)=>
              <ListGroup.Item>
                <h2>
                  Subtotal ({pqty==0?qty:pqty})
                  items
                </h2>
                {calcul==0?(qty*item.price).toFixed(2):calcul}€
              </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
     
    )
        
    
}

export default CartScreen
