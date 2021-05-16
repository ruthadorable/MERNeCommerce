import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const SignupScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  var [adresse,setAdresse]=useState('')
  const [streetnumber,setStreetnumber]=useState('')
  const [codepostal,setCodepostal]=useState('')
  const [city,setCity]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const EMPTY_USERS = { cartItems: [] }; 
  const userRegister = useSelector((state) => state.userRegister || EMPTY_USERS)
  const {loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='adresse'>
          <Form.Label>Address for delivery</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Street '
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          
          <Form.Control
            type='number'
            placeholder='Enter Street number'
            value={streetnumber}
            onChange={(e) => setStreetnumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='code postal'>
          
          <Form.Control
            type='number'
            placeholder='Enter postal code'
            value={codepostal}
            onChange={(e) => setCodepostal(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          
          <Form.Control
            type='text'
            placeholder='Enter your city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phonenumber'>
          <Form.Label>Cellphone number</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter your phone number'
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
  setAdresse(adresse+" "+streetnumber+" "+codepostal+" "+city)
  console.log(adresse)
}

export default SignupScreen