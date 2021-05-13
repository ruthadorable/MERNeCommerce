import React ,{Component}from 'react'
import {BrowserRouter as Router ,Switch, Route,Redirect} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Latest from './components/Latest'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import PriceScreen from './screens/PriceScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import AboutmeScreen from './screens/AboutmeScreen'
import CartScreen from './screens/CartScreen'
import Navbar from './components/Navbar'
import Products from './screens/Products'
import Cupcakes from './screens/Cupcakes'
import Cakes from './screens/Cakes'

const App=()=>{
  
  return(
    <Router>
      <Navbar/>
      <Header/>
     <main className="py-3">
       <Container>
         <Body/>
         <Route path='/' component={HomeScreen} exact/>
         <Route path='/product/:id' component={ProductScreen} exact/>
         <Route path='/products'component={Products} exact/>
         <Route path='/Cupcakes'component={Cupcakes} exact/>
         <Route path='/Cupcakes/:id'component={Cupcakes} exact/>
         <Route path='/Cakes'component={Cakes} exact/>
         <Route path='/pricing' component={PriceScreen} exact/>
         <Route path='/about' component={AboutmeScreen} exact/>
         <Route path='/signup' component={SignupScreen} exact/>
         <Route path='/cart' component={CartScreen} exact/>
         <Route path='/cart/:id?' component={CartScreen} />
         <Route path='/login' component={LoginScreen} exact/>
       </Container>
       
     </main> 
     <Footer/>
    </Router>
    
  )
}

export default App;
