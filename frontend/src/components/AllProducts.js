import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import '../style.css'
const AllProducts = ({product}) => {
    return (
        <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item" data-item={product.category}>
        <Card class="card">
        <div class="img-container">
          <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} />
            </Link>
            <span class="store-item-icon" >
              <i class="fas fa-shopping-cart" href="/Cart"></i>
            </span>
          </div>
          <div class="card-body">
            <div class="card-text d-flex justify-content-between text-capitalize">
              <h5 id="store-item-name">{product.name}</h5>
              <h5 class="store-item-value"><strong id="store-item-price" class="font-weight-bold">{product.price}</strong>€</h5>

            </div>
          </div>
          </Card>
      </div>
       
      
    )
}

export default AllProducts
